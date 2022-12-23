import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cardSetByIdSelector } from '../../../redux/features/card-set/card-set.slice';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import styles from './card-set-list-id.module.css';
import { ReactComponent as LearningSvg } from './svg/learning-student-svgrepo-com.svg';

const CardSetListIdPage = () => {

  const navigate = useNavigate();
  const { cardSetId } = useParams();

  // Get data for card-set set with id = ...
  const {
    name,
    createdAt,
    updatedAt,
    isFavorite
  } = useSelector(state => cardSetByIdSelector(state, cardSetId));

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerTitle}>
          <div className={styles.svgContainer}>
            <LearningSvg />
          </div>
          <h1>{name}</h1>
        </div>
        <div className={styles.mainInfo}>
          <p>Любимый набор? <i className="fas fa-heart" style={{ color: isFavorite ? 'red' : '' }}></i></p>
          <p>Дата создания: <span>{createdAt}</span></p>
          <p>Дата обновления: {updatedAt}</p>
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
