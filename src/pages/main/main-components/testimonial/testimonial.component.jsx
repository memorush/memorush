import styles from './testimonial.module.css';
import CommentCardComponent from './comment-card/comment-card.component';

const Testimonial = () => {
  return (
    <div id="testimonial" className={styles.container}>
      <div className={styles.header}>
        <h1>Что о нас говорят люди?</h1>
      </div>
      <div className={styles.commentsContainer}>
        <CommentCardComponent id="0" />
        <CommentCardComponent id="1" />
        <CommentCardComponent id="2" />
      </div>
    </div>
  )
}

export default Testimonial;