import styles from './card.module.css';
import cn from 'classname';
import { useState } from 'react';
import Button from '../../../../common/atomic-components/button/button.component';

const Card = ({ frontSide, backSide, learned, favorite }) => {

  const [isFrontSide, setIsFrontSide] = useState(true);

  const turnAroundCard = () => {
    setIsFrontSide(!isFrontSide);
  }

  return (
    <div
      onClick={turnAroundCard}
      className={cn(styles.container, learned ? styles.textThrough : '')}
    >
      {learned ? <div className={styles.learned}>Выучено!</div> : ''}
      <div className={cn(styles.title)}>
        {isFrontSide ? frontSide : backSide}
      </div>
      <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet quibusdam praesentium nam adipisci totam!</div>
      <div className={styles.iconContainer}>
        <div className={cn(favorite ? styles.isActive : '')}><i className="fas fa-star"></i></div>
        <div className={cn(favorite ? styles.isActive : '')}><i className="fas fa-heart"></i></div>
      </div>
      <Button name={"Edit"} />
    </div>
  )
}

export default Card;
