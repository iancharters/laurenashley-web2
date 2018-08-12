// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import SignupForm from './SignupForm';

// Import styles ===============================================================
import style from './style.scss';

const Signup = () => (
  <div className={style.outer}>
    <div className={style.middle}>
      <div className={style.inner}>
        <SignupForm />
      </div>
    </div>
  </div>
);

Signup.displayName = 'View/Signup';

export default Signup;
