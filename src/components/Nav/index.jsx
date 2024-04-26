import {
  faCirclePlus,
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import Button from '../Button';
import SubMenu from '../SubMenu';
import styles from './nav.module.css';

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">will be there</Link>
      </div>
      <div className={styles.input}>
        <input
          type="search"
          name="search event"
          id="sd"
          placeholder="search for events"
        />
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <div className={styles.icons}>
        <Button className={styles.mobile}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
        <Button>
          <FontAwesomeIcon
            icon={faSliders}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
        </Button>
        <Button as="Link" to="/app/event/create">
          <FontAwesomeIcon icon={faCirclePlus} />
        </Button>
        <Button className={styles.profile} as="Link" to="/app/profile">
          <Avatar className={styles.avatar} />
        </Button>
      </div>
      {isMenuVisible && <SubMenu />}
    </nav>
  );
}

export default Nav;
