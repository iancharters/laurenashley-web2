// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Checkbox as SUICheckbox} from 'semantic-ui-react';

// Import styles ===============================================================
import {LABEL} from './style.scss';

const Checkbox = ({label, ...props}) => (
  <div>
    {label ? <label className={LABEL}>{label}</label> : null}
    <SUICheckbox {...props} />
  </div>
);

Checkbox.displayName = 'Base/Checkbox';

export default Checkbox;
