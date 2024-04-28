import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './text-field.module.css';

function TextField({ label, id, icon, className, showLabel, ...others }) {
  const wrapperStyle = clsx({
    [styles.wrapper]: true,
    [className]: className,
  });

  return (
    <div className={wrapperStyle}>
      <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
        {label}
      </label>
      <input id={id} className={icon && [styles.padleft]} {...others} />
      {icon && <span>{icon}</span>}
    </div>
  );
}

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.object,
  showLabel: PropTypes.bool,
};
