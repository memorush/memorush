import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import {
  createNewCardSet,
  deleteCardSet,
  updateCardSet
} from '../../../../../redux/features/card/cardSlice';
import styles from './action-buttons.module.css';

const ActionButtonsComponent = (
  {
    cardSetId,
    cardSetEntity,
    setCardSetEntity,
    addFlashCardElement,
    INIT_CARD_SET_STATE
  }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
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
}

export default ActionButtonsComponent;