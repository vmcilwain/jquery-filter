$(document).on('keyup', "#filter", function(event) {
  var val = $(this).val().replace(/[^a-z0-9\s]/gi, '');
  var $lis = $("#list li");
  val == '' ? $lis.show() : $lis.hide().filter("[data-search-value*='"+val+"']").show();
});
