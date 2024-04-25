import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  EventCard,
  EventCardDetails,
  EventCardIcon,
  EventCardImage,
} from '../../components';
import styles from './browse.module.css';

const Browse = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const events = Array.from({ length: 12 }, (_, i) => `Event ${i + 1}`);

  const imageUrl = `https://s3-alpha-sig.figma.com/img/699d/1183/8d9716e61a45f9e95043b56334473c19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ4xRYD3OvMQM-9CYNL9jNLYbACRF-T7yDNBW904td9Y3hw6WnzRARE8iebdaW0X930VG0s~eD2FQ1h4DCy2Oyly9ajQBeGkpdN1XR2zXRCaVt~n7NxYtdEORMyqYq18Q6q1a6jEUGdnxBtA2Z22UaPKHK4BxrifO3PYCqr6MTLMnmggWE3VnSVBu751JDB2WwyUKbV~vLOmFdoeeWENxxirrIP-3d6agV5darB9BgxV31VawN6DNPJ8YKYSg4vURbetFmbTJCxmHkkbq8TnfKgUwxs3x0aLmo8Op1BtBLNcz7rPc8fgZGQZFBkQS~6U8hZ1n3E1w66OIELE4Mn7kA__`;

  return (
    <>
      <div className={styles.wrapper}>
        {events.map((event) => (
          <EventCard key={event}>
            <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </EventCardIcon>
            <EventCardImage src={imageUrl} />
            <EventCardDetails name={event} date={'Event Date'} />
          </EventCard>
        ))}
      </div>
    </>
  );
};

export default Browse;
