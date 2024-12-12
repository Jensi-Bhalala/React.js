import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./assets/pages/regester";
import SignIn from "./assets/pages/login";
import Home from "./assets/pages/home";

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isLoggedIn");
    if (storedAuthStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn userList={userList} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setUserList={setUserList} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;