import cn from 'classnames';

import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.upper)}>
        <div className={cn(style.tutotarial)}>
          <ul>
            <li><h3>Discover</h3></li>
            <li>Create Flashcards</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div className={cn(style.hosting)}>
          <ul>
            <li><h3>Company</h3></li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className={cn(style.bottom)}>
        <ul>
          <li>Home</li>
          <li>Feature</li>
          <li>Gallery</li>
        </ul>
        <ul>
          <li>Contacts</li>
          <li>Developer</li>
          <li>Testimonial</li>
        </ul>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Support Policy</li>
        </ul>
        <div className={style.social}>
          <div><i class="fab fa-telegram"></i></div>
          <div><i class="fab fa-vk"></i></div>
          <div><i class="fab fa-instagram"></i></div>
          <div><i class="fab fa-facebook"></i></div>
          <div><i class="fab fa-blogger"></i></div>
        </div>
        <div className={cn(style.time)}>
          <p>© 2021–{new Date().getFullYear()}, MemoRush, official site</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;