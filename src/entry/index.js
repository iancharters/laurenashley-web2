/* global window */
// Import modules ==============================================================
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';
import {ApolloLink} from 'apollo-link';
import {withClientState} from 'apollo-link-state';
// import gql from 'graphql-tag';

// Import store ================================================================
import store from 'store';

// Import components ===========================================================
import Root from 'component/root';

// Import config ===============================================================
import {GQL} from 'config/url.config';
import {resolvers} from 'gql/resolver';
import {defaults} from 'gql/default';

// Import styles ===============================================================
import './global.scss';

const client = new ApolloClient({
  uri: GQL,
  clientState: {
    defaults,
    resolvers,
  },
});

// const stateLink = withClientState({
//   defaults,
//   resolvers,
//   typeDefs,
// });
//
// export const client = new ApolloClient({
//   uri: GQL,
//   cache,
//   link: ApolloLink.from([stateLink, new HttpLink()]),
// });


render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ApolloProvider>,
  window.document.getElementById('app')
);
