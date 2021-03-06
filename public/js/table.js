$(document).ready(function(){

    var tableName = $("h1").text();

    // make sure that this script works only for new accounts
    if (tableName == "New Accounts") {
        // when an account from the table is clicked,
        $('.entries').click(function(){

            // get the target account's details e.g. first name, last name, etc.
            // target account is the account to be verified/updated
            $('#resfName').text($(this).closest("tr").find(".fName").text());
            $('#reslName').text($(this).closest("tr").find(".lName").text());
            $('#resdept').text($(this).closest("tr").find(".dept").text());
            $('#resemail').text($(this).closest("tr").find(".email").text());
            // $('#resaccType').text($(this).closest("tr").find(".accType").text());
    
            // then display the pop up menu
            $('#popup').css("visibility", "visible");
    
        });
    
        // hide pop up menu when close button is clicked
        $('#close_btn').click(function(){
            $('#popup').css("visibility", "hidden");
        });
    
        $('#submit').one('mouseover', function(){
    
            // gets the current value of the form's action
            var val = $('#popup').attr('action');

            // changes the form's method to 'post'
            $('#popup').attr('method', 'post');
    
            // get the account's details e.g. first name, last name, etc.
            var fName = $('#resfName').text();
            var lName = $('#reslName').text();
            var dept = $('#resdept').text();
            var email = $('#resemail').text();
            var accType = $('#resaccType').val();
    
            // append the account's details onto the existing http query
            val += "&resfName=" + fName + "&reslName=" + lName  + "&resdept=" + dept + "&resemail=" + email + "&resaccType=" + accType;
            $('#popup').attr('action', val);
            
        });

        $('#reject').one('mouseover', function(){

            // gets the current value of the form's action
            var val = $('#popup').attr('action');

            // get the target account's details e.g. first name, last name, etc.
            // target account is the account to be deleted
            var fName = $('#resfName').text();
            var lName = $('#reslName').text();
            var dept = $('#resdept').text();
            var email = $('#resemail').text();
            var accType = $('#resaccType').val();

            // append the account's details onto the existing http query
            val += "&resfName=" + fName + "&reslName=" + lName  + "&resdept=" + dept + "&resemail=" + email + "&resaccType=" + accType;
            val = val.replace("/newAccounts", "/deleteAccount");
            $('#popup').attr('action', val);
            
        });
    }
});