/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout';
import { ForgotPassword } from './components';
import {
  Browse,
  CreateEvent,
  LandingPage,
  Login,
  SignUp,
  UserAccount,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Browse />} />
        <Route path="event">
          <Route path="create" element={<CreateEvent />} />
        </Route>
        <Route path="profile" element={<UserAccount />} />
      </Route>
      <Route path="/auth">
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
