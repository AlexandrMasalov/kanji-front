import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.wrapper_error_page}>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <p>
          <a href="/">Назад</a>
        </p>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}

export { ErrorPage };
