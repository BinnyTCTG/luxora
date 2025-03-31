$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(!$(".navbar-menu").hasClass("active") && height > 0){
      $('.navbar').removeClass('bg_blur');
      if(height > 100) {
        console.log('Hello World== '+ height);
        $('.navbar').addClass('bg_blur');
      } else {
          $('.navbar').removeClass('bg_blur');
      }
    }
});

$('.navbar-icon').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    $(".navbar-bottom").toggleClass("active");
    if($(window).scrollTop() > 0){
      $('.navbar').toggleClass('bg_blur');
    }
});

