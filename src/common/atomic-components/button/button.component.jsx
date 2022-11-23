import styles from './button.module.css';

const Button = ({ name, style, color, handler, children }) => {
  return (
    <div data-testid="button-atomic-component"
      className={styles.container}
      style={{ backgroundColor: color, ...style }}
      onClick={handler}
    ><p>{name}</p>
    </div>
  )
}

export default Button;