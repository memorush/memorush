import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import styles from './import-card-data.module.css';

const ImportCardDataComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Импортироть набор карточек как json</h1>
      </div>
      <div className={styles.importCardsDataFormContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minima nulla porro est quo consequatur dicta, quis maiores eligendi atque?</p>
        <input type="file" />
        <ButtonAtomicComponent name="Load" />
      </div>
    </div>
  )
}

export default ImportCardDataComponent;