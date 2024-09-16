import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
