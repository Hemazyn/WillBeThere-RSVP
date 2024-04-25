/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { Home, Browse, CreateEvent, SignUp, Login } from './pages';
import { ForgotPassword } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App