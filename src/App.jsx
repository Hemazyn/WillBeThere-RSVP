import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
