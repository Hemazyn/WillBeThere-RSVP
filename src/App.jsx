import { Routes, Route } from "react-router-dom";
import { Browse, CreateEvent, UserAccount, Landing, EventPage } from "./pages";
import Layout from "./Layout";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Browse />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="account" element={<UserAccount />} />
        <Route path="event/:id" element={<EventPage />} />
      </Route>
    </Routes>
  );
}

export default App;
