// Import modules ==============================================================
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

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

// Import actions ==============================================================
import {signup} from 'action/session';

import {C4} from 'config/colors.config';

const SignupForm = ({handleSubmit, submitting}) => {
  const submit = (data, dispatch) => dispatch(signup(data));

  return (
    <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' style={{color: C4}} textAlign='center'>
          Register a New User
        </Header>
        <Form size='large' onSubmit={handleSubmit(submit)}>
          <Segment stacked>
            <Field name='name' component={LabelInputField} placeholder='Name' />

            <Field
              name='username'
              component={LabelInputField}
              placeholder='Username'
            />

            <Field
              name='email'
              component={LabelInputField}
              placeholder='Email'
            />

            <Field
              name='password'
              component={LabelInputField}
              type='password'
              placeholder='Password'
            />

            <Button color='C4' fluid size='large'>
              {submitting ? 'Registering...' : 'Signup'}
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to='/login'>Login to Existing Account</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

const validate = (values) => {
  const errors = {};
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 1 || values.name.length > 255) {
    errors.name = 'Must be less than 256 characters';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 1 || values.username.length > 26) {
    errors.username = 'Must be less than 27 characters';
  }

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

SignupForm.displayName = 'View/Signup/SignupForm';

export default reduxForm({
  form: 'signup',
  validate,
})(SignupForm);
