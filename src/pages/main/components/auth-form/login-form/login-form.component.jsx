import styles from './login-form.module.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import {
  login,
  authStatusSelector
} from '../../../../../redux/features/auth/auth-slice';

const LoginFormComponent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const authStatus = useSelector(authStatusSelector);

  useEffect(() => {
    if (authStatus === 'login') {
      navigate("/dashboard/info", { replace: true });
    }
  }, [authStatus])

  const formInputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onLoginFormHandler = () => {
    dispatch(login(formData));
  }

  //TODO Сделать валидацию, а мб одну большую валидацию для двух компонентов и массива входных данных!

  return (
    <div className={styles.signInForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="username"
          onChange={formInputHandler}
          placeholder='login' />
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={formInputHandler}
          placeholder='password' />
      </div>
      <ButtonAtomicComponent handler={onLoginFormHandler} name="Log In" />
      <div className={styles.forgotPassword}>
        <p>Forgot Password?</p>
      </div>
    </div>
  )
}

export default LoginFormComponent;
