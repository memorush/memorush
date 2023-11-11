import { useEffect, useState } from 'react';
import styles from './comment-card.module.scss';
import { fetchFakeUserData } from '../../../../../service/fakeCommentService';

const CommentCardComponent = ({ id, style }) => {

  const [user, setUser] = useState();

  useEffect(() => {
    fetchFakeUserData(id).then(data => setUser(data))
  }, [])

  return (
    <div className={styles.container} style={style}>
      <img className={styles.image} src={user?.photo} alt="" />
      <p>{user?.comment}</p>
      <div className={styles.user}>
        <p className={styles.name}>{user?.username}</p>
        <p className={styles.profession}>{user?.profession}</p>
      </div>
    </div>
  )
}

export default CommentCardComponent;