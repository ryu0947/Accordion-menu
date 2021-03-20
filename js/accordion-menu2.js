$(function () {
  $(".accordion-btn").each(function () {
    $(this).on("click", function () {
      $(this).next(".accordion-list").slideToggle();
    });
  });
});
