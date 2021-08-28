$(document).ready(function(){

    // show pop up when an entry is clicked
    $('#entries').click(function(){
       $('#popup').css("visibility", "visible");
    });

    // hide pop up when it's clicked
    $('#popup').click(function(){
        $('#popup').css("visibility", "hidden");
    });

});