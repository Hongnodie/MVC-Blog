// create express application, followed by first page of http://expressjs.com/en/5x/api.html#res.send
const express = require('express');
// saving the exported controller modules as an object called router
const router = require('./Controllers');

// Build connection by pool, explained and sampled at https://sequelize.org/docs/v6/other-topics/connection-pool/
const sequelize = require('./Config/Connection');


// Utilizing express by coupled with "express = require('express');"
const app = express();

// Use middleware sequelize.session. method explained at https://expressjs.com/en/guide/routing.html
app.use(session(sess));

// correspond to express-routing in controller folder 
app.use(router);

// Coupled with model to create such stances (frames) in database
// Sample provided in https://sequelize.org/docs/v6/core-concepts/model-basics/
// use "{ force: true }" to create table and drop it first if it already existed
sequelize.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
    });