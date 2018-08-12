// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

const Content = ({component, refresh, props}) => {
  const Component = component;

  return (
    <div style={{marginTop: '7em'}}>
      <Component refresh {...props} />
    </div>
  );
};

Content.displayName = 'Util/Content';

export default Content;
