import React, { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login"
import { allUsers} from "./components/users/allUsers"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Route, Routes } from "react-router-dom";

function App() {

  const [authToken, setAuthToken] = useState("token");


const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };

  return (
    <>
        <div className="content-overlay">
          <h1 className="title">Instructor List</h1>

          <Routes>
            <Route path="/allUsers" element={<allUsers />} />
            <Route path="/Register" element={<Register />}/>
            <Route path="/Login" element={<Login />}/>
          </Routes>
        </div>
     
    </>
  );
}

export default App;


