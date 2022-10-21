$(".list_detail_03 li a").click(function(){
    $(".list_detail_03 li a").removeClass("active");
    $(this).addClass("active");
  });
//
$(".list_detail_02 li a img").click(function(){
    $(".list_detail_03 li a img").removeClass("active");
    $(this).addClass("active");
  });  
//
$(".size_list > ul > li a").click(function(){
  $(".size_list > ul > li a").removeClass("active");
  $(this).addClass("active");
});
//
$(".color ul li a img").click(function(){
  $(".color ul li a img").removeClass("active");
  $(this).addClass("active");
});  
//

  $(".list_detail_05 li").click(function(){
  $(".list_detail_05 li").removeClass("active1");
  $(this).addClass("active1");
  // event.preventDefault();
});
//
// jQuery(document).ready(function(){
//   jQuery('.list_detail_05 li').click(function(event){
//       //remove all pre-existing active classes
//       jQuery('.list_detail_05 li').removeClass('active1');

//       //add the active class to the link we clicked
//       jQuery(this).addClass('active1');   
//       event.preventDefault();
//   });
// });