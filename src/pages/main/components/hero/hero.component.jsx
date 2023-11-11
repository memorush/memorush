import styles from './hero.module.scss';
import MobileApp3dComponent from '../../../../common/components/mobile-app3d/mobile-app3d.component';

const HeroComponent = () => {

  return (
    <div id="hero" className={styles.hero} data-testid="hero">
      <MobileApp3dComponent/>
    </div>
  )
}

export default HeroComponent;
