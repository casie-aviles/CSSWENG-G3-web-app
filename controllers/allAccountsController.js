const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const allAccountsController = {

    // gets all accounts and loads them into the page
    getAllAccounts: function (req, res) {

        var details = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        // find all accounts
        db.findMany(User, {}, '', function (result) {
            
            // console.log(result.length);
            allAccs = result;

            // console.log(allAccs);
            var send = {details, allAccs};
            res.render('allAccounts', send);
        });
    }
}

module.exports = allAccountsController;
