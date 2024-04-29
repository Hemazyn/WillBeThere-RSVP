import {
  faCirclePlus,
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../../contexts/EventContext';
import Avatar from '../Avatar';
import Button from '../Button';
import SubMenu from '../SubMenu';
import styles from './nav.module.css';

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { events, setIsFiltered, setFilteredEvents } = useContext(EventContext);

  const handleSearch = (e) => {
    if (!e.target.value) setIsFiltered(false);
    else setIsFiltered(true);

    setFilteredEvents(
      events.filter(
        (event) =>
          event.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          event.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          event.type.toLowerCase().includes(e.target.value.toLowerCase()) ||
          event.location.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/dashboard">will be there</Link>
      </div>
      <div className={styles.input}>
        <input
          type="search"
          name="search event"
          id="sd"
          placeholder="search for events"
          onChange={handleSearch}
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
        <Button as="Link" to="/dashboard/event/create">
          <FontAwesomeIcon icon={faCirclePlus} />
        </Button>
        <Button className={styles.profile} as="Link" to="/dashboard/profile">
          <Avatar className={styles.avatar} />
        </Button>
      </div>
      {isMenuVisible && <SubMenu />}
    </nav>
  );
}

export default Nav;
