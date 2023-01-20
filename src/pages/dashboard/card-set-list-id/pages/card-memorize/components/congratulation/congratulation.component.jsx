import styles from './congratulation.module.css';
import { useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../../../common/atomic-components/button/button.component';
import congratulationImg from "./images/congratulation.gif";

const CongratulationComponent = ({ setInitStateHandler }) => {

  const navigate = useNavigate();

  const navigateToCardSetListPageHandler = () => (
    navigate(`/dashboard/card-set-list`)
  )

  return (
    <div className={styles.congratulationContainer}>
      <div className={styles.congratulationActions}>
        <h1>Поздравляю! Вы выучили все слова!</h1>
        <ButtonAtomicComponent
          name="Повторить"
          color="#39CA6C"
          clickFunction={setInitStateHandler}
        />
        <ButtonAtomicComponent
          name="Перейти в главное меню"
          clickFunction={navigateToCardSetListPageHandler}
        />
      </div>
      <img className={styles.congratulationImg} src={congratulationImg} alt="" />
    </div>
  )
}

export default CongratulationComponent;
