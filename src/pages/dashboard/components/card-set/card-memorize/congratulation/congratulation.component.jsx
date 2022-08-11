import styles from './congratulation.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../../common/atomic-components/button/button.component';
import congratulationImg from "./images/congratulation.gif";

const CongratulationComponent = ({ setInitStateHandler }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.congratulationContainer}>
      <div className={styles.congratulationActions}>
        <h1>Поздравляю! Вы выучили все слова!</h1>
        <Button
          name="Повторить"
          color="#00FFA9"
          handler={setInitStateHandler}
        />
        <Button
          name="Перейти в главное меню"
          handler={() => navigate(`/dashboard/card-set-list`)}
        />
      </div>
      <img className={styles.congratulationImg} src={congratulationImg} alt="" srcset="" />
    </div>
  )
}

export default CongratulationComponent;
