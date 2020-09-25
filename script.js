$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad
        
        $('.panel').css('display', 'none');    
        $('.valid').css('display', 'none');
        $('.error').css('display', 'none');
       var ValidEmail = $('#username').val() === 'magnificos'; // User validate
       var ValidPassword = $('#password').val() === 'dino2020'; // Password validate
       var DinoInHouse = $('#username').val() === 'dino'

        if (DinoInHouse === true) { // if ValidEmail & ValidPassword
           $('.panel').css('display', 'block');
           
           $("body").css({ "background-image":"url(images/NewSevenMagniques.png)"
           ,
           "background-size" : "initial"
           ,
           "background-repeat":"repeat"  });
//         $("body").css({ "background-image":"url( ' ../images/bodyBack.jpg '           )","background-color":"#f5e7af","background-repeat":"repeat-x"}); 

           // window.location = "https://www.preguntaleajlc.com/aifrein.html"; // go to home.html
        }
        else if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');            

            //window.location = "https://duckduckgo.com"; // go to home.html
            setTimeout(function(){ window.location.href= 'https://preguntaleajlc.com/aifreim.html';}, 3000);
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

