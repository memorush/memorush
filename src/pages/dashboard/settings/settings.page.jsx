import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import { updateUserData } from '../../../redux/features/auth/auth-slice';
import styles from './settings.module.css';
import { ReactComponent as SettingsSvg } from './svg/settings-svgrepo-com.svg';

const SettingsPage = () => {

  const navigate = useNavigate();
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
      <div className={styles.containerTitle}>
        <div className={styles.svgContainer}>
          <SettingsSvg />
        </div>
        <h1>Настройки пользователя</h1>
      </div>
      <div className={styles.settingsContainer}>
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
        <div className={styles.actionButtons}>
          <ButtonAtomicComponent name="Обновить данные пользователя" handler={onUpdateDataHandler} />
          <ButtonAtomicComponent name="Главное меню" handler={() => navigate(`/dashboard/card-set-list`)} />
        </div>
      </div>
    </div >
  )
}

export default SettingsPage;
