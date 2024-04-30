import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CardMenu from '../CardMenu';
import EventCardIcon from '../EventCardIcon';
import PropTypes from 'prop-types';

function MenuIcon({ event }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <EventCardIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </EventCardIcon>
      {isMenuVisible && <CardMenu event={event} />}
    </>
  );
}

MenuIcon.propTypes = {
  event: PropTypes.object.isRequired,
};

export default MenuIcon;
