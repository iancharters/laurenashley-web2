import gql from 'graphql-tag';

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      clientID
      firstName
      lastName
      phoneNumber
      email
      gender
      isSuperuser
      isStaff
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $gender: String!
    $password: String!
    $isSuperuser: Boolean!
    $isStaff: Boolean!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      gender: $gender
      password: $password
      isSuperuser: $isSuperuser
      isStaff: $isStaff
    ) {
      id
      clientID
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
    $gender: String
    $isSuperuser: Boolean
    $isStaff: Boolean
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      gender: $gender
      isSuperuser: $isSuperuser
      isStaff: $isStaff
    ) {
      id
      clientID
      firstName
      lastName
      phoneNumber
      email
      gender
      isSuperuser
      isStaff
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

// @client queries

export const SET_CURRENT_USER = gql`
  mutation setCurrentUser($id: Int!, $name: String!) {
    setCurrentUser(id: $id, name: $name) @client
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    currentUser @client {
      id
      name
    }
  }
`
