import styles from './navigation.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { scrollToElementIdHandler } from '../../../../service/utilsService';

const Navigation = () => {

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

  return (
    <div className={cn(styles.container, isScrolled ? styles.scrolled : null)}>
      <div className={styles.logo}><i class="fas fa-brain"></i> Memorush</div>
      <div className={styles.navItemContainer}>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("hero")}>Домой</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("features")}>Особенности</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("gallery")}>Галерея</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("contacts")}>Обратная связь</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("developer")}>Технологии</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("download")}>Скачать</div>
        <div className={styles.navItem} onClick={() => scrollToElementIdHandler("testimonial")}>Отзывы</div>
      </div>
    </div>
  )
}

export default Navigation;