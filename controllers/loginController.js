
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

const loginController = {

    // renders the log in page 
    getLogIn: function (req, res) {
        res.render('login');
    },

    // when user attempts to log in
    postLogIn: function (req, res) {
        var email = req.body.email;
        var pw = req.body.pw;


        // check if user's account exists
        db.findOne(User, {email: email, pw: pw}, '', function (result) {
            console.log(result);

            // if user trying to log in exists
            if(result != null) {

                // current user's details
                var user = {
                    fName: result.fName,
                    lName: result.lName,
                    dept: result.dept,
                    email: result.email,
                    accType: result.accType
                }

                // check if their account is unverified
                if (result.accType == 'NONE') {
                    console.log("User is not verified!");
                    res.redirect('/');
                }
                // else, check if they're an ADMIN
                else if (result.accType == 'ADMIN') {

                    res.redirect('/home?fName=' + user["fName"] +'&lName=' + 
                                    user["lName"] + '&dept=' + user["dept"] + 
                                    '&email=' + user["email"] + '&accType=' + 
                                    user["accType"]);
                }
                /* TODO: Add corresponding `else-ifs` for the other account types e.g. REG, COO */
                // else, their account is at least verified
                else {
                    res.redirect('/home?fName=' + user["fName"] +'&lName=' + 
                                    user["lName"] + '&dept=' + user["dept"] + 
                                    '&email=' + user["email"] + '&accType=' + 
                                    user["accType"]);
                }
            }
            // else, if user does not exist then redirect back to landing page
            else {
                console.log("User does not exist!");
                res.redirect('/');
            }
        });
    }
}

module.exports = loginController;