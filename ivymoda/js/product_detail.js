$(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: "image",
      controlNav: false,
      animationLoop: true,
      slideshow: false,
      itemWidth: 210,
      itemMargin: 5,
      asNavFor: '#slider'
    });
   
    $('#slider').flexslider({
      animation: "image",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      
    });
  });