// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import {ClipLoader} from 'react-spinners';

const Loading = ({loading, ...props}) => (
  <ClipLoader color={'#123abc'} loading={loading} {...props} />
);

Loading.displayName = 'Base/Loading';

export default Loading;
