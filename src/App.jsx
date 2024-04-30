import { QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { EventContextProvider } from './contexts/EventContext';
import DashboardLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
import { queryClient } from './lib/react-query';
import {
  Browse,
  CreateEvent,
  EventPage,
  ForgotPassword,
  InvitationPage,
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
      <EventContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/invitation/:id" element={<InvitationPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Browse />} />
              <Route path="event">
                <Route path=":id" element={<EventPage />} />
                <Route path="create" element={<CreateEvent />} />
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
        </AuthContextProvider>
      </EventContextProvider>
    </QueryClientProvider>
  );
}

export default App;
