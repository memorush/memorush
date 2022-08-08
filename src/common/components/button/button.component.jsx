import styles from './button.module.css';

const Button = ({ name, style, color, handler, children }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style, backgroundColor: color }}
      onClick={handler}
    ><p>{name}</p>
    </div>
  )
}

export default Button;