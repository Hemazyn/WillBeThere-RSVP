import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './text-field.module.css';

function TextField({
  label,
  id,
  icon,
  className,
  showLabel,
  required,
  error,
  ...rest
}) {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
        {label} {required && <span className="text-red">*</span>}
      </label>
      <div className="w-full relative">
        <input
          id={id}
          className={`${className} ${icon ? [styles.padleft] : ''}`}
          required={required}
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

export default TextField;

TextField.defaultProps = {
  required: false,
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
};
