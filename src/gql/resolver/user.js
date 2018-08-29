import {GET_CURRENT_USER} from 'gql/query/user.gql';

export const resolvers = {
  Mutation: {
    setCurrentUser: (_, {id, name}, {cache}) => {
      cache.writeData({
        data: {currentUser: {id: id, name: name, __typename: 'currentUser'}}
      });

      console.log("firing local resolver")
      return null;
    },
  },
};
