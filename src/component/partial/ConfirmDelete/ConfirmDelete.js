// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Mutation} from 'react-apollo';
import {Button, Modal} from 'semantic-ui-react';
import Alert from 'react-s-alert';
import {Redirect} from 'react-router';

// Import styles ===============================================================
import {WRAPPER} from './ConfirmDelete.scss';

class ConfirmDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      open: false,
    };

    this.handleRedirect = this.handleRedirect.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  handleRedirect() {
    this.setState({redirect: true});
  }

  show() {
    this.setState({open: true});
  }
  close() {
    this.setState({open: false});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.props.redirectTo} />;
    }

    return (
      <div className={WRAPPER}>
        <Button color='red' onClick={this.show}>
          {this.props.children}
        </Button>

        <Modal size='small' open={this.state.open} onClose={this.close}>
          <Modal.Header>
            Are you sure you want to delete this record?
          </Modal.Header>
          <Modal.Content>
            <p>Put type delete box in here.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.close}>
              Cancel
            </Button>
            <Button
              color='red'
              content={this.props.children}
              onClick={(e) => {
                e.preventDefault();
                this.props
                  .performAction()
                  .then((resp) => {
                    Alert.success('Success');
                    this.close();
                    this.handleRedirect();
                  })
                  .catch((error) => {
                    Alert.error('Error');
                  });
              }}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

ConfirmDelete.displayName = 'Partial/ConfirmDelete';

export default ConfirmDelete;
