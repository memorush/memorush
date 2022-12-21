import { Outlet, useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import styles from './card-set-list-id.module.css';
import { ReactComponent as LearningSvg } from './svg/learning-student-svgrepo-com.svg';

const CardSetListIdPage = () => {

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
        <ButtonAtomicComponent name="Карточки" handler={() => navigate(`card-list`)} />
        <ButtonAtomicComponent name="Учить!" handler={() => navigate(`card-memorize`)} />
        <ButtonAtomicComponent name="Главное меню" handler={() => navigate(`/dashboard/card-set-list`)} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default CardSetListIdPage;
