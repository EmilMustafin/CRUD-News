import { Outlet } from 'react-router-dom';
import styles from './root-layout.module.scss';

export const RootLayout = () => {
  return (
    <div className={styles.body_container}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
