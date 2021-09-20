const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const newAccountsController = {

    // gets all new accounts and loads them into the page
    getNewAccounts: function (req, res) {

        var details = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        // find all new accounts
        db.findMany(User, {accType: 'NONE'}, '', function (result) {
            
            // console.log(result.length);
            newAccs = result;

            var send = {details, newAccs};
            res.render('newAccounts', send);
        });
    },

    // logic for when the admin verifies an account
    postNewAccount: function (req, res) {

        // get details of the currently logged-in admin
        var user = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        // get details of the target user to be verified
        var target = {
            fName: req.query.resfName,
            lName: req.query.reslName,
            dept: req.query.resdept,
            email: req.query.resemail,
            accType: req.query.resaccType
        }

        // look through the database and verify the target user
        db.updateOne(User, {email: target.email, accType: 'NONE'}, {
            $set: {
                accType: target.accType
            }
        }); 

        // once successful, redirect back to the new accounts view page
        res.redirect('/newAccounts?fName=' + user["fName"] +'&lName=' + 
                                    user["lName"] + '&dept=' + user["dept"] + 
                                    '&email=' + user["email"] + '&accType=' + 
                                    user["accType"]);
    },

    deleteAccount: function(req, res) {

        // get details of the currently logged-in admin
        var user = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        // get details of the target user to be deleted
        var target = {
            fName: req.query.resfName,
            lName: req.query.reslName,
            dept: req.query.resdept,
            email: req.query.resemail,
            accType: req.query.resaccType
        }

        // look through the database and verify the target user
        db.deleteOne(User, {email: target.email, accType: 'NONE'}); 

        // once successful, redirect back to the new accounts view page
        res.redirect('/newAccounts?fName=' + user["fName"] +'&lName=' + 
                                    user["lName"] + '&dept=' + user["dept"] + 
                                    '&email=' + user["email"] + '&accType=' + 
                                    user["accType"]);
    }

}

module.exports = newAccountsController;
