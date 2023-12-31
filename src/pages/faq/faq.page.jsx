import styles from './faq.module.scss';

const FaqPage = () => {
  return (
    <div className={styles.faqPage} data-testid="faqPage">
      <h1 className={styles.faqPage__title}>Часто задаваемые вопросы</h1>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Что такое <strong>memo<span className={styles.r}>R</span>ush?</strong></h2>
        <p>Интерактивный тренажер для запоминания слов!</p>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Зачем мне ваше приложение?</h2>
        <ol>
          <li><p>Удобно работать с различными типами смартфонов/ планшетов</p></li>
          <li><p>Регулярные обновления и обратная связь</p></li>
          <li><p>Размеры приложение адаптируется под ваше персональное устойство</p></li>
          <li><p>Абсолютно бесплатное</p></li>
          <li><p>Все ваши данные хранятся в облаке и вы их никогда не потеряете</p></li>
          <li><p>Удобный интерактивный и настраиваемый тренажер</p></li>
        </ol>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Как создать свой набора карточек?</h2>
        <ol>
          <li><p>Войдите в свою учетную запись.</p></li>
          <li><p>Нажмите <strong>Создать флеш-карточки</strong>.</p></li>
          <li><p>Нажмите <strong>Создать Набор</strong>.</p></li>
          <li><p>Введите название набора</p></li>
          <li><p>Введите краткое описание</p></li>
          <li><p>Добавьте необходимое количество карточек</p></li>
          <li><p>Нажмите <strong>Создать</strong>, чтобы сохранить набор</p></li>
        </ol>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Поиск готовых наборов карточек</h2>
        <p>В Memorush десятки готовых наборов, созданных пользователями. Вы обязательно найдете тот, который подойдет именно вам!</p>
        <ol>
          <li><p>Войдите в свою учетную запись.</p></li>
          <li><p>Введите поисковый запрос с ключевыми словами</p></li>
          <li><p>Выберите подходящий именно вам</p></li>
          <li><p>Добавьте этот набор к себе</p></li>
          <li><p>При желании отредактируйте</p></li>
        </ol>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Изменение пароля</h2>
        <ol>
          <li><p>Войдите в свою учетную запись.</p></li>
          <li><p>Нажмите <strong>Настройки</strong>.</p></li>
          <li><p>Прокрутите до <strong>Изменить пароль</strong>.</p></li>
          <li><p>Введите свой текущий пароль.</p></li>
          <li><p>Введите и подтвердите новый пароль.</p></li>
          <li><p>Нажмите <strong>Отправить</strong>, чтобы сохранить новый пароль.</p></li>
        </ol>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>Совместимость браузеров и устройств</h2>
        <p>Вы можете пользоваться Memorush на различных устройствах. Мы предлагаем официальные приложения для iOS и Android, а наш веб-сайт можно использовать с различными браузерами на компьютерах Windows and Mac.</p>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questionBlock__title}>В чем отличие вашего приложения от аналогичных?</h2>
        <ol>
          <li>
            <p>Разнообразие материалов: Memorush предлагает обширную коллекцию английских слов и фраз на различные темы, что позволяет узнать новые слова из разных областей.</p>
          </li>
          <li>
            <p>Интерактивные упражнения: Приложение предлагает разнообразные типы упражнений, включая выбор правильного перевода, составление предложений и сопоставление слов с их определениями.</p>
          </li>
          <li>
            <p>Персонализация: Memorush позволяет создавать персонализированные курсы и коллекции слов, что позволяет изучать те слова, которые вам интересны и наиболее полезны.</p>
          </li>
          <li>
            <p>Отслеживание прогресса: Приложение сохраняет результаты и прогресс пользователя, позволяя отслеживать достижения и улучшаться с каждым уроком.</p>
          </li>
          <li>
            <p>Удобный интерфейс: Memorush имеет интуитивно понятный и удобный интерфейс, что делает процесс изучения легким и приятным.</p>
          </li>
          <li>
            <p>Дополнительные материалы: Помимо слов, приложение предлагает дополнительные материалы для обучения, такие как аудио- и видеоматериалы, статьи и игры, что делает процесс изучения более интересным и разнообразным.</p>
          </li>
          <li>
            <p>Возможность общения: Memorush предоставляет возможность общения с другими пользователями, обмена опытом и поддержки в обучении.</p>
          </li>
          <li>
            <p>Бесплатный доступ: Приложение Memorush предоставляет бесплатный доступ к основным функциям, что делает его доступным для всех.</p>
          </li>
          <li>
            <p>Регулярные обновления: Memorush постоянно обновляется с добавлением новых слов, упражнений и функций, чтобы пользователи могли непрерывно развиваться в своем изучении.</p>
          </li>
          <li>
            <p>Полезные функции: Приложение предлагает функции, такие как возможность прослушивания произношения слов, сохранение изученных слов в избранное и быстрый доступ к изученным материалам.</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default FaqPage;