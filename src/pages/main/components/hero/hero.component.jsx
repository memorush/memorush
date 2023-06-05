import { useEffect, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import styles from './hero.module.css';
import repeatImage from "./images/hardik-sharma-CrPAvN29Nhs-unsplash.jpg";

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
        <Fade>
          <h1>Учитесь просто, быстро и эффективно вместе с </h1>
        </Fade>
        <Fade>
          <h1 className={styles.logo}>Memo<span className={styles.r}>R</span>ush</h1>
        </Fade>
        <Slide direction='down'>
          <h2>Интерактивный тренажер для запоминания слов!</h2>
        </Slide>
        <h4 className={styles.heroText}>{heroText}</h4>
      </div>
      <div className={cn(styles.column, styles.right)}
        style={{ backgroundImage: `url(${repeatImage})` }}>
      </div>
    </div>
  )
}

export default HeroComponent;
