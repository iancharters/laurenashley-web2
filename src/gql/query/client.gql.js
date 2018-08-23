import gql from 'graphql-tag';

export const GET_CLIENT = gql`
  query client($id: ID!) {
    client(id: $id) {
      id
      clientID
      firstName
      lastName
      phoneNumber
      email
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation createClient($id: ID!, $firstName: String, $lastName: String, $email: String, $phoneNumber: String) {
    createClient(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber) {
      id
      clientID
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation updateClient($id: ID!, $firstName: String, $lastName: String, $email: String, $phoneNumber: String) {
    updateClient(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber) {
      id
      clientID
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`;
