import cn from 'classnames';
import { useState, useRef } from 'react';
import { ReactComponent as SpeakSvg } from './svg/speak-svgrepo-com.svg';
import textToSound from '../../../../../../../service/textToSoundService';
import styles from './card-item.module.css';

const TURN_CARD_TIMEOUT = 300;

const CardItemComponent = ({ card }) => {

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

  //TODO Улучшить этот метод, чтобы озвучивались обе стороны!
  const soundCardFrontSideHandler = (e) => {
    e.stopPropagation();
    textToSound(isFrontSide ? card?.frontSide : card?.backSide);
  }

  return (
    <div
      className={cn(styles.container)}
      onClick={switchCardSideHandler}
      ref={cardRef}
    >
      <div className={styles.cardItem}>
        <h1>{isFrontSide ? card?.frontSide : card?.backSide}</h1>
      </div>
      <div className={styles.svgContainer}>
        <SpeakSvg onClickCapture={soundCardFrontSideHandler} />
      </div>
    </div>
  )
}

export default CardItemComponent;
