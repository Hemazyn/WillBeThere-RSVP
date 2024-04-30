import { faBookmark as notBookmarked } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './event-card.module.css';

function EventCard({ event }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkEvent = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (!isBookmarked) {
      bookmarks.push(event);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      const newBookmarks = bookmarks.filter((item) => item.id !== event.id);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem('bookmarks') || '[]'
    );
    setIsBookmarked(
      storedBookmarks.find((obj) => obj?.id === event.id) !== undefined
    );
  }, [event.id]);

  return (
    <article className={styles.card}>
      <button className={styles.bookmark} onClick={bookmarkEvent}>
        {isBookmarked ? (
          <FontAwesomeIcon icon={faBookmark} />
        ) : (
          <FontAwesomeIcon icon={notBookmarked} />
        )}
      </button>
      <img src={event.image} className="w-full h-full" alt="" />
      <div className={styles.details}>
        <h2 className={event.cancelled ? 'text-red' : 'text-white'}>
          <Link to={`/event/${event.id}`}>{event.name}</Link>
        </h2>
        <p className="text-slate">
          {moment(event.date).format('D MMM HH:mm [GMT] Z')} <br />{' '}
        </p>
      </div>
    </article>
  );
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCard;
