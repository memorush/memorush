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
      <label htmlFor='title'>Your password</label>
      <input
        type="password"
        name="password"
        onChange={onInputDataChangedHandler}
      />
      <label htmlFor='title'>Your email</label>
      <input
        type="email"
        name="email"
        onChange={onInputDataChangedHandler}
      />
      <Button name="Update Profile" handler={() => dispatch(updateUserData(userData))} />
    </div>
  )
}

export default Settings;
