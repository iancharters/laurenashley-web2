// Import modules ==============================================================
import React from 'react';

import {Query, Mutation} from 'react-apollo';

import {SET_CURRENT_USER, GET_CURRENT_USER} from 'gql/query/user.gql';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Query query={GET_CURRENT_USER}>
          {({loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            console.log(data);
            return <div>QUERY!</div>;
          }}
        </Query>
        <Mutation mutation={SET_CURRENT_USER}>
          {(setCurrentUser) => (
            <button
              onClick={() => {
                setCurrentUser({variables: {id: 123, name: 'owow n stuff'}});
              }}
            >
              smiles and rainbows
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

Test.displayName = 'View/Test';

export default Test;
