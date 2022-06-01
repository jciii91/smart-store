const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    email: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
`;

module.exports = typeDefs;