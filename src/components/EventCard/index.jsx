import { faBookmark as notBookmarked } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './event-card.module.css';

function EventCard({ event }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className={styles.card}>
      <div
        className={styles.icon}
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        {isBookmarked ? (
          <FontAwesomeIcon icon={faBookmark} />
        ) : (
          <FontAwesomeIcon icon={notBookmarked} />
        )}
      </div>
      <img src={imageUrl} alt="" />
      <div className={styles.details}>
        <h2>{event}</h2>
        <p>Event date</p>
      </div>
    </article>
  );
}

EventCard.propTypes = {
  event: PropTypes.string.isRequired,
};

export default EventCard;
