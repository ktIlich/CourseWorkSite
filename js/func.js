$(".mobile-menu_btn").on("click", function (e) {
  e.preventDefault(), $(".mobile-menu").toggleClass("mobile-menu_active")
}), $(".mobile-menu_btn-close").on("click", function (e) {
  e.preventDefault(), $(".mobile-menu").removeClass("mobile-menu_active")
}), $('[data-target="modal"]').click(function () {
  $(".popup").fadeIn("slow")
}), $(".popup-close").click(function () {
  $(".popup").fadeOut("slow")
});
