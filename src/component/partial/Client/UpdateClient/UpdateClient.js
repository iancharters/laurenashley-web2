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
import ConfirmDelete from 'component/partial/ConfirmDelete';

// Import query ================================================================
import {UPDATE_USER, GET_USER, DELETE_USER} from 'gql/query/user.gql';

import {schema} from './schema';
import {phone} from 'selector/phone';

const UpdateUser = ({user}) => {
  return (
    <Mutation
      mutation={UPDATE_USER}
      update={(cache, {data: {updateUser}}) => {
        // Read the data from our cache for this query.
        const data = cache.readQuery({
          query: GET_USER,
          variables: {id: user.id},
        });

        // Update data
        data.user = updateUser;

        // Write our data back to the cache.
        cache.writeQuery({query: GET_USER, data});
      }}
    >
      {(updateUser) => (
        <Formik
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            isStaff: user.isStaff,
            isSuperuser: user.isSuperuser,
          }}
          validationSchema={schema}
          onSubmit={(values, {setSubmitting}) => {
            updateUser({
              variables: {
                id: user.id,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: phone(values.phoneNumber),
                gender: values.gender,
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
              <div>
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
                        onChange={(e, {value}) =>
                          setFieldValue('gender', value)
                        }
                        value={values.gender}
                      />
                    </Form.Field>
                    <Form.Field>
                      <FormikFieldInput
                        name='isSuperuser'
                        component={Checkbox}
                        label='Superuser?'
                        checked={values.isSuperuser}
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
                        checked={values.isStaff}
                        onChange={(event, data) => {
                          setFieldValue('isStaff', !values.isStaff);
                        }}
                        toggle
                      />
                    </Form.Field>
                  </Form.Group>
                  <Button
                    disabled={isSubmitting}
                    color='green'
                    style={{float: 'left'}}
                  >
                    Submit
                  </Button>
                </Form>
                <Mutation mutation={DELETE_USER}>
                  {(deleteUser) => (
                    <ConfirmDelete
                      redirectTo='/clients'
                      performAction={() => {
                        return deleteUser({
                          variables: {
                            id: user.id,
                          },
                        });
                      }}
                    >
                      Delete Customer
                    </ConfirmDelete>
                  )}
                </Mutation>
                <Button onClick={() => console.log('Password Reset')}>
                  Password Reset
                </Button>
              </div>
            );
          }}
        />
      )}
    </Mutation>
  );
};

UpdateUser.displayName = 'Partial/UpdateUser';

export default UpdateUser;
