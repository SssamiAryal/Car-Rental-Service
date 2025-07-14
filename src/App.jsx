import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Public/Landingpage";
import Loginpage from "./Pages/Public/Loginpage";
import Registerpage from "./Pages/Public/Registerpage";
import Forgetpassword from "./Pages/Public/Forgetpassword";
import Cars from "./Pages/Public/Cars";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/cars" element={<Cars isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <Loginpage
              onLogin={() => setIsLoggedIn(true)}
              onLogout={() => setIsLoggedIn(false)}
            />
          }
        />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
