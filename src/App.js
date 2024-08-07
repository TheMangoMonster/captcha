import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <ToastContainer />
      {!isAuthenticated ? (
        <>
          <Login onLogin={handleLogin} />
          <Register />
        </>
      ) : (
        <Home onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
