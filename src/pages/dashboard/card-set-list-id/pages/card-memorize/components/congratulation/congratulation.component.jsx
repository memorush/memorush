import styles from './congratulation.module.css';
import { useNavigate } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../../../common/atomic-components/button/button.component';
import congratulationImg from "./images/congratulation.gif";

const CongratulationComponent = ({ setInitStateHandler }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.congratulationContainer}>
      <div className={styles.congratulationActions}>
        <h1>Поздравляю! Вы выучили все слова!</h1>
        <ButtonAtomicComponent
          name="Повторить"
          color="#39CA6C"
          handler={setInitStateHandler}
        />
        <ButtonAtomicComponent
          name="Перейти в главное меню"
          handler={() => navigate(`/dashboard/card-set-list`)}
        />
      </div>
      <img className={styles.congratulationImg} src={congratulationImg} alt=""/>
    </div>
  )
}

export default CongratulationComponent;
