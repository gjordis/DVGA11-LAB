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

               if(inputSeats > 0 && inputSeats < 16) { // kolla den som ställer sig i kö boka mer än 0 platser och max 15 platser 
                let newH4 = $('<h4>').text(inputText + ' ' + inputSeats).addClass('queue-item'); // skapar en h4-tagg och lägger in texten som finns i inputText, lägger till klassen queue-item.

                $('#list').append(newH4); // lägger den nya h4an med namnet i listan

                $('#queue-name').val('');  // renstar input fältet
                $('#queue-seats').val('');  
            }
          }
            }else {
              confirm(`We are at full capacity!!`); // annars ge en alert med text
              $('#queue-name').val('');
              $('#queue-seats').val('');
            }
        });

        $('#list').off('click').on('click', '.queue-item', function(e) { // lyssnare till  kö-listan, fick ta bort lyssnaren först och sedan sätta på en ny, eftersom listan ligger i den div som redan har lyssnare
            e.stopPropagation(); // förhindrar att det bubblar upp, fick acceptera alerten flera gånger
            let guest = $(this).text(); 
            let confirmation = confirm(`Remove guest from queue: ${guest}`)

            if(confirmation){
                $(this).remove();
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