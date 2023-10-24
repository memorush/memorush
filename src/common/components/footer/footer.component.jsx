import { Link } from 'react-router-dom';
import { ReactComponent as CloverSvg } from './svg/clover-svgrepo-com.svg';
import data from "../../../assets/data/data.json";
import styles from './footer.module.css';

const FooterComponent = () => {

  const { vk, telegram, developerPage } = data["social-media-links"];

  return (
    <footer className={styles.footer} data-testid="footer-component">
      <div className={styles.footer__topSide}>
        <div className={styles.svgContainer}>
          <CloverSvg />
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu__title}>Давайте приступим</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}><Link to={"/"} className={styles.topSideMenu__link}>Начать</Link></li>
            <li className={styles.topSideMenu__item}><Link to={"/"} className={styles.topSideMenu__link}>Особенности</Link></li>
            <li className={styles.topSideMenu__item}><Link to={"/"} className={styles.topSideMenu__link}>Галерея</Link></li>
          </ul>
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu}>О приложении</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}><Link to={"/faq"} className={styles.topSideMenu__link}>FAQ</Link></li>
            <li className={styles.topSideMenu__item}><Link to={"/term-of-use"} className={styles.topSideMenu__link}>Пользовательское соглашение</Link></li>
            <li className={styles.topSideMenu__item}><Link to={"/privacy-policy"} className={styles.topSideMenu__link} data-testid="privacy-policy-link">Политика конфиденциальности</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={styles.bottomSideMenu}>
          <h3 className={styles.bottomSideMenu__title}>О приложении</h3>
          <ul className={styles.bottomSideMenu__listContainer}>
            <li className={styles.bottomSideMenu__item}><Link to={"/"} className={styles.bottomSideMenu__link}>Домой</Link></li>
            <li className={styles.bottomSideMenu__item}><Link to={"/"} className={styles.bottomSideMenu__link}>Особенности</Link></li>
            <li className={styles.bottomSideMenu__item}><Link to={"/"} className={styles.bottomSideMenu__link}>Галерея</Link></li>
            <li className={styles.bottomSideMenu__item}><Link to={"/faq"} className={styles.bottomSideMenu__link}>О приложении</Link></li>
          </ul>
        </div>
        <div className={styles.socialMeadiContainer}>
          <a className={styles.socialMeadiContainer__href} href={developerPage} target='_blank' rel='noreferrer'>
            <i className="fab fa-github"></i>
          </a>
          <a className={styles.socialMeadiContainer__href} href={developerPage} target='_blank' rel='noreferrer'>
            <i className="fab fa-internet-explorer"></i>
          </a>
          <a className={styles.socialMeadiContainer__href} href={telegram} target='_blank' rel='noreferrer'>
            <i className="fab fa-telegram"></i>
          </a>
          <a className={styles.socialMeadiContainer__href} href={vk} target='_blank' rel='noreferrer'>
            <i className="fab fa-vk"></i>
          </a>
        </div>
        <div className={styles.copyRightContainer}>
          <p>© 2021–{new Date().getFullYear()}, Memorush, официальный сайт</p>
        </div>
      </div>
    </footer >
  )
}
export default FooterComponent;
