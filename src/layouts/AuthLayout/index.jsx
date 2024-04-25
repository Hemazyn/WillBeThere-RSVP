import PropTypes from 'prop-types';
import authbg from '../../assets/auth_bg.png';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="h-full w-full md:w-md1 flex justify-center items-center">
        <Outlet />
      </div>
      <img
        src={authbg}
        alt="sidebar bg"
        className="w-1/2 h-full hidden md:block"
      />
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
