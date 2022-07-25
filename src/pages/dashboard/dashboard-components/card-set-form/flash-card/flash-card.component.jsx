import styles from './flash-card.module.css';

const FlashCard = ({ cardSetEntity, setCardSetEntity, id }) => {

  const onChangeHandler = (e, id) => {
    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray,
        [id]: {
          ...cardSetEntity.flashCardArray[id],
          [e.target.name]: e.target.value
        }
      }
    })
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