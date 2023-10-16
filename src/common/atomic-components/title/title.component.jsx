import styles from './title.module.css';

const TitleAtomicComponent = ({ name, style }) => {
  return (
    <div
      data-testid="title-atomic-component"
      style={{ ...style }}
      className={styles.title}
    >
      <h1 className={styles.title__name}>{name}</h1>
    </div>
  )
}

export default TitleAtomicComponent;
