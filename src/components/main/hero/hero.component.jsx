import style from './hero.module.css';
import Roll from 'react-reveal/Roll';

export default function Hero() {
  return (
    <div className={style.container}>
      <Roll left>
        <div className={style.info}>
          <h1>It's Amazing</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className={style.buttonContainer}>
            <div className={style.button}>
              <p><i className="fab fa-android"></i>Play Store</p>
            </div>
            <div className={style.button}>
              <p><i class="fab fa-apple"></i>App Store</p>
            </div>
          </div>
        </div>
      </Roll>
      <div className={style.hand}>
        <img src="https://technext.github.io/polo/HTML/assets/img/iphone_hand.png" alt="" srcset="" />
      </div>
    </div>
  )
}