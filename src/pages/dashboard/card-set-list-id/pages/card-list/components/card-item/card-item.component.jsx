import cn from 'classnames';
import { useState, useRef } from 'react';
import styles from './card-item.module.css';

const TURN_CARD_TIMEOUT = 300;

const CardItem = ({ card }) => {

  const [isFrontSide, setIsFrontSide] = useState(true);
  const cardRef = useRef();

  const switchCardSideHandler = () => {
    setIsFrontSide(!isFrontSide);
    switchCardStyleHandler();
  }

  const switchCardStyleHandler = () => {
    cardRef.current.classList.toggle(styles.turn);
    setTimeout(() => {
      cardRef.current.classList.toggle(styles.turn);
    }, TURN_CARD_TIMEOUT)
  }

  return (
    <div
      ref={cardRef}
      className={cn(styles.container)}
      onClick={switchCardSideHandler}
    >
      <div className={styles.cardItem}>
        <h1>{isFrontSide ? card?.frontSide : card?.backSide}</h1>
      </div>
    </div>
  )
}

export default CardItem;
