import { Outlet } from 'react-router-dom';
import authbg from '../../assets/auth_bg.png';

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

export default AuthLayout;
