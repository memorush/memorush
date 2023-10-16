import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import {
  createNewCardSet,
  deleteCardSet,
  updateCardSet
} from '../../../../../redux/features/card-set/card-set.slice';
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

  const updateCardSetHandler = () => (
    dispatch(updateCardSet({ cardSetId, cardSetEntity }))
  )

  const deleteCardSetHandler = () => (
    dispatch(deleteCardSet(cardSetId))
  )

  const createNewCardSetHandler = () => (
    dispatch(createNewCardSet(cardSetEntity))
  )

  const navigateToCardSetListHandler = () => (
    navigate(`/dashboard/card-set-list`)
  )

  const setInitStateForCardSetEntity = () => (
    setCardSetEntity(INIT_CARD_SET_STATE)
  )

  const showHandlersButtons = (cardSetId) => {
    return cardSetId ? <>
      <ButtonAtomicComponent
        name="Обновить набор"
        color="#5CB85C"
        clickFunction={updateCardSetHandler}
      />
      <ButtonAtomicComponent
        name="Удалить набор"
        color="#D9534F"
        clickFunction={deleteCardSetHandler}
      />
    </>
      :
      <ButtonAtomicComponent
        name="Создать набор"
        color="#5EBA7D"
        clickFunction={createNewCardSetHandler}
      />
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Закончить и создать набор</h1>
      </div>
      <div className={styles.buttonsContainer}>
        {showHandlersButtons(cardSetId)}
        <ButtonAtomicComponent
          name="Добавить карточку"
          color="orange"
          clickFunction={addFlashCardElement}
        />
        <ButtonAtomicComponent
          name="Отмена"
          style={{ color: "black" }}
          color="#E4E8E9"
          clickFunction={setInitStateForCardSetEntity}
        />
        <ButtonAtomicComponent
          name="Главное меню"
          clickFunction={navigateToCardSetListHandler}
        />
      </div>
    </div>
  )
}

export default ActionButtonsComponent;
