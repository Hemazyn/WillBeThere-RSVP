import { Outlet } from 'react-router-dom';
import { Nav } from '../../components';
import styles from './layout.module.css';

function AppLayout() {
  return (
    <div>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
