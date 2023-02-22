import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  cardSetEntitiesSelector,
  deleteCardSet,
  setFavoriteCardSet,
  getAllCardSets
} from '../../../../../redux/features/card-set/card-set.slice';
import styles from './card-set-table.module.css';

const CardSetTableComponent = () => {

  const cardSetEntities = useSelector(cardSetEntitiesSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const trimTextForSpecificLength = (text, len) => {
    if (text.length > 20) {
      return text.substring(0, len) + "...";
    }
  }

  return <table>
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Описание</th>
        <th scope="col">Создан</th>
        <th scope="col">Обновлен</th>
        <th scope="col">Количество карт</th>
        <th scope="col">Папка</th>
        <th scope="col">Категория</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      {cardSetEntities.map((cardSet, idx) => {
        return (
          <tr key={idx}>
            <td data-label="Название"
              className={styles.cardSetTitle}
              onClick={() => navigate(`${cardSet.id}/card-list`)}
            >
              {cardSet.name}
            </td>
            <td data-label="Описание">{trimTextForSpecificLength(cardSet.description, 20)}</td>
            <td data-label="Создан">{cardSet.createdAt}</td>
            <td data-label="Обновлен">{cardSet.updatedAt}</td>
            <td data-label="Количество карточек">{cardSet.flashCardArray.length}</td>
            <td data-label="Папка">{cardSet.folder}</td>
            <td data-label="Категория">{cardSet.categoryName}</td>
            <td data-label="Действие">
              <i className="fas fa-edit"
                onClick={() => navigate(`/dashboard/card-set-edit?id=${cardSet.id}`)}
              >
              </i>
              <i className="fas fa-trash"
                onClick={() => dispatch(deleteCardSet(cardSet.id))}
              >
              </i>
              <i className="fas fa-heart"
                onClick={() => dispatch(setFavoriteCardSet(cardSet.id))}
                style={{ color: cardSet.isFavorite ? "red" : null }}
              >
              </i>
            </td>
          </tr>
        )
      })
      }
    </tbody>
  </table>
}

export default CardSetTableComponent;