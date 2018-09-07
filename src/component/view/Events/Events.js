// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Container, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Button from 'component/base/Button';
import EventList from 'component/partial/Event/EventList';
import EventCreate from 'component/partial/Event/EventCreate';

// Import styles ===============================================================
import {HEADER, BUTTON} from './style.scss';

const Events = () =>
<Container>
  <Header as='h1' dividing className={HEADER}>
    Event List{' '}
    <Link to='/event/new'>
      <Button color='green' className={BUTTON}>
        New Event
      </Button>
    </Link>
  </Header>
  <EventList />
</Container>

Events.displayName = 'View/Events';

export default Events;
