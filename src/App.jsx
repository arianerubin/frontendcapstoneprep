import { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/users/Home";
import Protected from "./Shared/Protected";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setAuthToken(null);

  return (
    <>
      <div className="content-overlay">
        <h1 className="title">Instructor List</h1>

        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<updateUser />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
