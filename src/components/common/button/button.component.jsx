import styles from './button.module.css';

const Button = ({ name, style, handler, children }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style }}
      onClick={handler}
    ><h4>{name}</h4>
    </div>
  )
}

export default Button;