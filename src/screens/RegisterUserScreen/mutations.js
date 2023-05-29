import {gql} from '@apollo/client';

export const REGISTER_USER = gql`
  mutation ($phoneNumber: String!, $password1: String!, $password2: String!) {
    register(
      phoneNumber: $phoneNumber
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation ($name: String) {
    updateAccount(name: $name) {
      success
      errors
    }
  }
`;

export const USER_VERIFY = gql`
  mutation ($userId: ID!) {
    userVerify(input: {id: $userId}) {
      user {
        id
        name
      }
    }
  }
`;
