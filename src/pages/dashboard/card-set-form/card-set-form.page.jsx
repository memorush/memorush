import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  cardSetByIdSelector
} from '../../../redux/features/card-set/card-set.slice';
import styles from './card-set-from.module.css';
import ActionButtonsComponent from './components/action-buttons/action-buttons.component';
import FlashCardFormComponent from './components/flash-card-form/flash-card-form.component';
import ImportCardDataComponent from './components/import-card-data/import-card-data.component';
import { ReactComponent as PenSvg } from './svg/pen-svgrepo-com.svg';

const INIT_CARD_SET_STATE = {
  name: "",
  tags: "",
  categoryName: "",
  description: "",
  flashCardArray: {
    0: {}
  }
}

//TODO Упростить компонент, разбить на составляющие!
const CardSetFormPage = () => {

  // Search params fields
  const [searchParams] = useSearchParams();
  const cardSetId = searchParams.get('id');
  // Init state for card-set set
  const [cardSetEntity, setCardSetEntity] = useState(INIT_CARD_SET_STATE);

  // Get data for card-set set with id = ...
  const cardSetById = useSelector(state => cardSetByIdSelector(state, cardSetId));

  useEffect(() => {
    if (cardSetId != null && cardSetById != null) {
      setCardSetEntity({
        name: cardSetById.name,
        tags: cardSetById.tags,
        categoryName: cardSetById.categoryName,
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
              placeholder="Придумайте название набора"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.name}
            />
            <label htmlFor='category'>Категория</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Введите название категории"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.categoryName}
            />
            <label htmlFor='tags'>Ключевые слова(Опционально) через запятую</label>
            <input
              type="text"
              name="tags"
              placeholder="медицина, хирургия, pill, срочно, время"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.tags}
            />
          </div>
          <div className={styles.cardSetFormColumnsLeft}>
            <label htmlFor='description'>Описание</label>
            <textarea
              name="description"
              onChange={cardSetEntityHandler}
              placeholder="Добавьте краткое описание"
              value={cardSetEntity.description}
            >
            </textarea>
          </div>
        </div>
      </div>
      <ImportCardDataComponent setCardSetEntity={setCardSetEntity} cardSetEntity={cardSetEntity} />
      <FlashCardFormComponent
        cardSetEntity={cardSetEntity}
        setCardSetEntity={setCardSetEntity}
      />
      <ActionButtonsComponent
        cardSetId={cardSetId}
        cardSetEntity={cardSetEntity}
        setCardSetEntity={setCardSetEntity}
        addFlashCardElement={addFlashCardElement}
        INIT_CARD_SET_STATE={INIT_CARD_SET_STATE}
      />
    </div>
  )
}

export default CardSetFormPage;
