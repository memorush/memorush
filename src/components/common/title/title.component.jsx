import styles from './title.module.css';

const Title = ({ name, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
    >{name}
    </div>
  )
}

export default Title;