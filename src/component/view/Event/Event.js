// Import modules ==============================================================
import React from 'react';
import gql from 'graphql-tag';

// Import components ===========================================================
import {Container, Icon, Label, Menu, Table, Header} from 'semantic-ui-react';
import {Query} from 'react-apollo';
import Loading from 'component/base/Loading';
import EventCreate from 'component/partial/Event/EventCreate';
import EventUpdate from 'component/partial/Event/EventUpdate';

// Import query ================================================================
import {GET_EVENT} from 'gql/query/event.gql';

class Event extends React.Component {
  render() {
    const {id} = this.props.match.params;

    return (
      <Container>
        <Header as='h1' dividing>
          Event Information
        </Header>
        {id == 'new' ? <EventCreate /> : (
          <Query query={GET_EVENT} variables={{id}}>
            {({loading, error, data, client}) => {
              if (loading) return <Loading loading={loading} />;
              if (error) return <p>Error : {error}(</p>;

              return (
                <div>
                  <EventUpdate event={data.event} />
                </div>
              );
            }}
          </Query>
        )}
      </Container>
    );
  }
}

Event.displayName = 'View/Event';

export default Event;
