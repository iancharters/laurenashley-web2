import gql from 'graphql-tag';

export const ALL_CUSTOMERS = gql`
  {
    customers {
      id
      firstName
      lastName
      companyName
      phoneNumber
      email
      commercial
    }
  }
`;

export const ALL_CUSTOMER_NAMES = gql`
  {
    customerNames {
    id
    adjustedName
  }
}
`

export const GET_CUSTOMER_NAME = gql`
  query customer($id: ID!) {
    customer(id: $id) {
      name
    }
  }
`;
export const GET_CUSTOMER = gql`
  query customer($id: ID!) {
    customer(id: $id) {
      id
      firstName
      lastName
      companyName
      phoneNumber
      email
      commercial
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer(
    $id: String!
    $firstName: String!
    $lastName: String!
    $companyName: String
    $email: String!
    $phoneNumber: String!
    $commercial: Boolean!
    $object_id: String!
  ) {
    updateCustomer(
      id: $id
      firstName: $firstName
      lastName: $lastName
      companyName: $companyName
      email: $email
      phoneNumber: $phoneNumber
      commercial: $commercial
      object_id: $object_id
    ) {
      id
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation createCustomer(
    $firstName: String!
    $lastName: String!
    $companyName: String
    $email: String!
    $phoneNumber: String!
    $commercial: Boolean!
  ) {
    createCustomer(
      firstName: $firstName
      lastName: $lastName
      companyName: $companyName
      phoneNumber: $phoneNumber
      email: $email
      commercial: $commercial
    ) {
      id
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: ID!, $object_id: String!) {
    deleteCustomer(id: $id, object_id: $object_id) {
      id
    }
  }
`;
