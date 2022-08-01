import { useState } from 'react';
import cn from 'classnames';
import styles from './auth-form.module.css';
import { Link } from 'react-router-dom';
import Button from '../../../../common/components/button/button.component';

const AuthForm = () => {

  const [isLoginForm, setIsLoginForm] = useState(true);

  const showSignInFormElement = () => (
    <div className={styles.signInForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder='login' />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder='password' />
      </div>
      <Button name="Log In" />
      <div className={styles.forgotPassword}>
        <p>Forgot Password?</p>
      </div>
    </div>
  )

  const showRegistrationFormElement = () => (
    <div className={styles.registerForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder='login' />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder='password' />
        <input
          className={styles.input}
          type="password"
          name="password2"
          placeholder='confirm password' />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder='email' />
      </div>
      <Button name="Register" />
    </div>
  )

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
        {isLoginForm ? showSignInFormElement() : showRegistrationFormElement()}
      </div>
    </div>
  )
}

export default AuthForm;