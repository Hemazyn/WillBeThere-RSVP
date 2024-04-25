import {
    faArrowRightToBracket,
    faEllipsisVertical,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Tab, TabList, TabPanel } from '../../components';
import styles from './user-account.module.css';

const tabs = [
  { id: 1, label: 'my events' },
  { id: 2, label: 'happened' },
  { id: 3, label: 'cancelled' },
  { id: 4, label: 'saved' },
];

const imageUrl = `https://s3-alpha-sig.figma.com/img/699d/1183/8d9716e61a45f9e95043b56334473c19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ4xRYD3OvMQM-9CYNL9jNLYbACRF-T7yDNBW904td9Y3hw6WnzRARE8iebdaW0X930VG0s~eD2FQ1h4DCy2Oyly9ajQBeGkpdN1XR2zXRCaVt~n7NxYtdEORMyqYq18Q6q1a6jEUGdnxBtA2Z22UaPKHK4BxrifO3PYCqr6MTLMnmggWE3VnSVBu751JDB2WwyUKbV~vLOmFdoeeWENxxirrIP-3d6agV5darB9BgxV31VawN6DNPJ8YKYSg4vURbetFmbTJCxmHkkbq8TnfKgUwxs3x0aLmo8Op1BtBLNcz7rPc8fgZGQZFBkQS~6U8hZ1n3E1w66OIELE4Mn7kA__`;

function UserAccount() {
   const [activeTab, setActiveTab] = useState('my events');
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Avatar src="" />
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
          <Button onClick={() => navigate('/app/event/create')}>
            <span>Add Event</span>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </header>
        <TabList handleClick={setActiveTab}>
          {tabs.map((tab) => (
            <Tab key={tab.id} activeTab={activeTab} tab={tab} />
          ))}
        </TabList>
        <TabPanel
          label="my events"
          activeTab={activeTab}
          events={Array.from({ length: 4 }, (_, i) => `My Event ${i + 1}`)}
        />
        <TabPanel
          label="happened"
          activeTab={activeTab}
          events={Array.from({ length: 4 }, (_, i) => `Happened ${i + 1}`)}
        />
        <TabPanel
          label="cancelled"
          activeTab={activeTab}
          events={Array.from({ length: 4 }, (_, i) => `Cancelled ${i + 1}`)}
        />{' '}
        <TabPanel
          label="saved"
          activeTab={activeTab}
          events={Array.from({ length: 4 }, (_, i) => `Saved ${i + 1}`)}
        />
      </section>
    </div>
  );
}

export default UserAccount;
