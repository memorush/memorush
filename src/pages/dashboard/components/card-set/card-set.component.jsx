import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../common/atomic-components/button/button.component';
import styles from './card-set.module.css';


const CardSet = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <Button name="Карточки" handler={() => navigate(`list`)} />
        <Button name="Учить!" handler={() => navigate(`memorize`)} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default CardSet;
