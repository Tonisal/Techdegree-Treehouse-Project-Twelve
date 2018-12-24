function submitContactForm() {
    var email = 'markus.bressel@gmx.de';
    var subject = 'lala';
    var emailBody = $('.js-form-text').val().replace(/\r?\n/g, '%0D%0A');
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
}


function buildSalutationText() {
    var firstName = $('.js-form-first-name').val();
    var lastName = $('.js-form-last-name').val();

    $('.js-form-text').val('Hi, this is ' + firstName + ' ' + lastName + '.');
}

var $textarea = $('.js-form-text');
var $firstName = $('.js-form-first-name');
var $lastName = $('.js-form-last-name');
var $subject = $('.js-form-subject');

var userAddedText = false;


$(document).ready(function () {
    $('.js-form-submit').click(function (event) {
        event.preventDefault();
        submitContactForm();
    });

    $('.js-salutation-part').keyup(function () {
        if (userAddedText === false) {
            buildSalutationText();
        }
    });

});