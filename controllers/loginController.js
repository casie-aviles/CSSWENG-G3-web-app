
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

const loginController = {

    getLogIn: function (req, res) {
        res.render('login');
    },

    postLogIn: function (req, res) {
        var email = req.body.email;
        var pw = req.body.pw;

        db.findOne(User, {email: email, pw: pw}, '', function (result) {
            console.log(result);
            if(result != null) {
                var user = {
                    fName: result.fName,
                    lName: result.lName,
                    dept: result.dept,
                    email: result.email
                }
                res.redirect('/success?fName=' + user["fName"] +'&lName=' + user["lName"] + '&dept=' + user["dept"] + '&email=' + email);
            }
            else {
                console.log("User does not exist!");
                res.redirect('/');
            }
        });
    }
}

module.exports = loginController;