import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`

export const QUERY_ITEMS = gql`
  {
    items {
      _id
      category
      name
      description
      price
      rating
      filename
    }
  }
`