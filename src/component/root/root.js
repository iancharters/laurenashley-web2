// Import modules ==============================================================
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import actions ==============================================================
import {authenticate, unauthenticate, logout} from 'action/session';

// Import components ===========================================================
import {Grid} from 'semantic-ui-react';
import Footer from 'component/layout/Footer';
import Header from 'component/layout/Header';
import MatchAuthenticated from 'component/util/MatchAuthenticated';
import RedirectAuthenticated from 'component/util/RedirectAuthenticated';
import Home from 'component/view/Home';
import Login from 'component/view/Login';
import NotFound from 'component/view/NotFound';
import Signup from 'component/view/Signup';
import Alert from 'react-s-alert';
import UserHome from 'component/view/UserHome';
import Client from 'component/view/Client';
import Clients from 'component/view/Clients';
import Event from 'component/view/Event';
import Events from 'component/view/Events';
import Settings from 'component/view/Settings';
import Stats from 'component/view/Stats';
import Test from 'component/view/Test';

class Root extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    token ? this.props.authenticate() : this.props.unauthenticate();
  }

  render() {
    const {isAuthenticated, willAuthenticate} = this.props;

    const authProps = {
      isAuthenticated,
      willAuthenticate,
    };

    return (
      <div style={{width: '100%'}}>
        <Router>
          <div>
            {isAuthenticated ? (
              <Header
                isAuthenticated={isAuthenticated}
                currentUser={this.props.currentUser}
                logout={this.props.logout}
              />
            ) : null}
          <Switch>
            <MatchAuthenticated
              exact
              path='/'
              component={Home}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/home'
              component={UserHome}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/stats'
              component={Stats}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/settings'
              component={Settings}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/client/:id'
              component={Client}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/clients'
              component={Clients}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/event/:id'
              component={Event}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/events'
              component={Events}
              {...authProps}
            />

            <MatchAuthenticated
              exact
              path='/test'
              component={Test}
              {...authProps}
            />

            {/* AUTH ROUTES */}
            <RedirectAuthenticated
              path='/signup'
              component={Signup}
              {...authProps}
            />
            <RedirectAuthenticated
              path='/login'
              component={Login}
              {...authProps}
            />
            <Route component={NotFound} />
          </Switch>
          </div>
        </Router>
        <Alert
          timeout={3000}
          offset={100}
          beep={false}
          effect='slide'
          position='bottom-right'
          stack={{limit: 3}}
        />
        {/* {isAuthenticated ? <Footer isAuthenticated={isAuthenticated} /> : null} */}
      </div>
    );
  }
}

Root.displayName = 'Root';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  authenticate: () => dispatch(authenticate()),
  unauthenticate: () => dispatch(unauthenticate()),
  logout: () => dispatch(logout()),
});

const mapStateProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  willAuthenticate: state.session.willAuthenticate,
  currentUser: state.session.currentUser,
});

export default connect(mapStateProps, mapDispatchToProps)(Root);
