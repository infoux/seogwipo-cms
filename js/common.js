$(document).ready(function() {

  $("nav li a").click(function() {

    $(this).closest("li").toggleClass("active");


  });


});
