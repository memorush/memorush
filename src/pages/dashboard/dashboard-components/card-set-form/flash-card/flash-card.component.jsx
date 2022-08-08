import styles from './flash-card.module.css';

const FlashCard = ({ cardSetEntity, setCardSetEntity, deleteCardElementHandler, id }) => {

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
      <div onClick={() => deleteCardElementHandler(id)} className={styles.removeBtn}>
        <i className="fas fa-trash-alt"></i>
      </div>
      <div className={styles.side}>
        <label htmlFor='frontSide'>Front Side</label>
        <textarea
          onChange={(e) => onChangeHandler(e, id)}
          name="frontSide"
          value={cardSetEntity.flashCardArray[id].frontSide}
        ></textarea>
      </div>
      <div className={styles.side}>
        <label htmlFor='backSide'>Back Side</label>
        <textarea
          onChange={(e) => onChangeHandler(e, id)}
          name="backSide"
          value={cardSetEntity.flashCardArray[id].backSide}
        ></textarea>
      </div>
      <div className={styles.side}>
        <label htmlFor='hint'>Hint</label>
        <textarea
          onChange={(e) => onChangeHandler(e, id)}
          name="hint"
          value={cardSetEntity.flashCardArray[id].hint}
        ></textarea>
      </div>
    </div>
  )
}

export default FlashCard;