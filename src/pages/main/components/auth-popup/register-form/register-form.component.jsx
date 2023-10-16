import styles from './register-form.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import {
  registration,
  authErrorSelector,
  authStatusSelector
} from '../../../../../redux/features/auth/auth-slice';

const RegisterFormComponent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [validationError, setValidationError] = useState();
  // Статус запроса на сервер
  const authStatus = useSelector(authStatusSelector);

  // Серверная ошибка
  const authError = useSelector(authErrorSelector);

  const [isPolicyAgree, setIsPolicyAgree] = useState(false);

  /**
   * Если сервер вернул ошибку, эта ошибка будет установлена в поле ошибок валидации данных!
   */
  useEffect(() => {
    setValidationError(authError);
  }, [authError])

  // Если мы успешно зарегистрировались, нас перенаправляют на главную страницу
  useEffect(() => {
    if (authStatus === 'register') {
      navigate("/main", { replace: true });
    }
  }, [authStatus])

  const formInputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const registerNewUserHandler = () => {
    if (isFormDataValidHandler() === true) {
      dispatch(registration(formData));
    }
  }

  //TODO Доделать валидацию
  /**
   * Валидируем данные формы
   */
  const isFormDataValidHandler = () => {
    if (formData.password.length < 6) {
      setValidationError("Sorry, but password length must be greater than 6");
      return false;
    }
    if (formData.password !== formData.password2) {
      setValidationError("Sorry, Passwords do not match");
      return false;
    }
    setValidationError();
    return true;
  }

  const showValidationElement = () => {
    return (
      <div className={styles.validation}>
        <p className={styles.validation__message}>{validationError}</p>
      </div>
    )
  }

  return (
    <form className={styles.registerForm} data-testId="register-form">
      <div className={styles.registerForm__inputsContainer}>
        <input
          className={styles.registerForm__input}
          type="text"
          name="username"
          onChange={formInputHandler}
          placeholder='Имя пользователя' />
        <input
          className={styles.registerForm__input}
          type="password"
          name="password"
          onChange={formInputHandler}
          placeholder='Пароль' />
        <input
          className={styles.registerForm__input}
          type="password"
          name="password2"
          onChange={formInputHandler}
          placeholder='Подтвердите пароль' />
        <div className={[styles.registerForm__privacy, styles.privacy]}>
          <label className={styles.privacy__label} htmlFor="privacy-checkbox">Используя сервис или сайты, вы соглашаетесь с Правилами использования, которые включают в себя настоящую Политику конфиденциальности.
          </label>
          <div className={styles.privacy__checkboxContainer}>
            <input
              className={styles.privace__input}
              type="checkbox"
              name=""
              id="privacy-checkbox"
              defaultChecked={isPolicyAgree}
              onChange={() => setIsPolicyAgree(!isPolicyAgree)}
            />
            <Link to={"/privacy-policy"}>Политика конфиденциальности</Link>
          </div>
        </div>
        {validationError !== null ? showValidationElement() : null}
      </div>
      <ButtonAtomicComponent
        name="Зарегистрироваться"
        disable={!isPolicyAgree}
        clickFunction={registerNewUserHandler}
      />
    </form>
  )
}

export default RegisterFormComponent;
