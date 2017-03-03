// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$( document ).ready( function() {
    $( 'form' ).on( 'click', function( e ) {
        var form = $( e.target.parentElement );
        var itemName = form.data( 'item-name' );

        $.ajax( {
            url: form.attr( 'action' ),
            method: form.attr( 'method' ),
            data: form.serialize()
        } )
        .done( function( response ) {
            console.log( 'LOGGING OUT NEW VALUE FOR ' + itemName );
            console.log( response );
        } );
    } );
} );