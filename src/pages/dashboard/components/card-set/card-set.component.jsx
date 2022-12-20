import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../common/atomic-components/button/button.component';
import styles from './card-set.module.css';
import { ReactComponent as LearningSvg } from './svg/learning-student-svgrepo-com.svg';

const CardSet = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerTitle}>
          <div className={styles.svgContainer}>
            <LearningSvg />
          </div>
          <h1>Name of cardset</h1>
        </div>
        <div className={styles.mainInfo}>
          <p>isFavorite <i className="fas fa-heart"></i></p>
          <p>author</p>
          <p>createDate</p>
          <p>updateDate</p>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <Button name="Карточки" handler={() => navigate(`list`)} />
        <Button name="Учить!" handler={() => navigate(`memorize`)} />
        <Button name="Главное меню" handler={() => navigate(`memorize`)} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default CardSet;
