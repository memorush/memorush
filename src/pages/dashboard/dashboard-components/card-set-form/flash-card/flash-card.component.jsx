import styles from './flash-card.module.css';
import { useState } from 'react';

const FlashCard = ({ handler, id }) => {

  const [data, setData] = useState({});

  const onChangeHandler = (e, id) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    }
    )
    handler({
      id: id,
      data: data
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <label htmlFor='frontSide'>Front Side</label>
        <textarea onChange={(e) => onChangeHandler(e, id)} placeholder="Front Side" name="frontSide"></textarea>
      </div>
      <div className={styles.side}>
        <label htmlFor='backSide'>Back Side</label>
        <textarea onChange={(e) => onChangeHandler(e, id)} placeholder="Back Side" name="backSide"></textarea>
      </div>
      <div className={styles.side}>
        <label htmlFor='hint'>Hint</label>
        <textarea onChange={(e) => onChangeHandler(e, id)} placeholder="Hint" name="hint"></textarea>
      </div>
    </div>
  )
}

export default FlashCard;