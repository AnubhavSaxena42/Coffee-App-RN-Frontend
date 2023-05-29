import {gql} from '@apollo/client';

export const VERIFY_TOKEN = gql`
  mutation ($token: String!) {
    verifyToken(token: $token) {
      success
      errors
      payload
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation ($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
      refreshToken
      success
    }
  }
`;
