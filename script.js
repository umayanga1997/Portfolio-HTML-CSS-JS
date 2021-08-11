$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });
    $(".card").hover(function() {
        // $(this).toggleClass("hover-image");
        $('.title', this).toggleClass("hover-title");
        $('.img', this).toggleClass("view-img");
    });
})