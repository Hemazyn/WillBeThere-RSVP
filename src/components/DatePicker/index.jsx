import PropTypes from 'prop-types';
import styles from './date-picker.module.css';

// Get the current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

function DatePicker({ label, id, required, error, icon, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="block w-full">
        {label} {required && <span className="text-red">*</span>}
      </label>

      <div className="relative">
        <input
          type="datetime-local"
          id={id}
          required={required}
          min={currentDate}
          className={icon && [styles.padleft]}
          {...rest}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>

      {error && (
        <span className="text-red text-xs text-end -mt-2 w-full inline-block">
          {error}
        </span>
      )}
    </div>
  );
}

export default DatePicker;

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  error: PropTypes.string,
};
