//smooth scrolling
$(".toContent").on("click", function(e){
   e.preventDefault();
   $("body, html").animate({
     scrollTop: $( $(this).attr('href') ).offset().top
   }, 800);
 });

//back to top button
// http://jsfiddle.net/mnQb6/
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });
