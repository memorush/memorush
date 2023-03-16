import styles from './tip.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';

const TipPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // Эта функция читает текущий путь и генерирует новый
  const getTrainerUrlFromLocation = () => (
    location.pathname.replace("tip", "trainer")
  )

  const navigateToTrainer = () => {
    navigate(getTrainerUrlFromLocation());
  }

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
        clickFunction={navigateToTrainer}
      />
    </div>
  )
}

export default TipPage;
