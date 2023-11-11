import styles from './info.module.scss';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as FindSvg } from './svg/loupe-search-svgrepo-com.svg';
import { ReactComponent as BooksSvg } from './svg/books-svgrepo-com.svg'
import { ReactComponent as AppleSvg } from './svg/apple-files-ios-svgrepo-com.svg'
import { ReactComponent as AndroidSvg } from './svg/android-svgrepo-com-1.svg'
import { ReactComponent as BrainSvg } from './svg/brain-svgrepo-com-1.svg'

const InfoPage = () => {

  const navigate = useNavigate();

  const [searchString, setSearchString] = useState('');

  const onSearchStringChangeHandler = (event) => {
    setSearchString(event.target.value);
  }

  const navigateToSearchPageHandler = () => (
    navigate(`/dashboard/search?search=${searchString}`)
  )

  const navigateToCardSetListHandler = () => (
    navigate("/dashboard/card-set-list")
  )

  const navigateToDictionaryHandler = () => (
    navigate("/dashboard/dictionary")
  )

  const showCategoriesListElement = () => {
    return (
      <ul>
        <li>Карьера</li>
        <li>Компьютеры</li>
        <li>Образование</li>
        <li>Экзамены</li>
        <li>Языки</li>
        <li>Закон и право</li>
        <li>Медицина</li>
        <li>Военное дело</li>
        <li>Армия</li>
        <li>... и многое другое</li>
      </ul>
    )
  }

  const showFindContainerDivEl = () => (
    <div className={styles.findContainer}>
      <div className={styles.inputContainer}>
        <div className={styles.inputContainerSvg}>
          <FindSvg />
        </div>
        <h1 className={styles.inputContainerTitle}>Найди готовые флеш-карточки</h1>
        <input
          className={styles.inputContainerInput}
          placeholder="Введите ключевое слово"
          onChange={onSearchStringChangeHandler}
          type="text"
        />
        <div className={styles.inputContainerButton}>
          <ButtonAtomicComponent
            name="Искать"
            clickFunction={navigateToSearchPageHandler}
          />
        </div>
      </div>
      <div className={styles.createContainer}>
        <div className={styles.createContainerButton}>
          <ButtonAtomicComponent
            name="Словарь"
            clickFunction={navigateToDictionaryHandler}
          />
        </div>
        <h1 className={styles.createContainerTitle}>Воспользуйтесь нашим словарем</h1>
      </div>
      <div className={styles.createContainer}>
        <div className={styles.booksContainerSvg}>
          <BooksSvg />
        </div>
        <div className={styles.createContainerButton}>
          <ButtonAtomicComponent
            name="Создать флеш-карточки"
            clickFunction={navigateToCardSetListHandler}
          />
        </div>
        <h1 className={styles.createContainerTitle}>Создай свои карточки</h1>
      </div>
    </div>
  )

  const showStatusContainerDivEl = () => (
    <div className={styles.statusContainer}>
      <div className={styles.usersStatContainer}>
        <div className={styles.usersStatItem}>
          <h3>Более 1000</h3>
          <p>уникальных пользователей</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>Более 5000 готовых</h3>
          <p>флеш-карточек</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>{Math.floor(Math.random() * (100 - 50 + 1) + 50)}</h3>
          <p>карточек добавлено за последний месяц</p>
        </div>
        <div className={styles.usersStatItem}>
          <h3>{Math.floor(Math.random() * (100 - 50 + 1) + 50)}</h3>
          <p>пользователь поставили лайк</p>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.rulesContainer}>
          <div className={styles.categoriesContainer}>
            <h1>Просмотр по категориям</h1>
            {showCategoriesListElement()}
          </div>
          <div className="">
            <h1>Универсальное место для карточек и справки по написанию</h1>
            <p>Находите качественную информацию, которая поможет вам разобраться в концепциях языка, изучайте слова и ваши собственные словосочетания в удобном итерактивном тренажере! Выйдите на новый уровень владения языком и вашей памятью с помощью Memorush, где у вас будет доступ к тысячам сочинений и карточек, присланных такими же учащимися, как и вы.</p>
          </div>
          <div className="">
            <h1>Инструмент для письма</h1>
            <p>Запоминайте написание слов, старайтесь встречаться с ними часто. Проще всего это делать с помощью регулярного повторения, а в этом вам поможет Memorush</p>
          </div>
          <div className="">
            <h1>Флеш-карточки</h1>
            <p>Проблемы с подготовкой к тестам и экзаменам? У нас есть решение! Memorush поможет вам запомнить всю эту труднозапоминаемую информацию с помощью онлайн-карточек, чтобы вы лучше сдали экзамены!</p>
            <p>Вы даже можете создать свой собственный набор с помощью нашего веб-создателя карточек и экспортировать их на любое устройство. А еще лучше, поделитесь ими со своими друзьями и одноклассниками. Удобное приложение Memorush (временно доступно только в AppGallery) также позволяет вам делать все это и многое другое на ходу.</p>
          </div>
        </div>
        <div className={styles.mobileContainer}>
          <div className="">
            <h3>Популярные наборы</h3>
            <p>Флэш-карты — невероятно полезный инструмент, помогающий запомнить все. Вы должны использовать их, независимо от того, учитесь ли вы программировать, готовитесь к экзамену или даже делаете публичные выступления.</p>
            <p>Вы можете записывать факты и детали на карточки и использовать их в качестве подсказок. Или с помощью двусторонних карточек вы можете написать вопрос с одной стороны и ответ с другой, и у вас есть готовый поп-тест, чтобы проверить себя в любое время.</p>
            <p>Но вам не нужно иметь реальный набор карточек и ручку; Ваш телефон может выполнять эту работу так же хорошо.</p>
          </div>
          <div className="">
            <h3>Переходите в мобильное приложение</h3>
            <p>Все ваши любимые слова всегда под рукой в вашем телефоне!</p>
            <p>Скачайте приложение сейчас, это бесплатно!</p>
            <AndroidSvg />
            <AppleSvg />
          </div>
        </div>
      </div>
    </div>
  )

  const showSearchExamplesContainer = () => (
    <div className={styles.searchExamplesContainer}>
      <h1>Найдите уже готовые наборы по ключевым словам</h1>
      <div className={styles.inputExamplesContainer}>
        <input
          type="text"
          placeholder='Введите название набора или категории'
          onChange={onSearchStringChangeHandler}
        />
        <ButtonAtomicComponent
          name="Искать"
          clickFunction={navigateToSearchPageHandler} />
      </div>
    </div>
  )

  const showRecommendContainer = () => (
    <div className={styles.recommendContainer}>
      <div className={styles.recommendContainerTitle}>
        <div className={styles.brainSvgContainer}>
          <BrainSvg />
        </div>
        <h1>Наши рекомендации по изучению слов</h1>
      </div>
      <div className={styles.recommendContent}>
        <ul>
          <li>Объединяйте слова по тематике</li>
          <li>Используйте ассоциации и персонализацию</li>
          <li>Используйте изученную лексику в речи</li>
          <li>Регулярно тестируйте свои знания</li>
          <li>Выполняйте свой ежедневный план</li>
          <li>Пользуйтесь развлекательными методами обучения</li>
          <li>Развивайте свою память</li>
          <li><b>И немного удачи</b></li>
        </ul>
      </div>
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
