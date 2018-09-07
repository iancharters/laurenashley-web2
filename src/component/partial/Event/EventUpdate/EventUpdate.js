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

import {UPDATE_EVENT} from 'gql/query/event.gql';

import {schema} from './schema';

const EventUpdate = ({event, ...props}) => {
  console.log(event)
  return (
    <div>
      <Mutation
        mutation={UPDATE_EVENT}
        update={(cache, {data: {updateEvent}}) => {
          props.history.replace(`/event/${updateEvent.id}`);
        }}
      >
        {(createUser) => (
          <Formik
            initialValues={{
              id: event.id,
              eventName: event.eventName,
              locationName: event.locationName,
              addressLine1: event.addressLine1,
              addressLine2: event.addressLine2,
              description: event.description,
              date: new Date(event.date).toISOString().slice(0, 10),
              startTime: event.startTime,
              endTime: event.endTime,
            }}
            // validationSchema={schema}
            onSubmit={(values, {setSubmitting}) => {
              console.log(values);
              createUser({
                variables: {
                  id: event.id,
                  eventName: values.eventName,
                  locationName: values.locationName,
                  addressLine1: values.addressLine1,
                  addressLine2: values.addressLine2,
                  description: values.description,
                  date: new Date(values.date),
                  startTime: values.startTime,
                  endTime: values.endTime,
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
                        onDayChange={(day) => setFieldValue('date', day)}
                        value={values.date}
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
};

EventUpdate.displayName = 'Partial/EventUpdate';

export default withRouter(EventUpdate);
