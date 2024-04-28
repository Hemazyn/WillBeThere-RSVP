import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function TextArea({ label, id, placeholder, showLabel }) {
  const [value, setValue] = useInput();

  return (
    <div>
      <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
};
