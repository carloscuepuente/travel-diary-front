import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import NewPost from "./routes/NewPost/NewPost";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  // todo use context
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home user={user} />} />
          <Route
            path="/register"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/newentry"
            element={<NewPost user={user} setUser={setUser} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
