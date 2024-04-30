import {
  faArrowRightToBracket,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Avatar, Button, Tab, TabList, TabPanel } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './user-account.module.css';

const tabs = [
  { id: 1, label: 'my events' },
  { id: 2, label: 'happened' },
  { id: 3, label: 'cancelled' },
  { id: 4, label: 'saved' },
];

function UserAccount() {
  const { user } = useAuthContext();
  const [activeTab, setActiveTab] = useState('my events');

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Avatar src={user?.url} />
        <p>Username</p>
        <Button>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Logout
        </Button>
        <Button>
          <FontAwesomeIcon icon={faTrashCan} />
          Delete Account
        </Button>
      </div>
      <section className={styles.events}>
        <header>
          <p>Events</p>
          <Button as="Link" to="/dashboard/event/create">
            <span>Add Event</span>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </header>
        <TabList handleClick={setActiveTab}>
          {tabs.map((tab) => (
            <Tab key={tab.id} activeTab={activeTab} tab={tab} />
          ))}
        </TabList>
        <TabPanel label="my events" activeTab={activeTab} events={[]} />
        <TabPanel label="happened" activeTab={activeTab} events={[]} />
        <TabPanel label="cancelled" activeTab={activeTab} events={[]} />{' '}
        <TabPanel label="saved" activeTab={activeTab} events={bookmarks} />
      </section>
    </div>
  );
}

export default UserAccount;
