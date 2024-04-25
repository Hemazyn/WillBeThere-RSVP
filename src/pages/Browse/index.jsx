import { EventCard } from '../../components';
import styles from './browse.module.css';

const Browse = () => {
  const events = Array.from({ length: 12 }, (_, i) => `Event ${i + 1}`);

  return (
    <>
      <div className={styles.wrapper}>
        {events.map((event) => (
          <EventCard key={event} event={event} />
        ))}
      </div>
    </>
  );
};

export default Browse;
