$(document).ready(function () {
    alert("Loaded signup.js");

	$("#submit").click(function(){
		
		//Get values
		var fName = $('#fName').val();
        var lName = $('#lName').val();
        var email = $('#email').val();
        var pw = $('#pw').val();
		
		var re = /\S+@\S+\.\S+/;
        
		var error = false;
	
		// Check if fields are empty
		if(!fName.trim() || fName === "FIRST NAME CANNOT BE EMPTY") {
			$('#fName').val("FIRST NAME CANNOT BE EMPTY");
			$('#fName').css("color", "red");
			error = true;
		}
		
		if(!lName.trim() || lName === "LAST NAME CANNOT BE EMPTY") {
			$('#lName').val("LAST NAME CANNOT BE EMPTY");
			$('#lName').css("color", "red");
			error = true;
		}
		
		if(!email.trim() || email === "EMAIL CANNOT BE EMPTY") {
			$('#email').val("EMAIL CANNOT BE EMPTY");
			$('#email').css("color", "red");
			error = true;
		}
		
		else
		if(!re.test(email) || email === "INVALID EMAIL")
		{
			$('#email').val("INVALID EMAIL");
			$('#email').css("color", "red");
			error = true;
		}
		
		if(!pw || pw === "PASSWORD CANNOT BE EMPTY") {
			$('#pw').attr("type", "text");
			$('#pw').val("PASSWORD CANNOT BE EMPTY");
			$('#pw').css("color", "red");
			error = true;
		}
		
		
		//Do this if there are no errors
		if(!error)
		{
            alert("Account succesfully registered!");
            alert("NOTE: Your account's verification is pending. You can not log-in until the administrator has verified your account.")

            $('#fName').val("");
            $('#lName').val("");
            $('#email').val("");
            $('#pw').val("");
		}
		
	});
	
	$('#fName').focus(function(){
		var fName = $('#fName').val();
		
		if(fName === "FIRST NAME CANNOT BE EMPTY")
		{
		$('#fName').val("");
		$('#fName').css("color", "black");
		}
	});
	
	$('#lName').focus(function(){
		var lName = $('#lName').val();
		
		if(lName === "LAST NAME CANNOT BE EMPTY")
		{
		$('#lName').val("");
		$('#lName').css("color", "black");
		}
	});
	
	$('#email').focus(function(){
		var email = $('#email').val();
		
		if(email === "EMAIL CANNOT BE EMPTY" ||  email === "INVALID EMAIL")
		{
		$('#email').val("");
		$('#email').css("color", "black");
		}
	});
	
	$('#pw').focus(function(){
		var pw = $('#pw').val();
		
		if(pw === "PASSWORD CANNOT BE EMPTY")
		{
		$('#pw').val("");
		$('#pw').css("color", "black");
		$('#pw').attr("type", "password");
		}
	});
});
