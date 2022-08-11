import { useDispatch } from 'react-redux';
import Button from '../../../../common/atomic-components/button/button.component';
import { updateUserData } from '../../../../redux/features/auth/auth-slice';
import styles from './settings.module.css';
import { useState } from 'react';

const Settings = () => {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const onInputDataChangedHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const onUpdateDataHandler = () => {
    dispatch(updateUserData(userData));
  }

  return (
    <div className={styles.container}>
      <label htmlFor='title'>Ваш пароль</label>
      <input
        type="password"
        name="password"
        onChange={onInputDataChangedHandler}
      />
      <label htmlFor='title'>Введите пароль еще раз</label>
      <input
        type="password"
        name="password2"
        onChange={onInputDataChangedHandler}
      />
      <label htmlFor='title'>Ваш email</label>
      <input
        type="email"
        name="email"
        onChange={onInputDataChangedHandler}
      />
      <Button name="Обновить данные пользователя" handler={onUpdateDataHandler} />
    </div>
  )
}

export default Settings;
