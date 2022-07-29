import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../common/components/button/button.component';
import {
  cardEntitySelector, deleteCardSet, getAllCardSets
} from '../../../../redux/features/card/cardSlice';
import styles from './card-set-list.module.css';

const CardSetList = () => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const showCardSetTable = () => (
    <>
      {cardEntity.map((cardSet, idx) => (
        <tr key={idx}>
          <td
            className={styles.cardSetTitle}
            onClick={() => navigate(`${cardSet.id}/list`)}
          >
            {cardSet.name}
          </td>
          <td>{cardSet.description}</td>
          <td>{cardSet.createdAt}</td>
          <td>{cardSet.updatedAt}</td>
          <td>{cardSet.cardList.length}</td>
          <td>{cardSet.folder}</td>
          <td>{cardSet.isFavorite}</td>
          <td className={styles.toolsContainer}>
            <i className="fas fa-edit"
              onClick={() => navigate(`/dashboard/card-set-edit?id=${cardSet.id}`)}
            >
            </i>
            <i className="fas fa-trash"
              onClick={() => dispatch(deleteCardSet(cardSet.id))}
            >
            </i>
            <i className="fas fa-heart"></i>
          </td>
        </tr>
      ))
      }
    </>
  )

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link to={"/dashboard/card-set-create"}>
          <Button name="Create new Set" />
        </Link>
        <Link to={"/dashboard/card-set-folders"}>
          <Button name="folders" />
        </Link>
        <Link to={"/dashboard/card-set-favorites"}>
          <Button name="favorites" />
        </Link>
        <Link to={"/dashboard/card-set-recently"}>
          <Button name="recently" />
        </Link>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Set Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Card count</th>
            <th>Folder</th>
            <th>Favorite</th>
            <th>Tools</th>
          </tr>
          {showCardSetTable()}
        </tbody>
      </table>
    </div>
  )
}

export default CardSetList;
