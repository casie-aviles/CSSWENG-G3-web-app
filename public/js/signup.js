$(document).ready(function () {
    // alert("Loaded signup.js");

    $("form").submit(function(){
        alert("Account succesfully registered!");
        alert("NOTE: Your account's verification is pending. You can not log-in until the administrator has verified your account.");
    });
});
