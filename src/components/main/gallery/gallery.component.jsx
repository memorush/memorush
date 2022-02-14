import styles from './gallery.module.css';
import Title from '../../common/title/title.component';
import SubTitle from '../../common/subTitle/subTitle.component';
import Hr from '../../common/hr/hr.component';
import slide1 from '../../../images/galery/slide1.png';

export default function Gallery() {

  return (
    <div className={styles.container}>
      <Title name={"FalshCards for everyone"} />
      <SubTitle name={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, iusto?"} />
      <div className={styles.imageContainer}>
        <img src={slide1} alt="" srcset="" />
      </div>
      <Hr />
    </div>
  )
}