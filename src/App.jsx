import { Routes, Route } from 'react-router-dom';
import { Home, Browse } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
      </Route>
    </Routes>
  )
}

export default App
