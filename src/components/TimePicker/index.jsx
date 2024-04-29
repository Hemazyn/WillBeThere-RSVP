import PropTypes from 'prop-types';
import styles from './time-picker.module.css';

function TimePicker({ label, icon, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="timePicker" className="block w-full">
        {label}
      </label>
      <input
        type="time"
        id="timePicker"
        className={icon && [styles.padleft]}
        {...rest}
      />
      {icon && <span>{icon}</span>}
    </div>
  );
}

export default TimePicker;

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};
