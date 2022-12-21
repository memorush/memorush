import styles from './card-set-from.module.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewCardSet,
  cardSetByIdSelector,
  deleteCardSet,
  updateCardSet
} from '../../../redux/features/card/cardSlice';
import FlashCardComponent from './components/flash-card/flash-card.component';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as PenSvg } from './svg/pen-svgrepo-com.svg';

const INIT_CARD_SET_STATE = {
  name: "",
  tags: "",
  description: "",
  flashCardArray: {
    0: {}
  }
}

//TODO Упростить компонент, разбить на составляющие!
const CardSetFormPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        name: cardSetById.name,
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
    <div className={styles.actionsContainer}>
      <div className={styles.actionsTitle}>
        <h1>Закончить и создать набор</h1>
      </div>
      <div className={styles.actionsButtons}>
        {cardSetId ?
          <>
            <ButtonAtomicComponent
              name="Обновить набор"
              color="#5CB85C"
              handler={() => dispatch(updateCardSet({ cardSetId, cardSetEntity }))}
            />
            <ButtonAtomicComponent
              name="Удалить набор"
              color="#D9534F"
              handler={() => dispatch(deleteCardSet(cardSetId))}
            />
          </>
          :
          <ButtonAtomicComponent
            name="Создать набор"
            color="#5EBA7D"
            handler={() => dispatch(createNewCardSet(cardSetEntity))}
          />
        }
        <ButtonAtomicComponent
          handler={addFlashCardElement}
          color="orange"
          name="Добавить карточку" />
        <ButtonAtomicComponent
          name="Отмена"
          style={{ color: "black" }}
          color="#E4E8E9"
          handler={() => setCardSetEntity(INIT_CARD_SET_STATE)}
        />
        <ButtonAtomicComponent
          name="Главное меню"
          handler={() => navigate(`/dashboard/card-set-list`)}
        />
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.cardSetFormContainer}>
        <div className={styles.cardSetFormTitle}>
          <div className={styles.svgContainer}>
            <PenSvg />
          </div>
          <h1>Создать новый набор карточек</h1>
        </div>
        <div className={styles.cardSetFormColumns}>
          <div className={styles.cardSetFormColumnsRight}>
            <div className={styles.form}></div>
            <label htmlFor='title'>Название</label>
            <input
              type="text"
              name="name"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.name}
            />
            <label htmlFor='tags'>Ключевые слова(Опционально)</label>
            <input
              type="text"
              name="tags"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.tags}
            />
          </div>
          <div className={styles.cardSetFormColumnsLeft}>
            <label htmlFor='description'>Описание</label>
            <textarea
              name="description"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.description}
            >
            </textarea>
          </div>
        </div>
      </div>
      <div className={styles.importCardsDataContainer}>
        <div className={styles.importCardsDataTitle}>
          <h1>Импортироть набор карточек как json</h1>
        </div>
        <div className={styles.importCardsDataForm}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minima nulla porro est quo consequatur dicta, quis maiores eligendi atque?</p>
          <input type="file" />
          <button>Import</button>
        </div>
      </div>
      <div className={styles.newFlashCardContainer}>
        <div className={styles.newFlashCardTitle}>
          <h1>Создать карточки</h1>
        </div>
        <div className={styles.newFlashCardListContainer} ref={flashCardContainerRef}>
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
      {showActionButtonElements()}
    </div>
  )
}

export default CardSetFormPage;
