import {gql} from '@apollo/client';

export const CREATE_TOKEN = gql`
  mutation ($phoneNumber: String, $password: String!) {
    tokenAuth(phoneNumber: $phoneNumber, password: $password) {
      token
      errors
      refreshToken
      user {
        id
        name
        profilePicture
      }
    }
  }
`;
