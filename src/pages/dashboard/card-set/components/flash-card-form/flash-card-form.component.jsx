import { useRef } from 'react';
import styles from './flash-card-form.module.css';
import FlashCardComponent from './components/flash-card/flash-card.component';

const FlashCardFormComponent = ({cardSetEntity, setCardSetEntity}) => {

  const flashCardListContainerRef = useRef();

  const deleteCardElementHandler = (id) => {
    delete cardSetEntity.flashCardArray[id];

    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Создать карточки</h1>
      </div>
      <div className={styles.flashCardListContainer} ref={flashCardListContainerRef}>
        {Object.keys(cardSetEntity.flashCardArray).map(id => (
          <FlashCardComponent
            id={id}
            key={id}
            cardSetEntity={cardSetEntity}
            setCardSetEntity={setCardSetEntity}
            deleteCardElementHandler={deleteCardElementHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default FlashCardFormComponent;