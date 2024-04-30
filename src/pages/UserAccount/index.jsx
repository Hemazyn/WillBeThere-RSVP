import {
  faArrowRightToBracket,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Confirm, Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Tab, TabList, TabPanel } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import { useDeleteAccount, useLogout } from '../../services/auth';
import { useGetEventsForUser } from '../../services/events';
import styles from './user-account.module.css';

const tabs = [
  { id: 1, label: 'my events' },
  { id: 2, label: 'happened' },
  { id: 3, label: 'cancelled' },
  { id: 4, label: 'saved' },
];

function UserAccount() {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my events');

  const {
    data: myEvents,
    isPending: isGetEventsForUserPending,
    isError: isGetEventsForUserError,
  } = useGetEventsForUser();

  const {
    logout,
    isPending: isLogoutPending,
    isError: isLogoutError,
    isSuccess: isLogoutSuccess,
  } = useLogout();

  const {
    deleteAccount,
    isPending: isDeletePending,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
  } = useDeleteAccount();

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

  const handleDeleteAccount = () => {
    Confirm.show(
      'Logout',
      `Are you sure you want to delete your account?\nNote: This action is irreversible.`,
      'Yes',
      'No',
      () => {
        deleteAccount();
      }
    );
  };

  const handleLogout = () => {
    Confirm.show(
      'Logout',
      'Are you sure you want to logout?',
      'Yes',
      'No',
      () => {
        logout();
      }
    );
  };

  useEffect(() => {
    if (isLogoutSuccess) {
      Notify.success('Successfully logged out');

      setUser(null);
      navigate('/auth/login');
    } else if (isDeleteSuccess) {
      Notify.success('Successfully deleted account');

      setUser(null);
      navigate('/auth/signup');
    }
  }, [isLogoutSuccess, isDeleteSuccess, navigate, setUser]);

  useEffect(() => {
    if (isLogoutError || isDeleteError || isGetEventsForUserError) {
      Notify.failure('Something went wrong');
    }
  }, [isLogoutError, isDeleteError, isGetEventsForUserError]);

  useEffect(() => {
    if (isLogoutPending || isDeletePending || isGetEventsForUserPending)
      Loading.hourglass();
    else Loading.remove();
  }, [isLogoutPending, isDeletePending, isGetEventsForUserPending]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Avatar src={user?.profile_image_url} />
        <p>{user?.username || `${user?.first_name} ${user?.last_name}`}</p>
        <Button onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Logout
        </Button>
        <Button onClick={handleDeleteAccount}>
          <FontAwesomeIcon icon={faTrashCan} />
          Delete Account
        </Button>
      </div>
      <section className={styles.events}>
        <header>
          <p>Events</p>
          <Button
            as="Link"
            className="flex p-2 items-center gap-2 rounded-full bg-slate"
            to="/dashboard/event/create"
          >
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
          events={myEvents || []}
        />
        <TabPanel
          label="happened"
          activeTab={activeTab}
          events={
            myEvents?.filter((event) => new Date(event.date) < new Date()) || []
          }
        />
        <TabPanel
          label="cancelled"
          activeTab={activeTab}
          events={myEvents?.filter((event) => event.cancelled) || []}
        />
        <TabPanel label="saved" activeTab={activeTab} events={bookmarks} />
      </section>
    </div>
  );
}

export default UserAccount;
