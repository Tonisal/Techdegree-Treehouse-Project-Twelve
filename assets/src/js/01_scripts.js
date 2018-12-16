$(document).ready(function () {
    toggleMobileNavigation();
    scrollToLinkPosition();
    toggleCollapsedContent();
    toggleNavigationMode();
});


function toggleMobileNavigation() {
    $('.m-btn-mobile-menu').click(function () {
        $(this).toggleClass('m-btn-mobile-menu--active');
        $('.m-mobile-nav').toggleClass('m-mobile-nav--active');
    })
}

function toggleNavigationMode() {
    $(window).resize(function () {
        if (window.innerWidth > 768) {
            console.log('desktop');
        }
        ;
    });
}

function scrollToLinkPosition(event) {
    $('.m-main-nav a, .m-mobile-nav a').click(function (event) {
        event.preventDefault();
        $('.m-mobile-nav').removeClass('m-mobile-nav--active');
        $('.m-btn-mobile-menu').removeClass('m-btn-mobile-menu--active');
        var target = $(this).attr('href');
        console.log(target);
        target = ($(target).offset().top);
        target = target - 64;
        $('html, body').animate({
            scrollTop: target
        }, 'slow');


    });
}

function toggleCollapsedContent() {
    $('.m-collapsed-content').click(function () {
        $(this).toggleClass('m-collapsed-content--active');
    });
}