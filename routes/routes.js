
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `loginController` from `../controllers/loginController.js`
const loginController = require('../controllers/loginController.js');

// import module `collectionController` from `../controllers/collectionController.js`
const collectionController = require('../controllers/collectionController.js');

// import module `validation` from `../helpers/validation.js`
// const validation = require('../helpers/validation.js');

const app = express();

app.get('/', controller.getIndex);
app.get('/login', loginController.getLogIn);
app.get('/collection', collectionController.getCollection);

module.exports = app;
