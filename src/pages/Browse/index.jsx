import { Loading, Notify } from 'notiflix';
import { useEffect } from 'react';
import { EventCard } from '../../components';
import { useGetEvents } from '../../services/events';
import styles from './browse.module.css';

const Browse = () => {
  const { data: events, isPending: isLoading, isError, error } = useGetEvents();

  useEffect(() => {
    if (isLoading) Loading.hourglass();
    else Loading.remove();
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      Notify.failure(
        error?.response?.data?.message || 'Unable to fetch events'
      );
    }
  }, [error?.response?.data?.message, isError]);

  return (
    !isLoading && (
      <div className={styles.wrapper}>
        {!events || events.length === 0 ? (
          <h1 className="text-white text-4xl">
            No event to display at the moment
          </h1>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    )
  );
};

export default Browse;
