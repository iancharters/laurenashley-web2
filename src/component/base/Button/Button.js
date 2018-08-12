// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Button as SUIButton} from 'semantic-ui-react';

import {C1, C2, C3, C4, C5} from 'config/colors.config';

const Button = ({color, style, ...props}) => {
  if (color) {
    var kitStyle = {color: 'white'};

    switch (color.toUpperCase()) {
    case 'C1':
      kitStyle = {backgroundColor: C1, ...kitStyle};
    case 'C2':
      kitStyle = {backgroundColor: C2, ...kitStyle};
    case 'C3':
      kitStyle = {backgroundColor: C3, ...kitStyle};
    case 'C4':
      kitStyle = {backgroundColor: C4, ...kitStyle};
    case 'C5':
      kitStyle = {backgroundColor: C5, ...kitStyle};
    default:
      break;
    }
  }

  return (
    <SUIButton
      style={style || kitStyle ? {...style, ...kitStyle} : null}
      color={color}
      {...props}
    />
  );
};

Button.displayName = 'Base/Button';

export default Button;
