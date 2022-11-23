import styles from './title.module.css';

const Title = ({ name, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
    >
      <h1>{name}</h1>
    </div>
  )
}

export default Title;