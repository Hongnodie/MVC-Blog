// per quick example provided in npm.sequelize at https://sequelize.org/docs/v6/
// A model is an abstraction that represents a table in your database
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// User inherite the framework set in Model
class User extends Model {
    id; // Any propety to be parsed to new model "User" show be specifed here, if empty, then parse everything
}

// Could use either User.init or User.define + .save, this and further are all explained in https://sequelize.org/docs/v6/core-concepts/model-basics/
// After init, model can be recalled as "sequelize.models.User"
User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: DataTypes.DATE,
    }, 
    { 
        sequelize, // Pass the connection instance
        modelName: 'user', // Choose the model name here
        // if we want the table name to be equal to the model name, put "freezeTableName: true" here

    }
);

// Then object based on Model.User can be created as below:
// (async () => {
// await sequelize.sync();
// const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
// });
// console.log(jane.toJSON());
// })();