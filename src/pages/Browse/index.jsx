import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { EventCard } from '../../components';
import { getEvents } from '../../services/events';
import styles from './browse.module.css';

const Browse = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Loading.hourglass();

    getEvents()
      .then(({ response }) => {
        setEvents(response);
      })
      .catch(() => {
        Notify.failure(
          'Unable to fetch events at this time, please try again later'
        );
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, []);

  return (
    !isLoading && (
      <div className={styles.wrapper}>
        {events.length === 0 ? (
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
