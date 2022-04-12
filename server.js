// create express application, followed by first page of http://expressjs.com/en/5x/api.html#res.send
const express = require('express');
// saving the exported controller modules as an object called router
const router = require('./Controllers');

// Utilizing express by coupled with "express = require('express');"
const app = express();

// Use middleware sequelize.session. method explained at https://expressjs.com/en/guide/routing.html
app.use(session(sess));

// correspond to express-routing in controller folder 
app.use(router);