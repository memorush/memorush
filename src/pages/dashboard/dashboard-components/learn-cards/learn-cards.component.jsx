import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  cardByIdSelector
} from '../../../../redux/features/card/cardSlice';
import styles from './learn-cards.module.css';
import Button from '../../../../common/components/button/button.component';
import FlashCardItem from '../flash-card-item/flash-card-item.component';

const LearnCards = () => {

  // Search params fields
  const [searchParams] = useSearchParams();
  const cardSetId = searchParams.get('id');

  // Get data for card set with id = ...
  const cardSetById = useSelector(state => cardByIdSelector(state, cardSetId));
  const [cards, setCards] = useState(cardSetById);

  const showFlashCardItems = () => (
    cardSetById.cardList.map(card => (
      <FlashCardItem card={card} />
    ))
  )

  return (
    <div className={styles.container}>
      <div className={styles.cardSetName}>
        <h1>Set title: {cards.name}</h1>
      </div>
      <div className={styles.actionButtons}>
        <Button name="Flashcards" />
        <Button name="Learn" />
      </div>
      <div className={styles.flashCards}>
        {showFlashCardItems()}
      </div>
    </div>
  )
}

export default LearnCards;