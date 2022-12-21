import styles from './title.module.css';

const TitleAtomicComponent = ({ name, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
    >
      <h1>{name}</h1>
    </div>
  )
}

export default TitleAtomicComponent;
