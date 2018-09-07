// Import modules ==============================================================
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

// Import actions ==============================================================
import {login} from 'action/session';

// Import components ===========================================================
import LabelInputField from 'component/util/LabelInputField';
import {
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from 'semantic-ui-react';
import Button from 'component/base/Button';

// Import styles ===============================================================
import style from '../style.scss';
import {C2, C5} from 'config/colors.config';

// Import images ===============================================================
import LALogo from 'asset/image/LALogo.png';

const LoginForm = ({handleSubmit, submitting}) => {
  const submit = (data, dispatch) => dispatch(login(data));

  return (
    <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <Image src={LALogo} style={{display: 'block', margin: '0 auto'}} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <Form size='large' onSubmit={handleSubmit(submit)}>
            <Segment stacked>
              <Field
                name='email'
                placeholder='Email'
                component={LabelInputField}
                fluid
                icon='lock'
                iconPosition='left'
              />

              <Field
                name='password'
                type='password'
                placeholder='Password'
                component={LabelInputField}
                fluid
                icon='lock'
                iconPosition='left'
              />

              <Button color='C4' fluid size='large'>
                {submitting ? 'Logging in...' : 'Login'}
              </Button>
            </Segment>
          </Form>
          <Message>
            <Link style={{textDecoration: 'none'}}to='/signup'>Create a new account</Link>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const validate = (values) => {
  const errors = {};
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 100) {
    errors.password = 'Must be more than 5 characters and less than 101';
  }

  return errors;
};

LoginForm.displayName = 'View/Login/LoginForm';

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
