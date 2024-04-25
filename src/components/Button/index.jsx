function Button({ children, className, as, ...props }) {
  const Component = as || 'button';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export default Button;
