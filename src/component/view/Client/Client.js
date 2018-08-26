// Import modules ==============================================================
import React from 'react';
import gql from 'graphql-tag';

// Import components ===========================================================
import {Container, Icon, Label, Menu, Table, Header} from 'semantic-ui-react';
import {Query} from 'react-apollo';
import Loading from 'component/base/Loading';
import CreateClient from 'component/partial/Client/CreateClient';
import UpdateClient from 'component/partial/Client/UpdateClient';

// Import query ================================================================
import {GET_USER} from 'gql/query/user.gql';

class Client extends React.Component {
  render() {
    const {id} = this.props.match.params;
    
    return (
      <Container>
        <Header as='h1' dividing>
          Client Information
        </Header>
        {id == 'new' ? <CreateClient /> : (
          <Query query={GET_USER} variables={{id}}>
            {({loading, error, data, client}) => {
              if (loading) return <Loading loading={loading} />;
              if (error) return <p>Error : {error}(</p>;

              return (
                <div>
                  <UpdateClient user={data.user} />
                </div>
              );
            }}
          </Query>
        )}
      </Container>
    );
  }
}

Client.displayName = 'View/Client';

export default Client;
