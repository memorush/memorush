import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.logo}>Flashcards</div>
      <div className={style.nav}><i className="fas fa-bars"></i></div>
    </div>
  )
}