import gql from 'graphql-tag';

export const GET_SITES_BY_CUSTOMER = gql`
  query sites($customer_id: ID!) {
    sites(customer_id: $customer_id) {
      id
      customer_id
      name
      commercial
      primary_number
      primary_email
      address
      city
      province
      postal_code
      country
    }
  }
`;

export const GET_SITE = gql`
  query site($id: ID!) {
    site(id: $id) {
      id
      customer_id
      customer_name
      name
      commercial
      primary_number
      primary_email
      address
      city
      province
      postal_code
      country
    }
  }
`;

export const CREATE_SITE = gql`
  mutation createSite(
    $name: String!
    $address: String!
    $city: String!
    $province: String!
    $country: String!
    $postalCode: String!
    $commercial: String!
    $primaryNumber: String!
    $primaryEmail: String!
    $customerID: ID!
  ) {
    createSite(
      name: $name
      address: $address
      city: $city
      province: $province
      country: $country
      postalCode: $postalCode
      commercial: $commercial
      primaryNumber: $primaryNumber
      primaryEmail: $primaryEmail
      customerID: $customerID
    ) {
      id
    }
  }
`;

export const UPDATE_SITE = gql`
  mutation updateSite(
    $id: ID!
    $name: String!
    $address: String!
    $city: String!
    $province: String!
    $country: String!
    $postalCode: String!
    $commercial: String!
    $primaryNumber: String!
    $primaryEmail: String!
  ) {
    updateSite(
      id: $id
      name: $name
      address: $address
      city: $city
      province: $province
      country: $country
      postalCode: $postalCode
      commercial: $commercial
      primaryNumber: $primaryNumber
      primaryEmail: $primaryEmail
    ) {
      id
    }
  }
`;
