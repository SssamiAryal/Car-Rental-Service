import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Landingpage from "./Pages/Public/Landingpage";
import Loginpage from "./Pages/Public/Loginpage";
import Registerpage from "./Pages/Public/Registerpage";
import Forgetpassword from "./Pages/Public/Forgetpassword";
import Cars from "./Pages/Public/Cars";
import About from "./Pages/Public/About";
import Contact from "./Pages/Public/Contact";
import Dashboard from "./Pages/Private/Dashboard";
import PrivCars from "./Pages/Private/PrivCars";
import PrivAbout from "./Pages/Private/PrivAbout";
import PrivContact from "./Pages/Private/PrivContact";
import BookCar from "./Pages/Private/BookCar";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const LoginWrapper = () => {
    return (
      <Loginpage
        onLogin={() => {
          setIsLoggedIn(true);
          navigate("/dashboard");
        }}
        onBack={() => navigate("/")}
        onRegisterClick={() => navigate("/register")}
        onForgetClick={() => navigate("/forgetpassword")}
      />
    );
  };

  const RegisterWrapper = () => {
    return <Registerpage onBack={() => navigate("/login")} />;
  };

  const ForgetWrapper = () => {
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
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/cars"
        element={
          <PrivateRoute>
            <PrivCars />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/about"
        element={
          <PrivateRoute>
            <PrivAbout />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/contact"
        element={
          <PrivateRoute>
            <PrivContact />
          </PrivateRoute>
        }
      />

      <Route
        path="/book/:carId"
        element={
          <PrivateRoute>
            <BookCar />
          </PrivateRoute>
        }
      />
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
