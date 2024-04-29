import PropTypes from 'prop-types';
import styles from "./chip.module.css"
import Button from "../Button"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chip = ({ label, onDelete }) => {
  return (
    <div className={ styles.chip }>
      <span className={ styles.label }>{label}</span>
      {onDelete && (
        <Button className={styles.btn} onClick={onDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      )}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Chip;

