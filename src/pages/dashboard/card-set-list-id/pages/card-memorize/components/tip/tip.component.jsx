import styles from './tip.module.css';
import ButtonAtomicComponent from '../../../../../../../common/atomic-components/button/button.component';

const TipComponent = ({ setIsStarted }) => {

  const beginToLearnHandler = () => (
    setIsStarted(true)
  )

  return (
    <div className={styles.container}>
      <h1>Как это работает?</h1>
      <ul>
        <li>Посмотрите на карточку, если вы знаете перевод, нажмите на кнопку "Я знаю ответ", в противном случае "Не знаю"</li>
        <li>Вы можете увидеть обратную сторону каждой карточки просто нажав на нее</li>
        <li>Когда вы выучите все карточки вам будет предложено перейти в главное меню или начать заново</li>
        <li>Советуем вам переодически повторять изученные слова</li>
      </ul>
      <ButtonAtomicComponent
        name="Учить слова"
        clickFunction={beginToLearnHandler}
      />
    </div>
  )
}

export default TipComponent;
