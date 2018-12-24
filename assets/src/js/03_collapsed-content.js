$(document).ready(function() {
    toggleCollapsedContent();
});

function toggleCollapsedContent() {
    $('.m-collapsed-content--toggle').click(function () {
        console.log('klick');
        $(this).toggleClass('m-collapsed-content--active');
        $('.m-collapsed-content').toggleClass('m-collapsed-content--active');
    });
}
