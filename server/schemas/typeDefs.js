const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        _id: ID
        category: String
        name: String
        description: String
        price: Int
    }

    type User {
        _id: ID
        email: String
        password: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        items: [Item]
    }
    
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
`

module.exports = typeDefs;
