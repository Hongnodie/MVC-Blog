// Introduce sequelize first
const Sequelize = require('sequelize');
// add dotenv, documented at https://www.npmjs.com/package/dotenv
require('dotenv').config();

// init an object to be exported to server.js
let sequelize;

// if deployed at heroku (means http://*heroku*), connect to JAWSDB_URL
// Explained in heroku https://devcenter.heroku.com/articles/jawsdb and in sequelize https://sequelize.org/docs/v6/getting-started/
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
// if deployedon local, due to test need, set up the environment variables to connect to mysql as required
// Could understand from https://www.npmjs.com/package/sequelize-connect yet not sure if merged to sequelize
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        //   necessary header for mysql explained at https://dev.mysql.com/doc/dev/connector-nodejs/8.0/module-Connection.html
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

// Export the object
module.exports = sequelize;