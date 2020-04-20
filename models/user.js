const db = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends db.Model { };
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { sequelize, modelName: 'users' });
    return User;
}