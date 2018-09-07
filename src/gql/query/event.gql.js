import gql from 'graphql-tag';

export const GET_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      id
      eventName
      locationName
      addressLine1
      addressLine2
      description
      date
      startTime
      endTime
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation createEvent(
    $eventName: String!
    $locationName: String!
    $addressLine1: String!
    $addressLine2: String!
    $description: String!
    $date: DateTime!
    $startTime: String!
    $endTime: String!
  ) {
    createEvent(
      eventName: $eventName
      locationName: $locationName
      addressLine1: $addressLine1
      addressLine2: $addressLine2
      description: $description
      date: $date
      startTime: $startTime
      endTime: $endTime
    ) {
      id
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent(
    $id: ID!
    $eventName: String!
    $locationName: String!
    $addressLine1: String!
    $addressLine2: String!
    $description: String!
    $date: DateTime!
    $startTime: String!
    $endTime: String!
  ) {
    updateEvent(
      id: $id
      eventName: $eventName
      locationName: $locationName
      addressLine1: $addressLine1
      addressLine2: $addressLine2
      description: $description
      date: $date
      startTime: $startTime
      endTime: $endTime
    ) {
      id
    }
  }
`;
