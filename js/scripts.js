jQuery(document).ready(function() {
  $("#peekaboo-button").click(function() {
    $("#peekaboo").toggle();
  });

  $("#fade-button").click(function() {
    $("#fade").fadeToggle( "slow" );
  })

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
