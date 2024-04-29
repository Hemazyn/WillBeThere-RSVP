import { QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { EventProvider } from './contexts/EventContext';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
import { queryClient } from './lib/react-query';
import {
  Browse,
  CreateEvent,
  EventPage,
  ForgotPassword,
  LandingPage,
  Login,
  ResetPassword,
  SignUp,
  UserAccount,
} from './pages';
import NotFoundPage from './pages/404';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EventProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<AppLayout />}>
            <Route index element={<Browse />} />
            <Route path="event">
              <Route path="create" element={<CreateEvent />} />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </EventProvider>
    </QueryClientProvider>
  );
}

export default App;
