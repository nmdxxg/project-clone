$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
  });
  //

  document.getElementById("check_adress").onclick = function(){
    document.getElementById('infocustomer_content_01').style.display = 'none';
    document.getElementById('infocustomer_content_02').style.display = 'block';
  };
  //
   