import { Slide, Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import styles from './features.module.css';

const features = [
  {
    class: "fas fa-users-cog",
    title: "Совместимость",
    text: "Удобно работать с различными типами смартфонов/ планшетов"
  },
  {
    class: "fas fa-hands-helping",
    title: "Поддержка, обслуживание",
    text: "Регулярные обновления и обратная связь"
  },
  {
    class: "fas fa-mobile-alt",
    title: "Адаптивность",
    text: "Размеры приложение адаптируется под ваше персональное устойство"
  },
  {
    class: "fas fa-cloud-upload-alt",
    title: "Облачное хранение данных",
    text: "Все ваши данные хранятся в облаке и вы их никогда не потеряете"
  },
  {
    class: "far fa-smile-wink",
    title: "Интуитивно понятный интерфейс",
    text: "Ничего лишнего. Ничто не будет вас отвлекать от учебы!"
  },
]

const FeaturesComponent = () => {

  const showFeaturesEl = () => {
    return features.map(el => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <i className={el.class}></i>
        </div>
        <div className={styles.featureHeader}>
          <p>{el.title}</p>
        </div>
        <div className={styles.featureDescription}>
          <p>{el.text}</p>
        </div>
      </div>
    ))
  }

  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <Fade triggerOnce>
          <TitleAtomicComponent name="Потрясающие особенности приложения" />
          <p>Основные преимущества при использовании данного сервиса</p>
          <div className={styles.line} />
        </Fade>
      </div>
      <div className={styles.features}>
        <Fade cascade={true} triggerOnce>
          {showFeaturesEl()}
        </Fade>
      </div>
    </div>
  )
};

export default FeaturesComponent;
