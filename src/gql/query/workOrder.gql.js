import gql from 'graphql-tag';

export const UPDATE_WORK_ORDER = gql`
  mutation updateWorkOrder(
    $id: ID!
    $assignedDate: DateTime
    $billingAddress: [Json]
    $comments: String
    $dateIssued: DateTime
    $estimatedTime: Int
    $items: [Json]
    $jobDescription: String
    $panelType: String
    $phoneNumber: String
    $requestedBy: String
    $siteAddress: Json
    $tax: [Json]
    $technician: String
    $woNumber: Int
    $completed: Boolean
  ) {
    updateWorkOrder(
      id: $id
      assignedDate: $assignedDate
      billingAddress: $billingAddress
      comments: $comments
      dateIssued: $dateIssued
      estimatedTime: $estimatedTime
      items: $items
      jobDescription: $jobDescription
      panelType: $panelType
      phoneNumber: $phoneNumber
      requestedBy: $requestedBy
      siteAddress: $siteAddress
      tax: $tax
      technician: $technician
      woNumber: $woNumber
      completed: $completed
    ) {
      id
      assignedDate
      billingAddress
      comments
      dateIssued
      estimatedTime
      items
      jobDescription
      panelType
      phoneNumber
      requestedBy
      siteAddress
      tax
      technician
      woNumber
      completed
    }
  }
`;

export const NEXT_WORK_ORDER = gql`
  {
    nextWorkOrder {
      woNumber
    }
  }
`;

export const GET_WORK_ORDER = gql`
  query workOrder($id: ID!) {
    workOrder(id: $id) {
      id
      assignedDate
      billingAddress
      comments
      dateIssued
      estimatedTime
      items
      jobDescription
      panelType
      phoneNumber
      requestedBy
      siteAddress
      tax
      technician
      woNumber
      completed
      siteId
    }
  }
`;
