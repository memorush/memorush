import styles from './hero.module.css';
import MobileApp3dComponent from '../../../../common/components/mobile-app3d/mobile-app3d.component';

const HeroComponent = () => {

  return (
    <div id="hero" className={styles.container}>
      <MobileApp3dComponent/>
    </div>
  )
}

export default HeroComponent;
