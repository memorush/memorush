import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  cardSetByIdSelector
} from '../../../../../redux/features/card-set/card-set.slice';
import CardItem from './components/card-item/card-item.component';
import styles from "./card-list.module.css";

const CardListPage = () => {

  const { cardSetId } = useParams();

  // Get data for card-set set with id = ...
  const cardSetById = useSelector(state => cardSetByIdSelector(state, cardSetId));

  const showFlashCardItems = () => (
    cardSetById.flashCardArray.map(card => (
      <CardItem card={card} />
    ))
  )

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1>{cardSetId}</h1>
        <h3>12 Cards in this Set</h3>
      </div>
      <div className={styles.actionsButtons}>
        <p>Press on a card for turning on</p>
        <div className={styles.buttons}>
          <i className="fas fa-edit"> Edit</i>
          <i className="fas fa-print"> Print</i>
          <i className="fas fa-file-export"> Export</i>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {showFlashCardItems()}
      </div>
    </div>
  )
}

export default CardListPage;
