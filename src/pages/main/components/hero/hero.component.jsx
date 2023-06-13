import Spline from '@splinetool/react-spline';
import styles from './hero.module.css';

const HeroComponent = () => {

  return (
    <div id="hero" className={styles.container}>
      <Spline scene="https://prod.spline.design/Fyi3nNUHeBsQH62V/scene.splinecode" />
    </div>
  )
}

export default HeroComponent;
