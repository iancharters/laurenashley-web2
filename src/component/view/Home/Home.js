// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Container, Header, Dimmer} from 'semantic-ui-react';
import Button from 'component/base/Button';
import Icon from 'component/base/Icon';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => this.setState({active: true});
  handleClose = () => this.setState({active: false});
  verifyEmail = () => console.log("VERIFY")
  refresh = () => console.log("REFRESH")
  render() {
    const {active} = this.state;

    return (
      <div>
        <Dimmer active={active} page>
          <Header as='h2' icon inverted>
            <Icon name='heart' />
            Please verify your email and then refresh this page.
            <Header.Subheader><Button onClick={() => this.verifyEmail(user.email)}>Resend Email</Button><Button onClick={() => this.refresh()}>Refresh</Button></Header.Subheader>
            <Header.Subheader></Header.Subheader>
          </Header>
        </Dimmer>
        <Container text>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>
            This is a basic fixed menu template using fixed size containers.
          </p>
          <p>
            A text container is used for the main container, which is useful for
            single column layouts.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </div>
    );
  }
}

Home.displayName = 'View/Home';

export default Home;
