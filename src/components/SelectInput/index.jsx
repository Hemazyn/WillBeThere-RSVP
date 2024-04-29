import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './select-input.module.css';
import { createContext } from 'react';

const SelectInputContext = createContext(null);

function SelectInput({
  label,
  id,
  icon,
  className,
  showLabel,
  required,
  error,
  children,
  ...rest
}) {
  return (
    <SelectInputContext.Provider>
      <div className={clsx(className, styles.wrapper)}>
        <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
          {label} {required && <span className="text-red">*</span>}
        </label>
        <div className="w-full relative">
          <select
            id={id}
            className={`${className} ${icon ? [styles.padleft] : ''}`}
            required={required}
            {...rest}
          >
            {children}
          </select>
          {icon && <span className={styles.icon}>{icon}</span>}
        </div>
        {error && (
          <span className="text-red text-xs text-end -mt-2 w-full inline-block">
            {error}
          </span>
        )}
      </div>
    </SelectInputContext.Provider>
  );
}

function SelectInputOption({ children, ...rest }) {
  return <option {...rest}>{children}</option>;
}

SelectInput.Option = SelectInputOption;

SelectInput.defaultProps = {
  required: false,
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SelectInput;
