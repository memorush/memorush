import styles from './title.module.css';

const TitleAtomicComponent = ({ name, style }) => {
  return (
    <div
      data-testid="title-atomic-component"
      style={{ ...style }}
      className={styles.container}
    >
      <h1 className={styles.textSize}>{name}</h1>
    </div>
  )
}

export default TitleAtomicComponent;
