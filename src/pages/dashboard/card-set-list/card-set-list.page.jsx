import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import {
  cardSetEntitiesSelector,
  deleteCardSet,
  getAllCardSets,
  setFavoriteCardSet
} from '../../../redux/features/card-set/card-set.slice';
import { ReactComponent as UserSvg } from './svg/user-svgrepo-com.svg';
import styles from './card-set-list.module.css';

const CardSetListPage = () => {

  const dispatch = useDispatch();
  const cardSetEntities = useSelector(cardSetEntitiesSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const trimTextForSpecificLength = (text, len) => {
    if (text.length > 20) {
      return text.substring(0, len) + "...";
    }
  }

  const showCardSetTable = () => (
    <>
      {cardSetEntities.map((cardSet, idx) => {
        const {
          id,
          description,
          createdAt,
          updatedAt,
          flashCardArray,
          folder,
          categoryName,
          isFavorite } = cardSet;
        return (
          <tr key={idx} className={styles.tr}>
            <td
              className={styles.cardSetTitle}
              onClick={() => navigate(`${cardSet.id}/card-list`)}
            >
              {cardSet.name}
            </td>
            <td>{trimTextForSpecificLength(description, 20)}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td>{flashCardArray.length}</td>
            <td>{folder}</td>
            <td>{categoryName}</td>
            <td className={styles.toolsContainer}>
              <i className="fas fa-edit"
                onClick={() => navigate(`/dashboard/card-set-edit?id=${id}`)}
              >
              </i>
              <i className="fas fa-trash"
                onClick={() => dispatch(deleteCardSet(id))}
              >
              </i>
              <i className="fas fa-heart"
                onClick={() => dispatch(setFavoriteCardSet(id))}
                style={{ color: isFavorite ? "red" : null }}
              >
              </i>
            </td>
          </tr>
        )
      })
      }
    </>
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userSvgContainer}>
          <UserSvg />
        </div>
        <h1>Hello, user</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.menuContainer}>
          <div className={styles.menuNavigation}>
            <Link to={"/dashboard/card-set-list"}>
              <ButtonAtomicComponent name={"Наборы"} />
            </Link>
            <Link to={"/dashboard/settings"}>
              <ButtonAtomicComponent name={`Настройки `} />
            </Link>
          </div>
        </div>
        <div className={styles.dashboardContainer}>
          <div className={styles.navigation}>
            <Link to={"/dashboard/card-set-create"}>
              <ButtonAtomicComponent name="Создать набор" />
            </Link>
            {/* //TODO Добавить логику */}
            <Link to={"/dashboard/card-set-folders"}>
              <ButtonAtomicComponent name="Папки" />
            </Link>
            <Link to={"/dashboard/card-set-favorites"}>
              <ButtonAtomicComponent name="Избранные" />
            </Link>
          </div>
          <div className={styles.tableContainer}>
            <table>
              <tbody>
                <tr className={styles.tr}>
                  <th>Название</th>
                  <th>Описание</th>
                  <th>Создан</th>
                  <th>Обновлен</th>
                  <th>Количество карт</th>
                  <th>Папка</th>
                  <th>Категория</th>
                  <th>Действия</th>
                </tr>
                {showCardSetTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSetListPage;
