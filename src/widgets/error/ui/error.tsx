import { Link } from 'react-router-dom';
import s from './error.module.scss';
export const Error = () => {
  return (
    <section className={s.error} data-testid='error' id='error'>
      <h1 className={s.error__title}>404</h1>
      <p className={s.error__text}>
        Page not found. The page you are looking for does not exist.Go to{' '}
        <Link className={s.error_link} to='/'>
          Home
        </Link>
      </p>
    </section>
  );
};
