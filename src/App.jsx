import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import NewPost from "./routes/NewPost/NewPost";
import Update from "./routes/Update/Update.jsx";
import { useUser } from "./UserContext";

import "./App.css";

function App() {
  // todo use context
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<signUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newentry" element={<NewPost />} />
          <Route path="/entry/:id" element={<Update />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
