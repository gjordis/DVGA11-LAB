/* DVGA11, Lab2, Kristoffer Tapper & Jonas Schymberg */

'use strict';

 
$('document').ready(function(){ // sidan skall vara redo innan funktionerna körs
    $('#tblbox > div').click(function(e){ //lyssnare på click, alla div i tblbox
        $(e.target).toggleClass('bg-danger'); // togglar mellan bg-success och bg-danger
        
        if($(e.target).hasClass('bg-success')) {
        //$('#inputPopup').removeClass('d-none');

        }
    });

    $('button[type="submit"]').click(function(e) { //lyssnare på knappen för submit
        e.preventDefault(); // avbryter defaultbeteendet
        
        if($('#list').children().length < 12) {
            let inputText = $('#queue-name').val(); // variabel som sparar det som matas in i textrutan
            let inputSeats = $('#queue-seats').val(); // variabel som sparar det som matas in i textrutan
            if(!inputText.trim() == '') { // om inputText har något i sig

               if(inputSeats > 0 && inputSeats < 16) { // kolla att den som ställer sig i kö bokar mer än 0 platser och max 15 platser 
                let newH4 = $('<h4>').text(inputText + ' ' + inputSeats).addClass('queue-item'); // skapar en h4-tagg och lägger in texten som finns i inputText, lägger till klassen queue-item.

                $('#list').append(newH4); // lägger den nya h4an med namnet i listan

                $('#queue-name').val(''); // rensar input-fältet
                $('#queue-seats').val('');  
            }
          }
            }else {
              confirm(`We are at full capacity!!`); // När det har blivit fler än 10 namn i listan visas en alert om att det är fullt
              $('#queue-name').val(''); // rensar input-fältet
              $('#queue-seats').val('');
            }
        });

        $('#list').off('click').on('click', '.queue-item', function(e) { // lyssnare till  kö-listan, fick ta bort lyssnaren först och sedan sätta på en ny, för att avbryta tidigare lyssnare
            e.stopPropagation(); // förhindrar att det bubblar upp
            let guest = $(this).text(); // variabel med texten som trycks på
            //console.log(guest);
            let confirmation = confirm(`Remove guest from queue: ${guest}`) // variabel för alert med text + namnet på gästen, gjorde variabeln för att sätt i en if-sats

            if(confirmation){ // om användare klickar "ok" på alerten får confirmation värdet true
                $(this).remove(); // tar bort gästen från listan
            }
    });
    /*
    $(function() {

        // Change body to any block level div
        // contextmenu event gets trigged to right click
        $("#tblbox > div").contextmenu(function(e) {
    
          // Places the dropdown at mouse tip
          $('.context-menu').css({
            left: e.pageX,
            top: e.pageY
          });
      
          // Makes sure the dropdown is hidden before
          // showing it up to avoid inconsistency
          $('.context-menu').hide();
      
          //Slides down the dropdown
          $('.context-menu').slideDown(300);
      
          // Returning false prevents the default action
          // from happening, which is showing the browser's
          // contextmenu in this case
          return false;
        });
        // When left click occurs, hide the contextmenu
        $( "html, body" ).click(function(e) {
          $('.context-menu').slideUp(300);
        });
      });*/
      
});