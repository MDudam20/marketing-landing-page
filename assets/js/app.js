var THEMETAGS = THEMETAGS || {};
!(function () {
  "use strict";
  $(window).ready(function () {
    $("#preloader").delay(100).fadeOut("fade");
  }),
    $("ul.nav li.dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(200);
      },
      function () {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeOut(200);
      }
    ),
    $(window).on("scroll", function () {
      $(window).scrollTop() < 2
        ? $("nav.sticky-header").removeClass("affix")
        : $("nav.sticky-header").addClass("affix");
    });
  new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: !0,
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
      1142: { slidesPerView: 2, spaceBetween: 25 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
    new Swiper(".testimonialThreeSwiper", {
      slidesPerView: 2,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: !0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 3, spaceBetween: 30 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    new Swiper(".appTwoReviewSwiper", {
      slidesPerView: 2,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 3, spaceBetween: 30 },
      },
    }),
    new Swiper(".brand-logo-slider", {
      slidesPerView: 2,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 30 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        991: { slidesPerView: 5, spaceBetween: 30 },
      },
    }),
    new Swiper(".cyber-testimonial-slider", {
      slidesPerView: 1,
      speed: 700,
      pagination: { clickable: !0, el: ".swiper-pagination" },
      slidesPerGroup: 2,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
      },
    }),
    new Swiper(".cyber-blog", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1e3,
      autoplay: { delay: 2500 },
      slidesPerGroup: 1,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
      },
    }),
    new Swiper(".crypto-testimonial", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1e3,
      autoplay: { delay: 2500 },
      slidesPerGroup: 1,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
      },
    }),
    new Swiper(".hero-slider", {
      slidesPerView: 1,
      loop: !0,
      speed: 800,
      autoplay: { delay: 3e3 },
    }),
    new Swiper(".swiper-containerb", {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: !0,
      freeMode: !0,
      grabCursor: !0,
      loop: !0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      autoplay: { delay: 1e3, disableOnInteraction: !1 },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        500: { slidesPerView: 2 },
        700: { slidesPerView: 3.5 },
        991: { slidesPerView: 4.5 },
      },
    }),
    new Swiper(".payment-brand-logo", {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1e3,
      autoplay: { delay: 2500 },
      slidesPerGroup: 1,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
    }),
    new Swiper(".payment-testimonial-slider", {
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 1e3,
      autoplay: { delay: 3e3 },
      slidesPerGroup: 1,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
      },
    }),
    new Swiper(".digi-logo-slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1e3,
      autoplay: { delay: 2500 },
      slidesPerGroup: 1,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 6 },
      },
    }),
    new Swiper(".digi-testimonial-wrapper", {
      slidesPerView: 1,
      loop: !0,
      speed: 800,
      navigation: {
        nextEl: ".digi-nav-control .swiper-button-next",
        prevEl: ".digi-nav-control .swiper-button-prev",
      },
    }),
    new Swiper(".ev-testimonial-slider", {
      slidesPerView: 1,
      loop: !0,
      speed: 800,
      pagination: { clickable: !0, el: ".eve-pagination.swiper-pagination" },
    });
  (THEMETAGS.initialize = {
    init: function () {
      THEMETAGS.initialize.general();
    },
    general: function () {
      $(".parallax-element").parallax({ scalarX: 100, scalarY: 100 });
    },
  }),
    (THEMETAGS.documentOnReady = {
      init: function () {
        THEMETAGS.initialize.init();
      },
    }),
    $(document).ready(THEMETAGS.documentOnReady.init),
    $(function () {
      $('[data-bs-toggle="tooltip"]').tooltip();
    }),
    AOS.init({ easing: "ease-in-out", once: !0, duration: 500 }),
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: !1,
      focus: "#name",
    });
})();
