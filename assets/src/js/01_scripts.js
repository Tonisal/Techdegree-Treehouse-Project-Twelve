$(document).ready(function () {
    toggleMobileNavigation();
    scrollToLinkPosition();
    toggleCollapsedContent();
    toggleNavigationMode();
    navigationLinkHighlighting();
});

var mainNavigationHeight = 65;


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
            $('.m-mobile-nav').removeClass('m-mobile-nav--active');
            $('.m-btn-mobile-menu').removeClass('m-btn-mobile-menu--active');
        } else {
            console.log('mobil');
        }

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

function navigationLinkHighlighting() {
    var linksToHighlight = $('.m-main-nav li a');
    var linkTargets = [];
    var elementPositions = {};
    linksToHighlight.each(function () {
        linkTargets.push($(this).attr('href').replace('#', ''));
    });

    for(var i = 0; i < linksToHighlight.length; i++) {
        var elementToAdd = linkTargets[i];
        elementPositions[elementToAdd] = $('#' + linkTargets[i]).offset().top - mainNavigationHeight;
    }

    $(window).scroll(function () {
        var currentScrollPosition = $(document).scrollTop();
        var elems = Object.keys(elementPositions);

        for(var i = 0; i < elems.length; i++) {
            if (elementPositions[elems[i]] < currentScrollPosition) {
                $('.m-main-nav li a').removeClass('m-main-nav__highlighted');
                var selector ="a[href='#" + elems[i] + "']";
                $(selector).addClass('m-main-nav__highlighted');
            }
        }
    });
}

function submitContactForm() {
    $('.js-submit-form').click(function() {
        var firstName = $('.js-form-first-name').val();
        var lastName = $('.js-form-last-name').val();
        var subject = $('.js-form-subject').val();
        var text = $('.js-form-text').val();
    });
}