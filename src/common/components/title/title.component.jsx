import styles from './title.module.css';

const Title = ({ name, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
    >
      <h2>{name}</h2>
    </div>
  )
}

export default Title;