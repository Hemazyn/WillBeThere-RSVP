import PropTypes from 'prop-types';
import { MdPerson } from 'react-icons/md';
import styles from './avatar.module.css';

function Avatar({ src, className }) {
  return (
    <div className={`${className} ${styles.avatar}`}>
      {src ? (
        <img
          src={src}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <MdPerson fill="white" />
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
