$(document).ready(function () {
  $(".mobile-menu_btn").on("click", function (t) {
    t.preventDefault(), $(".mobile-menu").toggleClass("mobile-menu_active")
  }),
  $(".mobile-menu_btn-close").on("click", function (t) {
    t.preventDefault(), $(".mobile-menu").removeClass("mobile-menu_active")
  }),
  $('[data-target="modal"]').click(function () {
    $(".popup").fadeIn("slow")
  }),
  $(".popup-close").click(function () {
    $(".popup").fadeOut("slow")
  }),
  $.ajax({
    type: "GET",
    url: "http://cat-and-human.ru/floating/XML/float_mas.xml",
    dataType: "xml",
    success: xmlParser_1
  }),
  $.ajax({
    type: "GET",
    url: "http://cat-and-human.ru/floating/XML/floating.xml",
    dataType: "xml",
    success: xmlParser_2
  }),
  $.ajax({
    type: "GET",
    url: "http://cat-and-human.ru/floating/XML/massage.xml",
    dataType: "xml",
    success: xmlParser_3
  }),
  $.ajax({
    type: "GET",
    url: "http://cat-and-human.ru/floating/XML/subscription.xml",
    dataType: "xml",
    success: xmlParser_4
  })
});
function xmlParser_1(t) {
  $(t).find("float_mas_item").each(function () {
    $("#xml1").append("<tr><td>" + $(this).find("name").text() + "</td><td>" + $(this).find("delay").text() + "</td><td>" + $(this).find("cost").text() + "</td></tr>")
  })
}
function xmlParser_2(t) {
  $(t).find("floating_item").each(function () {
    $("#xml2").append("<tr><td>" + $(this).find("name").text() + "</td><td>" + $(this).find("delay").text() + "</td><td>" + $(this).find("cost").text() + "</td></tr>")
  })
}
function xmlParser_3(t) {
  $(t).find("massage_item").each(function () {
    $("#xml3").append("<tr><td>" + $(this).find("name").text() + "</td><td>" + $(this).find("delay").text() + "</td><td>" + $(this).find("cost").text() + "</td></tr>")
  })
}
function xmlParser_4(t) {
  $(t).find("subscription_item").each(function () {
    $("#xml4").append("<tr><td>" + $(this).find("name").text() + "</td><td>" + $(this).find("delay").text() + "</td><td>" + $(this).find("cost").text() + "</td></tr>")
  })
}