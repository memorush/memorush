import styles from './button.module.css';

const ButtonAtomicComponent = ({ name, style, color, handler, children }) => {
  return (
    <div data-testid="button-atomic-component"
      className={styles.container}
      style={{ background: color, ...style }}
      onClick={handler}
    ><p>{name}</p>
    </div>
  )
}

export default ButtonAtomicComponent;
