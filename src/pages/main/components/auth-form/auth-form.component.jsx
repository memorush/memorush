import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-form.module.css';
import LoginForm from './login-form/login-form.component';
import RegisterForm from './register-form/register-form.component';

const AuthForm = () => {

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
        >SignIn
        </p>
        <p
          onClick={() => setIsLoginForm(false)}
          className={cn(!isLoginForm ? styles.line : null)}
        >Registration
        </p>
      </div>
      <div className={styles.content}>
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  )
}

export default AuthForm;