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
           // $('body').css('background-image', 'url(images/NewSevenMagniquesCarlosFace.png)');
          //  $('body').css({ "background-image": "url(images/NewSevenMagniquesCarlosFace.png)", "background-repeat": "repeat" });
//           $('body').css({ "background-image" : "url(images/NewSevenMagniques.png)", "background-repeat" : "repeat" });
//           $('body').css({ "background-image" : "url(images/NewSevenMagniques.png)"});
           $('body').css('background-image', 'url("images/NewSevenMagniques.png")');
           $('body').css("background-repeat" , "repeat-y");
           
            
           // window.location = "https://www.preguntaleajlc.com/aifrein.html"; // go to home.html
        }
        else if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            $('body').css('background-repeat', 'no-repeat');
            

            //window.location = "https://duckduckgo.com"; // go to home.html
            setTimeout(function(){ window.location.href= 'https://preguntaleajlc.com/aifreim.html';}, 3000);
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

