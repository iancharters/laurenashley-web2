// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Input as SUIInput} from 'semantic-ui-react';

// Import styles ===============================================================
import {ERROR, LABEL} from './style.scss';

const Input = ({field, form, size, label, ...props}) => {
  return (
    <div>
      {label ? <label className={LABEL}>{label}</label> : null}
      <SUIInput type='text' size={size || 'large'} {...field} {...props} autoComplete="new-password"/>

      {form
        ? form.touched[field.name] &&
          form.errors[field.name] && (
          <div className={ERROR}>{form.errors[field.name]}</div>
        )
        : null}
    </div>
  );
};

Input.displayName = 'Base/Input';

export default Input;
