import cn from 'classnames';

import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.upper)}>
        <div className={cn(style.tutotarial)}>
          <ul>
            <li><h3>Начать</h3></li>
            <li>Давайте приступим</li>
            <li>Мобильное приложение</li>
          </ul>
        </div>
        <div className={cn(style.hosting)}>
          <ul>
            <li><h3>О проекте</h3></li>
            <li>О создателе</li>
            <li>FAQ</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>
      <div className={cn(style.bottom)}>
        <ul>
          <li>Домой</li>
          <li>Особенности</li>
          <li>Галерея</li>
        </ul>
        <ul>
          <li>Контакты</li>
          <li>О разработке</li>
          <li>Отзывы</li>
        </ul>
        <div className={style.social}>
          <div><i class="fab fa-telegram"></i></div>
          <div><i class="fab fa-vk"></i></div>
          <div><i class="fab fa-instagram"></i></div>
          <div><i class="fab fa-facebook"></i></div>
          <div><i class="fab fa-blogger"></i></div>
        </div>
        <div className={cn(style.time)}>
          <p>© 2021–{new Date().getFullYear()}, MemoRush, официальный сайт</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;