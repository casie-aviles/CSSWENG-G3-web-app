// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `index` paths in the server
*/
const signupController = {

    /*
        executed when the client sends an HTTP GET request `/`
        as defined in `../routes/routes.js`
    */
    getSignUp: function (req, res) {
        res.render('signup');
        // console.log("signup.hbs successfully rendered");
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postSignUp: function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
        var fName = req.body.fName;
        var lName = req.body.lName;
        var dept = req.body.dept;
        var email = req.body.email;
        var pw = req.body.pw;
        var accType = 'NONE'; /* is set to 'NONE' by default until admin verifies it */

        var user = {
            fName: fName,
            lName: lName,
            dept: dept,
            email: email,
            pw: pw,
            accType: accType
        }

        /*
            calls the function insertOne()
            defined in the `database` object in `../models/db.js`
            this function adds a document to collection `users`
        */
        db.insertOne(User, user, function(flag) {
            if(flag) {
                /*
                    upon adding a user to the database,
                    redirects the client to `/success` using HTTP GET,
                    defined in `../routes/routes.js`
                    passing values using URL
                    which calls getSuccess() method
                    defined in `./successController.js`
                */
                // console.log("sign up successful");
                // console.log("sign up details saved to database successfully");
                /*res.redirect('/success?fName=' + fName +'&lName=' + lName + 
                                '&dept=' + dept + '&email=' + email + 
                                '&accType=' + accType);*/
                res.redirect('/signup');
            }
        });
    }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = signupController;
