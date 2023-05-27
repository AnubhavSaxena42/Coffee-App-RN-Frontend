import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query ($endCursor: String) {
    coffeeCategories(first: 5, after: $endCursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const GET_COFFEES_FROM_CATEGORY = gql`
  query ($id: ID!, $endCursor: String) {
    category(id: $id) {
      name
      id
      coffees(first: 5, after: $endCursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            name
            id
            description
            price
            imageUrl
          }
        }
      }
    }
  }
`;
