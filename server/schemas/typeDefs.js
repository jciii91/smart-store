const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type Item {
        _id: ID
        category: String
        name: String
        description: String
        price: Int
        rating: Int
        filename: String
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
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;
