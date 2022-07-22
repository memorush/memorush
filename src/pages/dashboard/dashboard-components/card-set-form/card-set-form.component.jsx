import styles from './card-set-from.module.css';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCardSet } from '../../../../redux/features/card/cardSlice';
import FlashCard from './flash-card/flash-card.component';
import Button from '../../../../common/components/button/button.component';

const initCardSetEntity = {
    flashCardsData: []
  }

//TODO Упростить логику и поправить баг при заполнении полей!
const CardSetForm = () => {

  const dispatch = useDispatch();
  const flashCardContainerRef = useRef();


  // Data for card set: {title: "Name of set", flashCardData: [{frontSide: "...", backSide: "..."}, {frontSide...: "..."}}]}
  const [cardSetEntity, setCardSetEntity] = useState(initCardSetEntity);
  // Data from each Flash Card = {id: data} => {1: {frontSide: "...", backSide: "..."}}
  const [flashCardData, setFlashCardData] = useState({});
  // Array of view component
  const [flashCardElementArray, setFlashCardElementArray] = useState([
    <FlashCard
      key={0}
      id={0}
      handler={flashCardDataHandler} />
  ]);

  function flashCardDataHandler(object) {
    setFlashCardData({
      ...flashCardData,
      [object.id]: object.data
    })
  }

  const cardSetEntityHandler = (e) => {
    setCardSetEntity({
      ...cardSetEntity,
      [e.target.name]: e.target.value,
      flashCardsData: Object.values(flashCardData)
    })
  };

  // This method adds new FlashCard component to DOM
  const addNewFlashCardElement = () => {
    setFlashCardElementArray([
      ...flashCardElementArray,
      <FlashCard
        key={flashCardElementArray.length}
        id={flashCardElementArray.length}
        handler={flashCardDataHandler} />
    ]
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.set}>
        <div className={styles.setColumn}>
          <h1>Create a New flashCard Set</h1>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title" onChange={cardSetEntityHandler} />

          <label htmlFor='tags'>Tags(OPTIONAL, COMMA SEPARATED)</label>
          <input type="text" name="tags" onChange={cardSetEntityHandler} />
        </div>
        <div className={styles.setColumn}>
          <label htmlFor='description'>Description</label>
          <textarea placeholder="description" name="description" onChange={cardSetEntityHandler}></textarea>
        </div>
      </div>
      <div className={styles.flashCards}>
        <h1>Create flashCards</h1>
        <Button handler={addNewFlashCardElement} name="Add a new card" />
        <div className={styles.flashCardContainer} ref={flashCardContainerRef}>
          {flashCardElementArray.map(el => el)}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button name="Create Set" handler={() => dispatch(createNewCardSet(cardSetEntity))} />
        <Button name="Cancel" handler={() => setCardSetEntity(initCardSetEntity)}/>
      </div>
    </div>
  )
}

export default CardSetForm;
