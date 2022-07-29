import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../common/components/button/button.component';
import styles from './card-set.module.css';


const CardSet = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <Button name="Flashcards" handler={() => navigate(`list`)} />
        <Button name="Memorize" handler={() => navigate(`memorize`)} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default CardSet;