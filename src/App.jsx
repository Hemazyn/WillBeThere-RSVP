import { Routes, Route } from "react-router-dom";
import { Home, Browse, CreateEvent, UserAccount, Landing } from "./pages";
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
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="account" element={<UserAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
