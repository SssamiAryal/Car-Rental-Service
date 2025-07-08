import React, { useState } from "react";
import Landingpage from "./Pages/Public/Landingpage";
import Loginpage from "./Pages/Public/Loginpage";
import Registerpage from "./Pages/Public/Registerpage";
import Forgetpassword from "./Pages/Public/Forgetpassword";
import "./Styles/Landingpage.css";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <main className="app-container">
      {page === "landing" && (
        <Landingpage onLoginClick={() => setPage("login")} />
      )}
      {page === "login" && (
        <Loginpage
          onBack={() => setPage("landing")}
          onRegisterClick={() => setPage("register")}
          onForgetClick={() => setPage("forgetpassword")}
        />
      )}
      {page === "register" && <Registerpage onBack={() => setPage("login")} />}
      {page === "forgetpassword" && (
        <Forgetpassword onBack={() => setPage("login")} />
      )}
    </main>
  );
}

export default App;
