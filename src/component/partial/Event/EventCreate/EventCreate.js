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
import TextArea from 'component/base/TextArea';
import Alert from 'react-s-alert';
import {withRouter} from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import {CREATE_EVENT} from 'gql/query/event.gql';

import {schema} from './schema';

const EventCreate = ({...props}) => (
  <div>
    <Mutation
      mutation={CREATE_EVENT}
      update={(cache, {data: {createEvent}}) => {
        props.history.replace(`/event/${createEvent.id}`);
      }}
    >
      {(createUser) => (
        <Formik
          initialValues={{
            eventName: '',
            locationName: '',
            addressLine1: '',
            addressLine2: '',
            description: '',
            date: '',
            startTime: '',
            endTime: '',
          }}
          //validationSchema={schema}
          onSubmit={(values, {setSubmitting}) => {
            console.log(values);
            createUser({
              variables: {
                eventName: values.eventName,
                locationName: values.locationName,
                addressLine1: values.addressLine1,
                addressLine2: values.addressLine2,
                description: values.description,
                date: values.date,
                startTime: values.startTime,
                endTime: values.endTime
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
                <Form.Field>
                  <FormikFieldInput
                    name='eventName'
                    component={Input}
                    label='Event Name'
                  />
                </Form.Field>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <FormikFieldInput
                      name='date'
                      component={DayPickerInput}
                      label='Date'
                      onDayChange={day => setFieldValue('date', day)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikFieldInput
                      name='startTime'
                      component={Input}
                      label='Start Time'
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikFieldInput
                      name='endTime'
                      component={Input}
                      label='End Time'
                    />
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <FormikFieldInput
                    name='locationName'
                    component={Input}
                    label='Location Name'
                  />
                </Form.Field>

                <Form.Field>
                  <FormikFieldInput
                    name='addressLine1'
                    component={Input}
                    label='Address Line 1'
                  />
                </Form.Field>

                <Form.Field>
                  <FormikFieldInput
                    name='addressLine2'
                    component={Input}
                    label='Address Line 2'
                  />
                </Form.Field>

                <Form.Field>
                  <FormikFieldInput
                    name='description'
                    component={TextArea}
                    label='Event Description'
                    rows={5}
                  />
                </Form.Field>


                <Button disabled={isSubmitting} color='green'>
                  Submit
                </Button>
              </Form>
            );
          }}
        />
      )}
    </Mutation>
  </div>
);

EventCreate.displayName = 'Partial/EventCreate';

export default withRouter(EventCreate);
