import { Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
import {
  Browse,
  CreateEvent,
  EventPage,
  EventPreview,
  ForgotPassword,
  LandingPage,
  Login,
  ResetPassword,
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
          <Route path='preview' element={<EventPreview />} />
          <Route path=":id" element={<EventPage />} />
        </Route>
        <Route path="profile" element={<UserAccount />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
