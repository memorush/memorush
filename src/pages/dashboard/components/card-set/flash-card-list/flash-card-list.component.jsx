import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  cardByIdSelector
} from '../../../../../redux/features/card/cardSlice';
import FlashCardItem from './flash-card-item/flash-card-item.component';
import styles from "./flash-card-list.module.css";

const FlashCardList = () => {

  const { cardSetId } = useParams();

  // Get data for card set with id = ...
  const cardSetById = useSelector(state => cardByIdSelector(state, cardSetId));

  const showFlashCardItems = () => (
    cardSetById.cardList.map(card => (
      <FlashCardItem card={card} />
    ))
  )

  return (
    <div className={styles.container}>
      {showFlashCardItems()}
    </div>
  )
}

export default FlashCardList;