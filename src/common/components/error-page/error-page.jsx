import style from './error-page.module.css';

function ErrorPage({ history }) {
  return (
    <div className={style.container}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        {/* FIXME Перенаправляет на /main/admin вместо /main */}
        <button onClick={() => history.push("/main")}>Go To Homepage</button>
      </div>
    </div>
  )
}

export default ErrorPage;

