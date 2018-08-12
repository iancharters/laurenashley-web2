// Import modules ==============================================================
import React from 'react';

// Import styles ===============================================================
import {ERROR, LABEL} from './style.scss';

const FieldInput = ({component, field, form, size, label, ...props}) => {
  const Component = component;

  return (
    <div>
      {label ? <label className={LABEL}>{label}</label> : null}
      <Component {...field} {...props} />

      {form
        ? form.touched[field.name] &&
          form.errors[field.name] && (
          <div className={ERROR}>{form.errors[field.name]}</div>
        )
        : null}
    </div>
  );
};

FieldInput.displayName = 'Base/FieldInput';

export default FieldInput;
