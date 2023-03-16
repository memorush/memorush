import { useState } from "react";
import { useSelector } from "react-redux";
import styles from './trainer.module.css';
import { useParams } from "react-router-dom";
import CongratulationComponent from "./components/congratulation/congratulation.component";
import CardItemComponent from "../card-list/components/card-item/card-item.component";
import ButtonAtomicComponent from "../../../../../common/atomic-components/button/button.component";
import { flashCardArrayFromCardSetWithIdSelector } from "../../../../../redux/features/card-set/card-set.slice";

const TrainerPage = () => {

  const { cardSetId } = useParams();
  const [currentPosition, setCurrentPosition] = useState(0);
  const flashCardArrayFromCardSetWithId = useSelector(state => flashCardArrayFromCardSetWithIdSelector(state, cardSetId));
  const [cards, setCards] = useState(flashCardArrayFromCardSetWithId);

  // Обнулить все значение!
  const setInitStateHandler = () => {
    setCards(flashCardArrayFromCardSetWithId);
  }

  /**
   * Логика метода, если пользователь знает карточку, то эта карточка вычитается из массива
   * неизученных карточек, тем самым сокращаются размеры массива, пока он не станет равным 0
   */
  const knowCardHandler = () => {
    if (cards.length > 0) {
      setCards((prev) => prev.filter(card => card.id !== cards[currentPosition].id));
    }
    setCurrentPosition(0);
  }

  const dontKnowCardHandler = () => (
    currentPosition < (cards.length - 1) ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0)
  )

  return (
    <div className={styles.container}>
      {cards.length !== 0
        ?
        <CardItemComponent card={cards[currentPosition]} />
        :
        <CongratulationComponent setInitStateHandler={setInitStateHandler} />
      }
      <div className={styles.buttonsContainer}>
        <ButtonAtomicComponent
          name="Знаю это слово!"
          color="#5CB85C"
          clickFunction={knowCardHandler}
        />
        <ButtonAtomicComponent
          name="Не знаю"
          color="#D9534F"
          clickFunction={dontKnowCardHandler}
        />
      </div>
    </div>
  )
}

export default TrainerPage;