const { AuthenticationError } = require('apollo-server-express');
const resolvers = {
    Query: {
      
    },
    Mutation: {
      addUser: async () => {
  
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        return user;
  
      }
    }
  };


module.exports = resolvers;