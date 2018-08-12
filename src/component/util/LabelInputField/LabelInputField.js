// Import modules ==============================================================
import React from 'react';
import {Form, Input as InputComponent, Label} from 'semantic-ui-react';

const LabelInputField = ({
  input,
  required,
  width,
  meta: {touched, error},
  ...props
}) => {
  return (
    <Form.Field error={!!(touched && error)} required={required} width={width}>
      <InputComponent required={required} {...input} {...props} />
      {touched && error ? (
        <Label basic color='red' pointing>
          {error}
        </Label>
      ) : null}
    </Form.Field>
  );
};

LabelInputField.displayName = 'Util/LabelInputField';

export default LabelInputField;
