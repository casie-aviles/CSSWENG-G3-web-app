
const collectionController = {

    getCollection: function (req, res) {

        var details = {
            fName: req.query.fName,
            lName: req.query.lName,
            dept: req.query.dept,
            email: req.query.email,
            accType: req.query.accType
        };

        res.render('collection', details);
    }

}

module.exports = collectionController;
