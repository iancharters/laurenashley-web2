// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {Image as SUIImage} from 'semantic-ui-react';

const Image = ({...props}) => <SUIImage {...props} />;

Image.displayName = 'Base/Image';

export default Image;
