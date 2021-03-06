
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var UserSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    accType: {
        type: String,
        enum: ['NONE', 'REG', 'ADMIN', 'COO'],
        required: true
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('User', UserSchema);
