const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        items: [Item]
        users: [User]
    }

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

`

module.exports = typeDefs;