import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import "./style/App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState(null);

  const handleLogin = (user, password) => {
    if (user === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setUsername("Admin");
      setShowLoginModal(false);
    } else if (user === "guest" && password === "guest123") {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setUsername("Guest");
      setShowLoginModal(false);
    } else {
      alert("Identifiants incorrects ! Utilisez admin/admin123 ou guest/guest123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUsername(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects isAdmin={isAdmin} isLoggedIn={isLoggedIn} />;
      case "education":
        return <Education isAdmin={isAdmin} />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="scanlines">
        <div className="scanlines-inner" />
      </div>

      <div className="glitch-border" />

      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLoginClick={() => setShowLoginModal(true)}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        username={username}
        onLogout={handleLogout}
      />

      <Login
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <p className="footer-text">
          {'>'} Made with <span className="footer-heart">❤</span> by Gauthier.
        </p>
        <p className="footer-copyright">
          © granupio. {new Date().getFullYear()} - Tous droits réservés
        </p>
      </footer>
    </div>
  );
}
