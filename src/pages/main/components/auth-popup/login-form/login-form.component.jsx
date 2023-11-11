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

  const loginHandler = () => {
    dispatch(login(formData));
  }

  //TODO Сделать валидацию, а мб одну большую валидацию для двух компонентов и массива входных данных!

  return (
    <form className={styles.loginForm} data-testid="login-form">
      <div className={styles.loginForm__inputsContainer}>
        <input
          className={styles.loginForm__input}
          type="text"
          name="username"
          onChange={formInputHandler}
          placeholder='Имя пользователя' />
        <input
          className={styles.loginForm__input}
          type="password"
          name="password"
          onChange={formInputHandler}
          placeholder='Пароль' />
      </div>
      <ButtonAtomicComponent
        name="Войти"
        clickFunction={loginHandler}
      />
    </form>
  )
}

export default LoginFormComponent;
