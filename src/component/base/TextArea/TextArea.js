// Import modules ==============================================================
import React from 'react';
import {TextArea as SUITextArea} from 'semantic-ui-react';

// Import styles ===============================================================
import {BASE} from './style.scss';

const TextArea = ({field, ...props}) => (
  <SUITextArea className={BASE} {...field} {...props} />
);

TextArea.displayName = 'Partial/TextArea';

export default TextArea;
