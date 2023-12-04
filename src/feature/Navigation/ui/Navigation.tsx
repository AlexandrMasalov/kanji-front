import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../models/navLinks';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__links}>
        {navLinks.map((navLink): ReactNode => {
          return (
            <div
              className={styles.navigation__link__section}
              key={navLink.name + navLink.path}
            >
              <NavLink
                to={navLink.path}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ''
                }
              >
                {navLink.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export { Navigation };
