import styles from './button.module.css';

/**
 * Button atomic component
 * handler - this arg applies more than one functions, for example: onPress, onChange and etc
 * @returns 
 */
const ButtonAtomicComponent = ({ name, style, color, clickFunction, disable = false }) => {

  return (
    <div data-testid="button-atomic-component"
      className={styles.button}
      style={disable ? { background: 'silver' } : { background: color, ...style }}
      onClick={disable ? null : clickFunction}
    ><p className={styles.button__name}>{name}</p>
    </div>
  )
}

export default ButtonAtomicComponent;
