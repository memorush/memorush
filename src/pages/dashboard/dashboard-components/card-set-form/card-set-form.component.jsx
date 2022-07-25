import styles from './card-set-from.module.css';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewCardSet,
  cardByIdSelector
} from '../../../../redux/features/card/cardSlice';
import FlashCard from './flash-card/flash-card.component';
import Button from '../../../../common/components/button/button.component';
import { useSearchParams } from 'react-router-dom';

const INIT_CARD_SET_STATE = {
  title: "",
  tags: "",
  description: "",
  flashCardArray: {}
}

const CardSetForm = () => {

  const dispatch = useDispatch();
  const flashCardContainerRef = useRef();

  const [searchParams] = useSearchParams();
  const cardSetId = searchParams.get('id');
  const cardSetById = useSelector(state => cardByIdSelector(state, cardSetId));

  const [cardSetEntity, setCardSetEntity] = useState(INIT_CARD_SET_STATE);

  const cardSetEntityHandler = (e) => {
    setCardSetEntity({
      ...cardSetEntity,
      [e.target.name]: e.target.value
    })
  };

  const addFlashCardElement = () => {
    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray,
        [Object.keys(cardSetEntity.flashCardArray).length]: {}
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.set}>
        <div className={styles.setColumn}>
          <h1>Create a New flashCard Set</h1>
          <label htmlFor='title'>Title</label>
          <input
            type="text"
            name="title"
            onChange={cardSetEntityHandler} value={cardSetEntity.title} />
          <label htmlFor='tags'>Tags(OPTIONAL, COMMA SEPARATED)</label>
          <input
            type="text"
            name="tags"
            onChange={cardSetEntityHandler} />
        </div>
        <div className={styles.setColumn}>
          <label htmlFor='description'>Description</label>
          <textarea
            placeholder="description"
            name="description"
            onChange={cardSetEntityHandler}></textarea>
        </div>
      </div>
      <div className={styles.flashCards}>
        <h1>Create flashCards</h1>
        <Button handler={addFlashCardElement} name="Add a new card" />
        <div className={styles.flashCardContainer} ref={flashCardContainerRef}>
          {Object.keys(cardSetEntity.flashCardArray).map(id => (
            <FlashCard
              id={id}
              key={id}
              cardSetEntity={cardSetEntity}
              setCardSetEntity={setCardSetEntity}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button name="Create Set" handler={() => dispatch(createNewCardSet(cardSetEntity))} />
        <Button name="Cancel" handler={() => setCardSetEntity(INIT_CARD_SET_STATE)} />
      </div>
    </div>
  )
}

export default CardSetForm;
