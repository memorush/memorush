import styles from './tip.module.css';
import ButtonAtomicComponent from '../../../../../../../common/atomic-components/button/button.component';

const TipComponent = ({ setIsStarted }) => {
  return (
    <div className={styles.container}>
      <h1>Как это работает?</h1>
      <ul>
        <li>Look at a card. When you are ready, click the "See Answer" button.</li>
        <li>You can see a backside of each card if click on it</li>
        <li>Click "I know it!" or "I don`t know it".</li>
        <li>When you will learn all cards, you will see congratulation popup</li>
        <li>In the end you can repeat one more time or return to main menu</li>
      </ul>
      <ButtonAtomicComponent name="Начать учить слова" handler={() => setIsStarted(true)} />
    </div>
  )
}

export default TipComponent;
