import PropTypes from 'prop-types';

function Button({ children, as, className, ...props }) {
  const Component = as;

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
  as: PropTypes.oneOf('button', 'a'),
  className: PropTypes.string,
};

export default Button;
