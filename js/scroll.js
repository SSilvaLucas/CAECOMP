$(".scroll-suave").click(function(e){        
    e.preventDefault();
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
    alturaMenu = $('.barra-nav-desktop').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - alturaMenu
    }, 500);
});