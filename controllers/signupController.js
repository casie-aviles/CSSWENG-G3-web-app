
/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const signupController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getSignUp: function (req, res) {
        res.render('signup');
    }

}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = signupController;
