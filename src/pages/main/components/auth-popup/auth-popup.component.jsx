import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-popup.module.css';
import LoginFormComponent from './login-form/login-form.component';
import RegisterFormComponent from './register-form/register-form.component';

const AuthPopupComponent = () => {

  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className={styles.authPopup} data-testId="authPopup">
      <div className={styles.authPopup__closeBtn}>
        <Link to="/main" role='button'>
          <i className="fas fa-times-circle"></i>
        </Link>
      </div>
      <div className={styles.authPopup__switcher}>
        <p data-testId="login-p" onClick={() => setIsLoginForm(true)} className={isLoginForm && styles.authPopup__switcher_line}>Войти</p>
        <p data-testId="register-p" onClick={() => setIsLoginForm(false)} className={cn(!isLoginForm ? styles.authPopup__switcher_line : null)}>Зарегистрироваться</p>
      </div>
      <div className={styles.authPopup__content}>
        {isLoginForm ? <LoginFormComponent /> : <RegisterFormComponent />}
      </div>
    </div>
  )
}

export default AuthPopupComponent;
