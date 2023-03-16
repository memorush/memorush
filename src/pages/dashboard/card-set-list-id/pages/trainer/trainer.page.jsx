import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from './trainer.module.css';
import { useParams } from "react-router-dom";
import CongratulationComponent from "./components/congratulation/congratulation.component";
import CardItemComponent from "../card-list/components/card-item/card-item.component";
import ButtonAtomicComponent from "../../../../../common/atomic-components/button/button.component";
import { flashCardArrayFromCardSetWithIdSelector } from "../../../../../redux/features/card-set/card-set.slice";

const TrainerPage = () => {

  const { cardSetId } = useParams();
  const flashCardArrayFromCardSetWithId = useSelector(state => flashCardArrayFromCardSetWithIdSelector(state, cardSetId));
  const [maxRounds, setMaxRounds] = useState(3);
  const [position, setPosition] = useState(0);

  const initState = {
    init: flashCardArrayFromCardSetWithId,
    learned: [],
    round: 0
  }

  const [cardSet, setCardSet] = useState(initState);

  // Обнулить все значение!
  const setInitStateHandler = () => {
    setCardSet(initState);
  }

  const setMaxRoundsNumber = (e) => {
    // Заглушка/валидатор
    if (e.target.value <= 0) {
      setMaxRounds(1);
    } else {
      setMaxRounds(e.target.value);
    }
  }

  useEffect(() => {
    if (cardSet.init.length === 0) {
      setCardSet({
        ...cardSet,
        init: cardSet.learned,
        learned: [],
        round: cardSet.round + 1
      });
    }
  }, [cardSet])

  /**
   * Логика метода, если пользователь знает карточку, то эта карточка вычитается из массива
   * неизученных карточек, тем самым сокращаются размеры массива, пока он не станет равным 0
   */
  const knowCardHandler = () => {
    setCardSet({
      ...cardSet,
      learned: [cardSet.init[position], ...cardSet.learned],
      init: cardSet.init.filter(card => card.id !== cardSet.init[position].id)
    })
    setPosition(0);
  }

  const dontKnowCardHandler = () => {
    if (position < cardSet.init.length - 1) {
      setPosition((prevPosition) => prevPosition + 1)
    } else {
      setPosition(0);
    }
  }

  const getCurrentCard = () => {
    return cardSet.init[position];
  }

  return (
    <div className={styles.container}>
      <div className={styles.roundsContainer}>
        <label htmlFor="rounds">Укажите количество кругов повторения для закрепления слов</label>
        <input className={styles.roundForm} type="text" name="rounds" placeholder="3" onChange={setMaxRoundsNumber} />
        <p>Текущий круг: </p>
        <span className={styles.currentRound}>{cardSet.round}</span>
      </div>
      {cardSet.round >= maxRounds ? <CongratulationComponent setInitStateHandler={setInitStateHandler} />
        :
        <CardItemComponent card={getCurrentCard()} />
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