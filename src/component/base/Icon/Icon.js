// Import actions ==============================================================
import React from 'react';

// Import components ===========================================================
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Icon = ({...props}) => {
  return <FontAwesomeIcon {...props} />;
};

Icon.displayName = 'base/Icon';

export default Icon;
