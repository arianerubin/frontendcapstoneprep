//import { useState } from "react";
import "./App.css";
import { BrowserRouter as Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      HOMEPAGE
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
