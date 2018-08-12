import gql from 'graphql-tag';

export const GET_SERVICES = gql`
  query getServices {
    services {
      id
      description
      std_rate
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation createService($description: String!, $std_rate: Decimal!) {
    createService(description: $description, std_rate: $std_rate) {
      id
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation updateService($id: ID!, $description: String, $std_rate: Decimal) {
    updateService(id: $id, description: $description, std_rate: $std_rate) {
      id
    }
  }
`;

export const DELETE_SERVICE = gql`
  mutation deleteService($id: ID!) {
    deleteService(id: $id) {
      id
    }
  }
`;
