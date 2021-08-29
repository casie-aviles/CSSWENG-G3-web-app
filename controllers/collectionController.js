const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const collectionController = {

    // gets all new accounts and loads them into the page
    getCollection: function (req, res) {

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
            res.render('collection', send);
        });
    },

    // logic for when the admin verifies an account
    postCollection: function (req, res) {

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
                accType: 'REG'
            }
        }); 

        // once successful, redirect back to the new accounts view page
        res.redirect('/collection?fName=' + user["fName"] +'&lName=' + 
                                    user["lName"] + '&dept=' + user["dept"] + 
                                    '&email=' + user["email"] + '&accType=' + 
                                    user["accType"]);
    }

}

module.exports = collectionController;
