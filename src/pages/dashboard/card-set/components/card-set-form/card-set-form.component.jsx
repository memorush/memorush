import { ReactComponent as PenSvg } from './svg/pen-svgrepo-com.svg';
import styles from "./card-set-form.module.css";

const CardSetFormComponent = ({cardSetEntityHandler, cardSetEntity}) => {
  return (
    <div className={styles.cardSetFormContainer}>
        <div className={styles.cardSetFormTitle}>
          <div className={styles.svgContainer}>
            <PenSvg />
          </div>
          <h1>Создать новый набор карточек</h1>
        </div>
        <div className={styles.cardSetFormColumns}>
          <div className={styles.cardSetFormColumnsRight}>
            <div className={styles.form}></div>
            <label htmlFor='title'>Название</label>
            <input
              type="text"
              name="name"
              placeholder="Придумайте название набора"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.name}
            />
            <label htmlFor='category'>Категория</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Введите название категории"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.categoryName}
            />
            <label htmlFor='tags'>Ключевые слова(Опционально) через запятую</label>
            <input
              type="text"
              name="tags"
              placeholder="медицина, хирургия, pill, срочно, время"
              onChange={cardSetEntityHandler}
              value={cardSetEntity.tags}
            />
          </div>
          <div className={styles.cardSetFormColumnsLeft}>
            <label htmlFor='description'>Описание</label>
            <textarea
              name="description"
              onChange={cardSetEntityHandler}
              placeholder="Добавьте краткое описание"
              value={cardSetEntity.description}
            >
            </textarea>
          </div>
        </div>
      </div>
  )
}

export default CardSetFormComponent;