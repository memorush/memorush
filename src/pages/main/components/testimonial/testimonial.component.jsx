import styles from './testimonial.module.scss';
import CommentCardComponent from './comment-card/comment-card.component';
import { Fade } from "react-awesome-reveal";

const TestimonialComponent = () => {
  return (
    <div id="testimonial" className={styles.container}>
      <Fade cascade={true} bottom triggerOnce={true}>
        <div className={styles.header}>
          <h1>Что о нас говорят люди?</h1>
        </div>
        <div className={styles.commentsContainer}>
          <CommentCardComponent id="0" />
          <CommentCardComponent id="1" />
          <CommentCardComponent id="2" />
        </div>
      </Fade>
    </div>
  )
}

export default TestimonialComponent;
