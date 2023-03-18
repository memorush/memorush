import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-form.module.css';
import LoginFormComponent from './login-form/login-form.component';
import RegisterFormComponent from './register-form/register-form.component';

const AuthFormComponent = () => {

  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.closeBtnContainer}>
        <Link to="/main">
          <i className="fas fa-times-circle"></i>
        </Link>
      </div>
      <div className={styles.authSwitcherContainer}>
        <p
          onClick={() => setIsLoginForm(true)}
          className={cn(isLoginForm ? styles.line : null)}
        >Войти
        </p>
        <p
          onClick={() => setIsLoginForm(false)}
          className={cn(!isLoginForm ? styles.line : null)}
        >Зарегистрироваться
        </p>
      </div>
      <div className={styles.content}>
        {isLoginForm ? <LoginFormComponent /> : <RegisterFormComponent />}
      </div>
    </div>
  )
}

export default AuthFormComponent;
