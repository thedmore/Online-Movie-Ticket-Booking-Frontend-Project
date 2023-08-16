const swiper = new Swiper('.swiper', {
        
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true,
    
    // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});

$(".a").on('click', function() {
    $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
        $(".custom-model-main").removeClass('model-open');
});