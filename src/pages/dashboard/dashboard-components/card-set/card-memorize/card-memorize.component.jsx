import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../../../common/components/button/button.component';
import {
  cardByIdSelector
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
  const learned = [];

  const [cards, setCards] = useState(useSelector(state => cardByIdSelector(state, cardSetId).cardList));

  const nextCardHandler = () => {
    currentPosition < (cards.length - 1) ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0);
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
          <CongratulationComponent setIsStarted={setIsStarted}/>
        }
      </div>
      <div className={styles.buttonsContainer}>
        <Button name="I know it!" handler={knowCardActionHandler} />
        <Button name="I don`t know it." handler={nextCardHandler} style={{ backgroundColor: "red" }} />
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