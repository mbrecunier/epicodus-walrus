jQuery(document).ready(function() {
  $(".peekaboo .clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $("#fading-content .clickable").click(function() {
    $("#fading-content").fadeOut( "slow", "linear");
  });

  $("#come-back .clickable").click(function() {
    $("#fading-content").fadeIn( "fast" );
  })





  // jQuery("h1").click(function(){
  //   alert("This is a header.");
  // });
  // jQuery("p").dblclick(function(){
  //   alert("this is a paragraph.");
  // });
  // jQuery("img").hover(function(){
  //   alert("This is an image.");
  // });
});
