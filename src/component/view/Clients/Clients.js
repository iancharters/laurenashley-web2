// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import ClientSearch from 'component/partial/Search/ClientSearch';
import {Container, Header} from 'semantic-ui-react';
import Button from 'component/base/Button';
import {Link} from 'react-router-dom';
import {HEADER, BUTTON} from './style.scss';

const Clients = () =>
<Container>
  <Header as='h1' dividing className={HEADER}>
    Client Management{' '}
    <Link to='/client/new'>
      <Button color='green' className={BUTTON}>
        New Client
      </Button>
    </Link>
  </Header>
  <ClientSearch />
</Container>

Clients.displayName = 'View/Clients';

export default Clients;
