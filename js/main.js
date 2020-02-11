$(document).ready(function () {
  $(".slider").slick({
    dots: !0,
    dotsClass: "slider-dots",
    infinite: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    adaptiveHeight: 0,
    autoplay: !0,
    autoplaySpeed: 3000
  });
  $(".mobile-menu_btn").on("click", function () {
    $(".mobile-menu").toggleClass("mobile-menu_active")
  });
  $(".mobile-menu_btn-close").on("click", function () {
    $(".mobile-menu").removeClass("mobile-menu_active")
  });
    
  $('[data-target="modal"]').click(function () {
    $(".popup").fadeIn("slow")
  });
  $(".popup-close").click(function () {
    $(".popup").fadeOut("slow")
  });
});
