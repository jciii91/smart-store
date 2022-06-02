const { User, Item } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find();
        },
        users: async () => {
            return User.find()
                .select ('-__v');
        }
    }
};

module.exports = resolvers;