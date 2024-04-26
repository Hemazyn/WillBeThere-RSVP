import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, as, className, ...props }) {
  const Component = as;

  if (as === 'Link') {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

Button.defaultProps = {
  as: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['button', 'a', 'Link']),
  className: PropTypes.string,
};

export default Button;
