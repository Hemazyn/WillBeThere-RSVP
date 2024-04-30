import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './text-field.module.css';

function TextField({
  type,
  label,
  id,
  icon,
  className,
  showLabel,
  required,
  error,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={clsx(className, styles.wrapper)}>
      <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
        {label} {required && <span className="text-red">*</span>}
      </label>
      <div className="w-full relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          className={`${className} ${icon ? [styles.padleft] : ''}`}
          required={required}
          {...rest}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
        {type === 'password' && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4"
          >
            {showPassword ? (
              <FiEye className="text-primary-default font-bold" />
            ) : (
              <FiEyeOff className="text-primary-default font-bold" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red text-[12px] text-end mt-3 w-full">{error}</p>
      )}
    </div>
  );
}

export default TextField;

TextField.defaultProps = {
  type: 'text',
  required: false,
};

TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
};
