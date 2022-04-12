// Use the express.Router class to create modular (or modularized), mountable route handlers.
// see express.routing documentation at https://expressjs.com/en/guide/routing.html
const router = require('express').Router();

// If not applying sequelize, path is a basic re-directing method introduced by node.js documentation
// see node.path documentation at https://nodejs.org/docs/latest/api/path.html#pathjoinpaths
// const path = require('path');
// Can apply the following code to re-direct to the desired page
// router.get('/', async (req, res) => {
//     res.redirect(path.join(__dirname, '../views/index.html'));
//   });

// Fetch the routing behaviours from created files
const apiRoutes = require('./api');
const homeRoutes = require('./homePage');

// Apply ".use" to follow the Instance given by the official document at https://expressjs.com/en/guide/routing.html
router.use('/api', apiRoutes);

// TODO: for any other condition, direct to home as well
router.use('/', homeRoutes);

// Then exported for using in the server.js
module.exports = router;