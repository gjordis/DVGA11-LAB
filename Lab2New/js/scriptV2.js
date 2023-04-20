/* DVGA11, Lab2, Kristoffer Tapper & Jonas Schymberg */

'use strict';

 
$('window').ready(function(){ // sidan skall vara redo innan funktionerna körs
    $('#tblbox > div').click(function(e){ //lyssnare på click, alla div i tblbox
        $(e.target).toggleClass('bg-danger'); // togglar mellan bg-success och bg-danger

        /* if($(e.target).hasClass('bg-success')) {
        $('#inputPopup').removeClass('d-none');
        } */
    });

    $('button[type="submit"]').click(function(e) { //lyssnare på knappen för submit
        e.preventDefault(); // avbryter defaultbeteendet
        
    
        let inputText = $('#queue').val(); // variabel som sparar det som matas in i textrutan
        if(!inputText.trim() == '') { // om inputText har något i sig

            let newH4 = $('<h4>').text(inputText).addClass('queue-item'); // skapar en h4-tagg och lägger in texten som finns i inputText, lägger till klassen queue-item.

            $('#list').append(newH4);

            $('#queue').val('');  
        }   
        });

        $('#list').off('click').on('click', '.queue-item', function(e) {
            e.stopPropagation();
            let guest = $(this).text();
            let confirmation = confirm(`Remove guest from queue: ${guest}`)

            if(confirmation){
                $(this).remove();
            }
    });
    
});  