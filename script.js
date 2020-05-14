$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'invitado'; // User validate
       var ValidPassword = $('#password').val() === 'hgm2015'; // Password validate
       var DinoInHouse = $('#username').val() === 'dino'

        if (DinoInHouse === true) { // if ValidEmail & ValidPassword
            $('.panel').css('display', 'block');
           // window.location = "https://duckduckgo.com"; // go to home.html
        }
        else if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "https://duckduckgo.com"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

