import PropTypes from 'prop-types';
import styles from './avatar.module.css';

function Avatar({ src, className }) {
  return (
    <div className={`${className} ${styles.avatar}`}>
      <img src={src} alt="" />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
