import { Routes, Route } from 'react-router-dom';
import { Home, Browse, CreateEvent } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="create" element={<CreateEvent />} />
      </Route>
    </Routes>
  )
}

export default App
