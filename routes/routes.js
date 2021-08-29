
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

const signupController = require('../controllers/signupController.js');

// import module `loginController` from `../controllers/loginController.js`
const loginController = require('../controllers/loginController.js');

// import module `successController` from `../controllers/successController.js`
const successController = require('../controllers/successController.js');

// import module `homeController` from `../controllers/homeController.js`
const homeController = require('../controllers/homeController.js');

// import module `collectionController` from `../controllers/collectionController.js`
const collectionController = require('../controllers/collectionController.js');

// import module `validation` from `../helpers/validation.js`
// const validation = require('../helpers/validation.js');

const app = express();

app.get('/', controller.getIndex);
app.get('/signup', signupController.getSignUp);
app.post('/signup', signupController.postSignUp);
app.get('/login', loginController.getLogIn);
app.post('/login', loginController.postLogIn);
app.get('/success', successController.getSuccess);
app.get('/home', homeController.getHome);
app.get('/collection', collectionController.getCollection);
app.post('/collection', collectionController.postCollection);

module.exports = app;
