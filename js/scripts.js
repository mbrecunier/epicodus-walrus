jQuery(document).ready(function() {
  $("#peekaboo-button").click(function() {
    $("#peekaboo").toggle();
  });

  $("#fading-content .clickable").click(function() {
    $("#fading-content").fadeOut( "slow", "linear");
  });

  $("#come-back .clickable").click(function() {
    $("#fading-content").fadeIn( "fast" );
  });

  $(".slide-up").click(function(){
    $(".sliding-text").slideUp("slow");
  });





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
