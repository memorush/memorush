import styles from './term-of-use.module.css';

const TermOfUsePage = () => {

  return (
    <div className={styles.termOfUse} data-testid="termOfUse">
      <h1 className={styles.termOfUse__title}>Пользовательское соглашение</h1>
      <div className={styles.termOfUse__content}>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Пользовательское Соглашение</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем https://memorush.ru (далее memorush.ru или Администрация) с одной стороны и пользователем сайта с другой.</p></li>
            <li className={styles.infoBlock__item}><p>Сайт memorush.ru не является средством массовой информации.</p></li>
            <li className={styles.infoBlock__item}><p>Используя сайт, Вы соглашаетесь с условиями данного соглашения.</p></li>
            <li className={styles.infoBlock__item}><p>Если Вы не согласны с условиями данного соглашения, не используйте сайт memorush.ru!</p></li>
          </ul>
        </div>
        <h2>Права и обязанности сторон</h2>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Пользователь имеет право:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>осуществлять поиск информации на сайте</p></li>
            <li className={styles.infoBlock__item}><p>получать информацию на сайте</p></li>
            <li className={styles.infoBlock__item}><p>создавать информацию для сайта</p></li>
            <li className={styles.infoBlock__item}><p>распространять информацию на сайте</p></li>
            <li className={styles.infoBlock__item}><p>копировать информацию на другие сайты с указанием источника</p></li>
            <li className={styles.infoBlock__item}><p>использовать информацию сайта в личных некоммерческих целях</p></li>
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Администрация имеет право:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>по своему усмотрению и необходимости создавать, изменять, отменять правила</p></li>
            <li className={styles.infoBlock__item}><p>ограничивать доступ к любой информации на сайте</p></li>
            <li className={styles.infoBlock__item}><p>создавать, изменять, удалять информацию</p></li>
            <li className={styles.infoBlock__item}><p>отказывать в регистрации без объяснения причин</p></li>
            <li className={styles.infoBlock__item}><p>копировать информацию на другие сайты с указанием источника</p></li>
            <li className={styles.infoBlock__item}><p>использовать информацию сайта в личных некоммерческих целях</p></li>
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Пользователь обязуется:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>обеспечивать сохранность личных данных от доступа третьих лиц</p></li>
            <li className={styles.infoBlock__item}><p>при копировании информации с других источников, включать в её состав информацию об авторе</p></li>
            <li className={styles.infoBlock__item}><p>не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти и вражды, а также иной информации, за распространение которой предусмотрена уголовная или административная ответственность</p></li>
            <li className={styles.infoBlock__item}><p>не нарушать работоспособность сайта</p></li>
            <li className={styles.infoBlock__item}><p> не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами</p></li>
            <li className={styles.infoBlock__item}><p>не совершать действия, направленные на введение других Пользователей в заблуждение</p></li>
            <li className={styles.infoBlock__item}><p>не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам</p></li>
            <li className={styles.infoBlock__item}><p>не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ</p></li>
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Администрация обязуется:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.</p></li>
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Ответственность сторон:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>пользователь лично несет полную ответственность за распространяемую им информацию</p></li>
            <li className={styles.infoBlock__item}><p>администрация не несет никакой ответственности за достоверность информации, скопированной из других источников</p></li>
            <li className={styles.infoBlock__item}><p>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</p></li>
            <li className={styles.infoBlock__item}><p>в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса</p></li>
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>Условия действия Соглашения:</h3>
          <ul className={styles.infoBlock__list}>
            <li className={styles.infoBlock__item}><p>Данное Соглашение вступает в силу при любом использовании данного сайта.</p></li>
            <li className={styles.infoBlock__item}><p>Соглашение перестает действовать при появлении его новой версии.</p></li>
            <li className={styles.infoBlock__item}><p>Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.</p></li>
            <li className={styles.infoBlock__item}><p>Администрация не оповещает пользователей об изменении в Соглашении.</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TermOfUsePage;