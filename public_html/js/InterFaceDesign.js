
/*Accordion*/
$( function() {
    $( "#accordion" ).accordion({
    heightStyle: "content",
    icons: {
         header: "ui-icon-triangle-1-s"
     }
 });
});

/*Tooltip*/
$( function() {
    $( document ).tooltip();
    content: "Das ist ein Tooltip";
    } );