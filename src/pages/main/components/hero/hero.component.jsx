import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import styles from './hero.module.css';
import { useState, useEffect } from 'react';
import repeatImage from "./images/hardik-sharma-CrPAvN29Nhs-unsplash.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

import cn from 'classnames';

const HeroComponent = () => {

  const [heroText, setHeroText] = useState(" ");
  const text = "...cкачайте приложение или воспользуйтесь веб версией!";
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (idx === text.length) {
        setIdx(0);
        setHeroText(" ");
      } else {
        setIdx(prev => prev + 1);
        setHeroText((prev) => prev + text.charAt(idx));
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [heroText]);

  return (
    <div id="hero" className={styles.container}>
      <div className={cn(styles.column, styles.left)}>
        <Slide direction='left'>
          <h1>Учитесь просто, быстро и эффективно вместе с </h1>
        </Slide>
        <Fade direction='up' delay={2000}>
          <h1 className={styles.logo}>Memo<span className={styles.r}>R</span>ush</h1>
        </Fade>
        <h3>{heroText}</h3>
      </div>
      <div className={cn(styles.column, styles.right)}
        style={{ backgroundImage: `url(${repeatImage})` }}>
      </div>
    </div>
  )
}

export default HeroComponent;
