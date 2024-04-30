import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );

  useLayoutEffect(() => {
    if (user && location.pathname.startsWith('/auth')) {
      navigate('/dashboard', { replace: true });
    }
    if (!user && location.pathname.startsWith('/dashboard')) {
      navigate('/auth/login', { replace: true });
    }
  }, [location, navigate, user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider };
