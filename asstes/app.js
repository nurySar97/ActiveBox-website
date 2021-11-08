$(function () {
  // HEADER
  const header = $("#header");
  const intro = $("#intro");
  const introH = intro.innerHeight();
  const scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH - 650) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    const elementId = $(this).data("scroll");
    const elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      1000
    );
  });

  // Nav Toggle

  const nav = $("#nav");
  const navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  const slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
