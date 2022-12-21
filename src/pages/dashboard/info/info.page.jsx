import styles from './info.module.css';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FindSvg } from './svg/search.svg';
import { ReactComponent as Books } from './svg/books.svg';

const InfoPage = () => {

  const navigate = useNavigate();

  const showCategoriesListElement = () => {
    return (
      <ul>
        <li>Careers</li>
        <li>Computers</li>
        <li>Course Subjects</li>
        <li>Education</li>
        <li>Exam</li>
        <li>Language</li>
        <li>Law Enforcement</li>
        <li>Medical</li>
        <li>Military</li>
        <li>All Subjects All Subjects</li>
      </ul>
    )
  }

  const showFindContainerDivEl = () => (
    <div className={styles.findContainer}>
      <div className={styles.inputContainer}>
        <div className={styles.inputContainerSvg}>
          <FindSvg />
        </div>
        <h1 className={styles.inputContainerTitle}>Find flashcards to study</h1>
        <input className={styles.inputContainerInput} type="text" />
        <div className={styles.inputContainerButton}>
          {/* //TODO Дописать логику */}
          <ButtonAtomicComponent name="Search"
                                 handler={() => navigate("/dashboard/card-set-list")}
          />
        </div>
      </div>
      <div className={styles.separatorContainer}>
        <h1>or</h1>
      </div>
      <div className={styles.createContainer}>
        <div className={styles.createContainerSvg}>
          <Books />
        </div>
        <div className={styles.createContainerButton}>
          <ButtonAtomicComponent name="Create flashcards"
                                 handler={() => navigate("/dashboard/card-set-list")}
          />
        </div>
        <h1 className={styles.createContainerTitle}>Make your own cards</h1>
      </div>
    </div>
  )

  const showStatusContainerDivEl = () => (
    <div className={styles.statusContainer}>
      <div className={styles.usersStatContainer}>
        <div className={styles.usersStatItem}>
          <h3>3,372,913</h3>
          <p>members</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>31,372,913</h3>
          <p>flashcards</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>31,372,913</h3>
          <p>flashcards added this week</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>31,372,913</h3>
          <p>flashcards added this week</p>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.rulesContainer}>
          <div className={styles.categoriesContainer}>
            <h1>Browse By Category</h1>
            {showCategoriesListElement()}
          </div>
          <div className="">
            <h1>The One-Stop Destination for Flashcards and Writing Help</h1>
            <p>Find quality resources to help you understand concepts, learn important information, and turn in well-researched assignments at your fingertips! Bolster your flagging inspiration with Cram, where you’ll have access to thousands of essays and flashcards submitted by students just like you.</p>
          </div>
          <div className="">
            <h1>Writing Tool</h1>
            <p>Complete the last step of writing your essay by checking what you wrote in our all-in-one Writing Tool. Cram’s Writing Tool helps you detect grammar issues and accidental plagiarism. You can also add citations to your paper in MLS, APA, and Chicago styles. Take that step and turn your good paper into an excellent one that’s ready to be turned in.</p>
          </div>
          <div className="">
            <h1>Flashcards</h1>
            <p>Having trouble preparing for tests and exams? Look no further. Besides essay homework help, Cram also helps you memorize all that hard-to-remember information with online flashcards so that you ace your exams!
              You can even make your own set with our web-based flashcard maker and export them to any device. Better yet, share them with your friends and classmates. The handy Cram app (available on Google Play and the App Store) also allows you to do all this and more, on the go.</p>
          </div>
        </div>
        <div className={styles.mobileContainer}>
          <div className="">
            <h3>Popular Documents</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos animi ea eius tempora reiciendis delectus earum dicta perspiciatis iste explicabo, ab et cupiditate voluptatibus, culpa velit repellat? Id aspernatur eos impedit obcaecati minima molestias, velit perspiciatis cumque alias praesentium accusantium aut exercitationem ducimus aliquid dignissimos, culpa accusamus nesciunt sed?</p>
          </div>
          <div className="">
            <h3>Go Mobile</h3>
            <p>Study on your phone by downloading the
              Memorush app.
              It’s free.</p>
          </div>
        </div>
      </div>
    </div>
  )

  const showSearchExamplesContainer = () => (
    <div className={styles.searchExamplesContainer}>
      <h1>Find example essays for every assignment</h1>
      <div className={styles.inputExamplesContainer}>
        <input type="text" />
        <ButtonAtomicComponent name="Search" />
      </div>
    </div>
  )

  const showRecommendContainer = () => (
    <div className={styles.recommendContainer}>
      <h1>Our recommends</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error molestiae, sequi distinctio quas recusandae ratione modi sed quae harum.</p>
    </div>
  )

  return (
    <div className={styles.container}>
      {showFindContainerDivEl()}
      {showStatusContainerDivEl()}
      {showSearchExamplesContainer()}
      {showRecommendContainer()}
    </div>
  )
}

export default InfoPage;
