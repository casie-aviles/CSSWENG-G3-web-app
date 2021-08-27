const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const collectionController = {

    getCollection: function (req, res) {

        var details = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        // new accounts
        db.findMany(User, {accType: 'NONE'}, '', function (result) {
            // console.log(result.length);
            newAccs = result;

            var send = {details, newAccs};
            res.render('collection', send);
        });
    }

}

module.exports = collectionController;
