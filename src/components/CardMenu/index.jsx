import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loading, Notify } from 'notiflix';
import { useEffect } from 'react';
import { useCancelEvent } from '../../services/events';
import Button from '../Button';
import styles from './card-menu.module.css';

function CardMenu({ event }) {
  const { cancelEvent, isPending, isError, isSuccess, error } = useCancelEvent(
    event.id
  );

  const handleEditEvent = () => {
    if (event.cancelled) return Notify.failure('Cannot edit a cancelled event');
    if (new Date(event.date) < new Date())
      return Notify.failure(
        'Cannot edit an event that has already taken place'
      );
  };

  const handleCancelEvent = () => {
    if (event.cancelled)
      return Notify.failure('Event has already been cancelled');
    if (new Date(event.date) < new Date())
      return Notify.failure(
        'Cannot cancel an event that has already taken place'
      );

    cancelEvent();
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Successfully cancelled event. Please refresh the page.');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isPending) Loading.hourglass();
    else Loading.remove();
  }, [isPending]);

  useEffect(() => {
    if (isError) {
      Notify.failure(
        error?.response?.data?.message || 'Unable to cancel event'
      );
    }
  }, [error, isError]);

  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn} onClick={handleEditEvent}>
        {' '}
        <span>
          <FontAwesomeIcon icon={faPen} className="bg-transparent text-white" />
        </span>
        edit event
      </Button>
      <Button className={styles.btn} onClick={handleCancelEvent}>
        <span>
          <FontAwesomeIcon
            icon={faXmark}
            className="bg-transparent text-white"
          />
        </span>
        cancel event
      </Button>
    </div>
  );
}

export default CardMenu;
