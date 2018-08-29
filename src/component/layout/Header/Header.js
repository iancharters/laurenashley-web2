// Import modules ==============================================================
import React from 'react';
import {connect} from 'react-redux';

// Import actions ==============================================================
import {logout} from 'action/session';

// Import styles ===============================================================
import style from './style.scss';

// Import images ===============================================================
import Logo from 'asset/image/LALogo.png';

// Import components ===========================================================
import {Container, Grid, Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Button from 'component/base/Button';

import {CONTAINER, BOX} from './style.scss';

const Header = ({currentUser, logout}) => {
  const activeItem = 'home';

  return (
    <Menu
      fixed='top'
      pointing
      secondary
      borderless
      style={{backgroundColor: 'white'}}
    >
      <Container>
        <Menu.Item style={{padding: '10 0 10 0'}} fitted header>
          <Image src={Logo} />
        </Menu.Item>
        <div className={CONTAINER}>
          <Menu.Item>
            <Link to='/events'>Events</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/clients'>Clients</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/stats'>Stats</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/settings'>Settings</Link>
          </Menu.Item>
        </div>
        <div
          className={CONTAINER}
          style={{marginRight: '0', marginLeft: '0'}}
        >
          <Menu.Menu position='right'>
            <Menu.Item>Welcome, {currentUser.first_name}.</Menu.Item>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
          </Menu.Menu>
        </div>
      </Container>
    </Menu>
  );
};

Header.defaultProps = {
  currentUser: {
    first_name: '',
    last_name: '',
  },
};

Header.displayName = 'Layout/Header';

export default Header;
