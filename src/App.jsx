import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Landingpage from "./Pages/Public/Landingpage";
import Loginpage from "./Pages/Public/Loginpage";
import Registerpage from "./Pages/Public/Registerpage";
import Forgetpassword from "./Pages/Public/Forgetpassword";
import Cars from "./Pages/Public/Cars";
import About from "./Pages/Public/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const LoginWrapper = () => {
    const navigate = useNavigate();
    return (
      <Loginpage
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        onBack={() => navigate("/")}
        onRegisterClick={() => navigate("/register")}
        onForgetClick={() => navigate("/forgetpassword")}
      />
    );
  };

  const RegisterWrapper = () => {
    const navigate = useNavigate();
    return <Registerpage onBack={() => navigate("/login")} />;
  };

  const ForgetWrapper = () => {
    const navigate = useNavigate();
    return <Forgetpassword onBack={() => navigate("/login")} />;
  };

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/cars" element={<Cars isLoggedIn={isLoggedIn} />} />
      <Route path="/login" element={<LoginWrapper />} />
      <Route path="/register" element={<RegisterWrapper />} />
      <Route path="/forgetpassword" element={<ForgetWrapper />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
