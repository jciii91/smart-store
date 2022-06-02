const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
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
    },

    Mutation: {
      addUser: async () => {
  
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect email');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }
      
        const token = signToken(user);
        return { token, user };
      }
    }
  };




module.exports = resolvers;