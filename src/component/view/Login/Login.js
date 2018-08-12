// Import modules ==============================================================
import React from 'react';

// Import components ===========================================================
import LoginForm from './LoginForm';

// Import styles ===============================================================
import style from './style.scss';

const Login = () =>
  (<div className={style.outer}>
    <div className={style.middle}>
      <div className={style.inner}>
        <LoginForm />
      </div>
    </div>
  </div>);

Login.displayName = 'View/Login';

export default Login;
