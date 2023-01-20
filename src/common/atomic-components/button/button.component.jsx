import styles from './button.module.css';

/**
 * Button atomic component
 * handler - this arg applies more than one functions, for example: onPress, onChange and etc
 * @returns 
 */
const ButtonAtomicComponent = ({ name, style, color, clickFunction }) => {
  return (
    <div data-testid="button-atomic-component"
      className={styles.container}
      style={{ background: color, ...style }}
      onClick={clickFunction}
    ><p>{name}</p>
    </div>
  )
}

export default ButtonAtomicComponent;
