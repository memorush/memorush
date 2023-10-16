import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  cardSetByIdSelector
} from '../../../redux/features/card-set/card-set.slice';
import styles from './card-set.module.css';
import ActionButtonsComponent from './components/action-buttons/action-buttons.component';
import FlashCardFormComponent from './components/flash-card-form/flash-card-form.component';
import ImportCardDataComponent from './components/import-card-data/import-card-data.component';
import ImageToCardComponent from './components/image-to-card/image-to-card.component';
import CardSetFormComponent from './components/card-set-form/card-set-form.component';

const INIT_CARD_SET_STATE = {
  name: "",
  tags: "",
  categoryName: "",
  description: " ",
  flashCardArray: {
    0: {}
  }
}

const CardSetPage = () => {

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
    <div className={styles.cardSet} data-testId="cardSet">
      <CardSetFormComponent cardSetEntityHandler={cardSetEntityHandler} cardSetEntity={cardSetEntity} />
      <ImportCardDataComponent setCardSetEntity={setCardSetEntity} cardSetEntity={cardSetEntity} />
      <ImageToCardComponent setCardSetEntity={setCardSetEntity} cardSetEntity={cardSetEntity} />
      <FlashCardFormComponent cardSetEntity={cardSetEntity} setCardSetEntity={setCardSetEntity} />
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

export default CardSetPage;
