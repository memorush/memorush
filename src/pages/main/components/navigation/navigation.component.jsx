import styles from './navigation.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { scrollToElementIdHandler } from '../../../../service/utilsService';

const NavigationComponent = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = function () {
    onScrollDocumentHandler()
  };

  const onScrollDocumentHandler = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const showLinksItems = () => {
    const values = [
      ["hero", "Домой"],
      ["features", "Особенности"],
      ["explanation", "Почему это приложение?"],
      ["contacts", "Обратная связь"],
      ["download", "Скачать"]
    ]
    return values.map(element => (
      <div className={styles.links__item} onClick={() => scrollToElementIdHandler(element[0])}>{element[1]}</div>
    ))
  }

  return (
    <div className={cn(styles.navigation, isScrolled ? styles.scrolled : null)} data-testId="navigation">
      <div className={styles.logo}><i className="fas fa-brain"></i> Memorush</div>
      <div className={styles.links}>
        {showLinksItems()}
      </div>
    </div>
  )
}

export default NavigationComponent;
