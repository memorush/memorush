import styles from './button.module.css';

const Button = ({ name, style, handler, children }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
      onClick={handler}
    >{name}
    </div>
  )
}

export default Button;