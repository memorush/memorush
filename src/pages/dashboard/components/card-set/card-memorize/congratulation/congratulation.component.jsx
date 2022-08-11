import styles from './congratulation.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../../common/atomic-components/button/button.component';
import congratulationImg from "./images/congratulation.gif";

const CongratulationComponent = ({ setInitStateHandler }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.congratulationContainer}>
      <div className={styles.congratulationActions}>
        <h1>Congratulation! You learned all words!</h1>
        <Button
          name="Repeat Again"
          color="#00FFA9"
          handler={setInitStateHandler}
        />
        <Button
          name="Go to main card list"
          handler={() => navigate(`/dashboard/card-set-list`)}
        />
      </div>
      <img className={styles.congratulationImg} src={congratulationImg} alt="" srcset="" />
    </div>
  )
}

export default CongratulationComponent;
