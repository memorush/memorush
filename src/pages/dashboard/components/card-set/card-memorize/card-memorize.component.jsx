import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../../../common/atomic-components/button/button.component';
import {
  flashCardArrayFromCardSetWithIdSelector
} from '../../../../../redux/features/card/cardSlice';
import FlashCardItem from '../flash-card-list/flash-card-item/flash-card-item.component';
import styles from './card-memorize.module.css';
import CongratulationComponent from './congratulation/congratulation.component';
import TipComponent from './tip/tip.component';

const CardMemorize = () => {

  const { cardSetId } = useParams();
  const [isStarted, setIsStarted] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  // Temp array with learned words
  let learned = [];

  const flashCardArrayFromCardSetWithId = useSelector(state => flashCardArrayFromCardSetWithIdSelector(state, cardSetId));
  const [cards, setCards] = useState(flashCardArrayFromCardSetWithId);

  const nextCardHandler = () => {
    currentPosition < (cards.length - 1) ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0);
  }

  // Обнулить все значение!
  const setInitStateHandler = () => {
    setCards(flashCardArrayFromCardSetWithId);
    learned = [];
    setIsStarted(false);
  }

  /**
   * Логика метода, если пользователь знает карточку, то эта карточка вычитается из массива
   * неизученных карточек, тем самым сокращаются размеры массива, пока он не станет равным 0
   */
  const knowCardActionHandler = () => {
    if (cards.length > 0) {
      learned.push(cards[currentPosition]);
      setCards(cards.filter(card => !learned.includes(card)));
    }
  }

  const showLearnCardViewElement = () => (
    <div className={styles.learningViewContainer}>
      <div className={styles.workArea}>
        {cards.length !== 0
          ?
          <FlashCardItem card={cards[currentPosition]} />
          :
          <CongratulationComponent setInitStateHandler={setInitStateHandler} />
        }
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          name="Знаю это слово!"
          handler={knowCardActionHandler}
          color="#5CB85C"
        />
        <Button
          name="Не знаю"
          handler={nextCardHandler}
          color="#D9534F"
        />
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      {!isStarted ? <TipComponent setIsStarted={setIsStarted} /> : showLearnCardViewElement()}
    </div>
  )

}

export default CardMemorize;
