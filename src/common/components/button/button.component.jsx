import styles from './button.module.css';

const Button = ({ name, style, handler, children }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
      onClick={handler}
    ><p>{name}</p>
    </div>
  )
}

export default Button;