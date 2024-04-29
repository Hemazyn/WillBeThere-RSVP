import { Routes, Route } from 'react-router-dom';
import { Home, Browse, CreateEvent, SignUp, Login } from './pages';
import { ForgotPassword } from './components';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="497988997356-i4m7fksqbe8786e2lq2t2uk0j5e6b04m.apps.googleusercontent.com">
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path="/auth">
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App
