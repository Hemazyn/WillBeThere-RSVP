import PropTypes from 'prop-types';

function TextArea({
  label,
  id,
  error,
  placeholder,
  required,
  showLabel,
  ...rest
}) {
  return (
    <div>
      <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
        {label} {required && <span className="text-red">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
      {error && (
        <span className="text-red text-xs text-end -mt-2 w-full inline-block">
          {error}
        </span>
      )}
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
};
