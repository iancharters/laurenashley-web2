import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!, $gender: String!, $password: String!, $isSuperuser: Boolean!, $isStaff: Boolean!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber, gender: $gender, password: $password, isSuperuser: $isSuperuser, isStaff: $isStaff) {
      id
      clientID
    }
  }
`;
