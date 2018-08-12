// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Dropdown as SUIDropdown} from 'semantic-ui-react';

// Import collections ==========================================================
import {PROVINCES} from './collection/provinces';
import {COUNTRIES} from './collection/countries';

// Import styles ===============================================================
import {LABEL} from './style.scss';

const Dropdown = ({collection, options, label, ...props}) => {
  let c;

  if (collection) {
    switch (collection.toLowerCase()) {
    case 'provinces': {
      c = PROVINCES;
      collection = true;
      break;
    }

    case 'countries': {
      c = COUNTRIES;
      collection = true;
      break;
    }

    default: {
      collection = false;
      break;
    }
    }
  }

  return (
    <div>
      {label ? <label className={LABEL}>{label}</label> : null}
      {collection ? (
        <SUIDropdown
          autoComplete="new-password"
          search
          selection
          fluid
          options={c}
          {...props}
        />
      ) : (
        <SUIDropdown
          autoComplete="new-password"
          search
          selection
          fluid
          {...props}
        />
      )}
    </div>
  );
};

Dropdown.displayName = 'Base/Dropdown';

export default Dropdown;
