$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad
        

       var ValidEmail = $('#username').val() === 'invitados'; // User validate
       var ValidPassword = $('#password').val() === 'hgm2015'; // Password validate
       var DinoInHouse = $('#username').val() === 'dino'

        if (DinoInHouse === true) { // if ValidEmail & ValidPassword
            $('.panel').css('display', 'block');
           // window.location = "https://www.preguntaleajlc.com/aifrein.html"; // go to home.html
        }
        else if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.panel').css('display', 'none');
            $('.valid').css('display', 'block');

            //window.location = "https://duckduckgo.com"; // go to home.html
            setTimeout(function(){ window.location.href= 'https://www.preguntaleajlc.com/aifrein.html';}, 3000);
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

