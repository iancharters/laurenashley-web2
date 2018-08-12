// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import { Checkbox } from 'semantic-ui-react';

const Radio = ({ ...props }) => <Checkbox radio {...props} />;

Radio.displayName = 'Base/Radio';

export default Radio;
