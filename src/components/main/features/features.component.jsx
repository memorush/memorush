import Roll from 'react-reveal/Roll';
import style from './features.module.css';

export default function Features() {
  return (
    <div className={style.container}>
      <Roll left>
        <div className={style.title}>
          <h1>
          <span className={style.bbTopLeft}></span>
          <span className={style.bbTopRight}></span>
          Features
          <span className={style.bbBottomLeft}></span>
          <span className={style.bbBottomRight}></span>
          </h1>
        </div>
      </Roll>
      <Roll right>
        <div className={style.info}>
          <div className={style.featuresBox}>
            <i className="fas fa-sync"></i>
            <h1>Data Sync</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
          </div>
          <div className={style.featuresBox}>
            <i className="fas fa-sync"></i>
            <h1>Data Sync</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
          </div>
          <div className={style.featuresBox}>
            <i className="fas fa-sync"></i>
            <h1>Data Sync</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
          </div>
        </div>
      </Roll>
    </div>
  )
}