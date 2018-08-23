// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Formik, Field} from 'formik';
import {Form} from 'semantic-ui-react';
import Input from 'component/base/Input';
import Button from 'component/base/Button';
import Dropdown from 'component/base/Dropdown';
import Checkbox from 'component/base/Checkbox';
import FormikFieldInput from 'component/base/FormikFieldInput';
import {Mutation} from 'react-apollo';
import Alert from 'react-s-alert';

// Import query ================================================================
import {CREATE_USER} from 'gql/query/user.gql';

// Import schema ===============================================================
import {schema} from './schema';

// Import utils ================================================================
import {createPassword} from 'utils/user';

const CreateClient = () => (
  <Mutation mutation={CREATE_USER}>
    {(createUser) => (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          gender: 'male',
          isStaff: false,
          isSuperuser: false,
        }}
        validationSchema={schema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
          createUser({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phoneNumber: values.phoneNumber,
              gender: values.gender,
              password: createPassword(),
              isStaff: values.isStaff,
              isSuperuser: values.isSuperuser,
            },
          })
            .then((resp) => {
              Alert.success('Success');
            })
            .catch((error) => {
              Alert.error('Error');
            });

          setSubmitting(false);
        }}
        render={({values, handleSubmit, isSubmitting, setFieldValue}) => {
          return (
            <Form size='large' onSubmit={handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Field>
                  <FormikFieldInput
                    name='firstName'
                    component={Input}
                    label='First Name'
                  />
                </Form.Field>
                <Form.Field>
                  <FormikFieldInput
                    name='lastName'
                    component={Input}
                    label='Last Name'
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <FormikFieldInput
                    name='email'
                    component={Input}
                    label='Email'
                  />
                </Form.Field>
                <Form.Field>
                  <FormikFieldInput
                    name='phoneNumber'
                    component={Input}
                    label='Phone Number'
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <FormikFieldInput
                    name='gender'
                    component={Dropdown}
                    collection='genders'
                    label='Gender'
                    onChange={(e, {value}) => setFieldValue('gender', value)}
                  />
                </Form.Field>
                <Form.Field>
                  <FormikFieldInput
                    name='isSuperuser'
                    component={Checkbox}
                    label='Superuser?'
                    checked={values.checkbox}
                    onChange={(event, data) => {
                      setFieldValue('isSuperuser', !values.isSuperuser);
                    }}
                    toggle
                  />
                </Form.Field>
                <Form.Field>
                  <FormikFieldInput
                    name='isStaff'
                    component={Checkbox}
                    label='Staff?'
                    checked={values.checkbox}
                    onChange={(event, data) => {
                      setFieldValue('isStaff', !values.isStaff);
                    }}
                    toggle
                  />
                </Form.Field>
              </Form.Group>
              <Button disabled={isSubmitting} color='green'>
                Submit
              </Button>
            </Form>
          );
        }}
      />
    )}
  </Mutation>
);

CreateClient.displayName = 'Partial/CreateClient';

export default CreateClient;
