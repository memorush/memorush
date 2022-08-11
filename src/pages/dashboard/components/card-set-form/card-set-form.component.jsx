import styles from './card-set-from.module.css';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewCardSet,
  cardSetByIdSelector,
  deleteCardSet,
  updateCardSet
} from '../../../../redux/features/card/cardSlice';
import FlashCard from './flash-card/flash-card.component';
import Button from '../../../../common/atomic-components/button/button.component';
import { useSearchParams } from 'react-router-dom';

const INIT_CARD_SET_STATE = {
  title: "",
  tags: "",
  description: "",
  flashCardArray: {
    0: {}
  }
}

const CardSetForm = () => {

  const dispatch = useDispatch();
  const flashCardContainerRef = useRef();

  // Search params fields
  const [searchParams] = useSearchParams();
  const cardSetId = searchParams.get('id');
  // Init state for card set
  const [cardSetEntity, setCardSetEntity] = useState(INIT_CARD_SET_STATE);

  // Get data for card set with id = ...
  const cardSetById = useSelector(state => cardSetByIdSelector(state, cardSetId));

  useEffect(() => {
    if (cardSetId != null && cardSetById != null) {
      setCardSetEntity({
        title: cardSetById.name,
        tags: cardSetById.tags,
        description: cardSetById.description,
        flashCardArray: { ...cardSetById.flashCardArray }
      })
    }
  }, [])

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

  const deleteCardElementHandler = (id) => {
    delete cardSetEntity.flashCardArray[id];

    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray
      }
    })
  }

  const showActionButtonElements = () => (
    <div className={styles.buttons}>
      {cardSetId ?
        <>
          <Button
            name="Update Set"
            color="#5CB85C"
            handler={() => dispatch(updateCardSet({ cardSetId, cardSetEntity }))}
          />
          <Button
            name="Delete Set"
            color="#D9534F"
            handler={() => dispatch(deleteCardSet(cardSetId))}
          />
        </>
        :
        <Button
          name="Create Set"
          color="#5EBA7D"
          handler={() => dispatch(createNewCardSet(cardSetEntity))}
        />
      }
      <Button
        handler={addFlashCardElement}
        name="Add a new card" />
      <Button
        name="Cancel"
        style={{ color: "black" }}
        color="#E4E8E9"
        handler={() => setCardSetEntity(INIT_CARD_SET_STATE)}
      />
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.set}>
        <div className={styles.setColumn}>
          <h1>Create a New flashCard Set</h1>
          <label htmlFor='title'>Title</label>
          <input
            type="text"
            name="title"
            onChange={cardSetEntityHandler}
            value={cardSetEntity.title}
          />
          <label htmlFor='tags'>Tags(OPTIONAL, COMMA SEPARATED)</label>
          <input
            type="text"
            name="tags"
            onChange={cardSetEntityHandler}
            value={cardSetEntity.tags}
          />
        </div>
        <div className={styles.setColumn}>
          <label htmlFor='description'>Description</label>
          <textarea
            name="description"
            onChange={cardSetEntityHandler}
            value={cardSetEntity.description}
          >
          </textarea>
        </div>
      </div>
      <div className={styles.flashCards}>
        <h1>Create flashCards</h1>
        <div className={styles.flashCardContainer} ref={flashCardContainerRef}>
          {Object.keys(cardSetEntity.flashCardArray).map(id => (
            <FlashCard
              id={id}
              key={id}
              cardSetEntity={cardSetEntity}
              setCardSetEntity={setCardSetEntity}
              deleteCardElementHandler={deleteCardElementHandler}
            />
          ))}
        </div>
      </div>
      {showActionButtonElements()}
    </div>
  )
}

export default CardSetForm;
