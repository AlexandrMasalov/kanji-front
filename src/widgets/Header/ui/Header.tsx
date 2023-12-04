import { Navigation } from '../../../feature/Navigation';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__menu}>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export { Header };
