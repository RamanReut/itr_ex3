const db = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.import('./user');
    class Message extends db.Model { }
    Message.init({
        text: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: 'id',
            }
        },
    }, { sequelize, modelName: 'messages' })
    return Message;
};