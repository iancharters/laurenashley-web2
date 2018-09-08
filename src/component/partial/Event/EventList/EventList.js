// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import Image from 'component/base/Image';

// Import styles ===============================================================
import {CARD, IMAGE} from './style.scss';

import gocarts from 'asset/image/gocarts.jpg';

const EventList = ({...props}) => {

  return (
    <div>
      <div className={CARD}>
        <Image src={gocarts} size='small' className={IMAGE} />
        stuff
      </div>
    </div>
  )
}


EventList.displayName = 'Partial/EventList';

export default EventList;
