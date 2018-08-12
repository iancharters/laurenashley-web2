// Import modules ==============================================================
import React from 'react';
import {Form, Label} from 'semantic-ui-react';
import {LABEL} from './style.scss';

const FieldGroup = ({label, children, ...props}) => (
  <div {...props}>
    {label ? <label className={LABEL}>{label}</label> : null}
    {children.map((child) => {
      return child;
    })}
  </div>
);

FieldGroup.displayName = 'Partial/FieldGroup';

export default FieldGroup;
