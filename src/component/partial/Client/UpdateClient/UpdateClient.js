// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Formik, Field} from 'formik';
import {Form} from 'semantic-ui-react';
import Input from 'component/base/Input';
import Button from 'component/base/Button';
import Dropdown from 'component/base/Dropdown';
import Checkbox from 'component/base/Checkbox';
import TextArea from 'component/base/TextArea';
import FormikFieldInput from 'component/base/FormikFieldInput';
import {Mutation} from 'react-apollo';
import Alert from 'react-s-alert';
import ConfirmDelete from 'component/partial/ConfirmDelete';

// Import query ================================================================
import {UPDATE_CLIENT, DELETE_CLIENT} from 'gql/query/client.gql';

// Import schema ===============================================================
import {schema} from './schema';

class UpdateClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submit: false,
    };
  }

  render() {
    const client = this.props.client;
    return (
      <Mutation mutation={UPDATE_CLIENT}>
        {(updateClient) => (
          <Formik
            initialValues={{
              id: client.id,
              clientID: client.clientID,
              firstName: client.firstName,
              lastName: client.lastName,
              email: client.email,
              phoneNumber: client.phoneNumber,
            }}
            validationSchema={schema}
            onSubmit={(values, {setSubmitting}) => {
              if (this.state.submit) {
                updateClient({
                  variables: {
                    id: client.id,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                  },
                })
                  .then((resp) => {
                    Alert.success('Success');
                  })
                  .catch((error) => {
                    Alert.error('Error');
                  });
              }

              setSubmitting(false);
              this.setState({submit: false});
            }}
            render={({values, handleSubmit, isSubmitting, errors}) => {
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
                  <Button
                    disabled={isSubmitting}
                    onClick={() => {
                      this.setState({submit: true})
                       if(Object.keys(errors).length > 0) {
                         Alert.warning("Errors present in form.")
                       }
                    }}
                    color='green'
                  >
                    Submit
                  </Button>
                  <Mutation mutation={DELETE_CLIENT}>
                    {(deleteClient) => (
                      <ConfirmDelete
                        redirectTo='/clients'
                        performAction={() => {
                          return deleteClient({
                            variables: {
                              id: client.id,
                            },
                          });
                        }}
                      >
                        Delete Customer
                      </ConfirmDelete>
                    )}
                  </Mutation>
                  <Button
                    onClick={() => console.log("Password Reset")}
                  >
                    Password Reset
                  </Button>
                </Form>
              );
            }}
          />
        )}
      </Mutation>
    );
  }
}

UpdateClient.displayName = 'Partial/UpdateClient';

export default UpdateClient;
