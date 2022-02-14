import style from './features.module.css';
import Title from '../../common/title/title.component';
import SubTitle from '../../common/subTitle/subTitle.component';
import Hr from '../../common/hr/hr.component';
import browser from '../../../images/features/browser.png';
import sunc from '../../../images/features/sunc.png';
import notes from '../../../images/features/notes.png';

export default function Features() {
  return (
    <div className={style.container}>
      <Title name={"Features"} />
      <SubTitle name={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam"} />
      <div className={style.info}>
        <div className={style.featuresBox}>
          <img src={sunc} alt="" />
          <h1>Data Sync</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
        </div>
        <div className={style.featuresBox}>
          <img src={browser} alt="" srcset="" />
          <h1>Browser Compatibility</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
        </div>
        <div className={style.featuresBox}>
          <img src={notes} alt="" />
          <h1>Gather Your Cards</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem quis totam accusantium obcaecati minus dicta, aperiam dolor eveniet! Nesciunt, temporibus. Et ad asperiores, illo autem consectetur inventore perferendis eveniet?</p>
        </div>
      </div>
    </div>
  )
}