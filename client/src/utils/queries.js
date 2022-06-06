import { gql } from '@apollo/client';

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