import styles from './button.module.css';

const Button = ({ name, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
    >{name}
    </div>
  )
}

export default Button;