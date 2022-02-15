import cn from 'classname';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cardEntityByFavoriteAndLearnedSelector, getCards
} from '../../../redux/features/card/cardSlice';
import Card from '../card/card.component';
import styles from './study.module.css';

const Study = () => {

  const dispatch = useDispatch();
  const [cardIndex, setCardIndex] = useState(0);
  const [filter, setFilter] = useState({
    favorite: false,
    learned: false
  });
  const filteredCardEntity = useSelector(
    (state) => cardEntityByFavoriteAndLearnedSelector(state, filter.favorite, filter.learned)
  );

  useEffect(() => {
    dispatch(getCards());
  }, []);

  const changeCardHandler = (direction) => {
    switch (direction) {
      case 'next': {
        if (cardIndex === filteredCardEntity.length - 1) {
          setCardIndex(0);
          break;
        }
        setCardIndex(cardIndex + 1);
        break;
      }
      case 'previous': {
        if (cardIndex === 0) {
          setCardIndex(filteredCardEntity.length - 1)
          break;
        }
        setCardIndex(cardIndex - 1);
        break;
      }
      default: {
        return cardIndex;
      }
    }
  }

  const filterCardHandler = (event) => {
    const { checked, name } = event.target;
    setFilter({
      ...filter,
      [name]: checked
    })
  }

  return (
    <div className={styles.container}>
      {console.log(filteredCardEntity)}
      <div className={styles.settings}>
        <p>Choose your monster's features:</p>
        <div className={styles.checkbox}>
          <input type="checkbox" id="favorite" name="favorite" onChange={filterCardHandler} />
          <label for="favorite">Favorite</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="learned" name="learned" onChange={filterCardHandler} />
          <label for="learned">Learned</label>
        </div>
      </div>
      <div className={styles.cardIndex}>
        <p>Card: {cardIndex}</p>
      </div>
      <div className={styles.cardContainer}>
        <i class={cn("fas fa-angle-double-left", styles.arrow)} onClick={() => changeCardHandler('previous')}></i>
        <Card {...filteredCardEntity[cardIndex]} />
        <i class={cn("fas fa-angle-double-right", styles.arrow)} onClick={() => changeCardHandler('next')} />
      </div>
    </div>
  )
}

export default Study;