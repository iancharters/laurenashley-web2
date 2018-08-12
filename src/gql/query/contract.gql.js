import gql from 'graphql-tag';

export const GET_CONTRACTS_BY_SITE = gql`
  query contracts_by_site($site_id: ID!) {
    contracts_by_site(site_id: $site_id) {
      id
      site_id
      start_date
      end_date
      terms
      active
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation createContract(
    $site_id: ID!
    $start_date: DateTime!
    $end_date: DateTime!
    $active: Boolean!
    $terms: Json!
  ) {
    createContract(
      site_id: $site_id
      start_date: $start_date
      end_date: $end_date
      active: $active
      terms: $terms
    ) {
      id
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation updateContract($id: ID!, $active: Boolean) {
    updateContract(id: $id, active: $active) {
      id
      active
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation deleteContract($id: ID!) {
    deleteContract(id: $id) {
      id
    }
  }
`;
