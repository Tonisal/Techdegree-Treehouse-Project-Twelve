$(document).ready(function() {
    toggleMobileNavigation();
});



function toggleMobileNavigation() {
    $('.m-btn-mobile-menu').click(function() {
        $(this).toggleClass('m-btn-mobile-menu--active');
        $('.m-mobile-nav').toggleClass('m-mobile-nav--active');
    })
}