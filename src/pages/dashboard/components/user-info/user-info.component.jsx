import styles from './user-info.module.css';
import { authEntitySelector } from '../../../../redux/features/auth/auth-slice';
import { useSelector } from 'react-redux';

const UserInfo = () => {

  const { username } = useSelector(authEntitySelector);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <i className="fas fa-user"></i>
      </div>
      <p>Здравствуйте, {username}!</p>
    </div>
  )
}

export default UserInfo;