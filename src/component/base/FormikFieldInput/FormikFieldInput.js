// Import modules ==============================================================
import React from 'react';
import {Field} from 'formik';

// Import styles ===============================================================
import {ERROR, LABEL} from './style.scss';

const FormikFieldInput = ({component, field, form, size, label, ...props}) => {

  return (
    <div>
      {label ? <label className={LABEL}>{label}</label> : null}
      <Field component={component} {...props} />

      {form
        ? form.touched[field.name] &&
          form.errors[field.name] && (
          <div className={ERROR}>{form.errors[field.name]}</div>
        )
        : null}
    </div>
  );
};

FormikFieldInput.displayName = 'Base/FormikFieldInput';

export default FormikFieldInput;
