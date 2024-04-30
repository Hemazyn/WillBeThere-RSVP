import { Loading, Notify } from 'notiflix';
import { useEffect } from 'react';
import { EventCard } from '../../components';
import { useEventContext } from '../../contexts/EventContext';
import styles from './browse.module.css';

const Browse = () => {
  const { events, isFiltered, filteredEvents, isLoading, isError, error } =
    useEventContext();

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
        {isFiltered &&
          (!filteredEvents || filteredEvents.length === 0 ? (
            <h1 className="text-white text-4xl">No event matches the filter</h1>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} browse={true} />
            ))
          ))}
        {!isFiltered &&
          (!events || events.length === 0 ? (
            <h1 className="text-white text-4xl">
              No event to display at the moment. Please check again later.
            </h1>
          ) : (
            events.map((event) => (
              <EventCard key={event.id} event={event} browse={true} />
            ))
          ))}
      </div>
    )
  );
};

export default Browse;
