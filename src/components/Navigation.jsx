import { Terminal, User, Briefcase, GraduationCap, Mail, Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import "../style/Navigation.css";

export function Navigation({ 
  currentPage, 
  onPageChange, 
  onLoginClick, 
  isLoggedIn, 
  isAdmin,
  username,
  onLogout 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: '> À propos', icon: User },
    { id: 'projects', label: '> Projets', icon: Briefcase },
    { id: 'education', label: '> Parcours', icon: GraduationCap },
    { id: 'contact', label: '> Contact', icon: Mail },
  ];

  const handleNavClick = (pageId) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div 
          className="nav-logo"
          onClick={() => onPageChange('home')}
        >
          <Terminal className="nav-logo-icon" />
          <span className="nav-logo-text">
            <span style={{ animation: 'pulse 2s infinite' }}>_</span>O.G._PORTFOLIO
          </span>
        </div>

        <div className="nav-menu-desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`nav-menu-item ${isActive ? 'active' : ''}`}
              >
                <Icon className="nav-menu-item-icon" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="nav-user-section">
          {isLoggedIn ? (
            <>
              <div className="nav-user-info">
                <span className="nav-user-name">
                  {isAdmin && <span className="nav-admin-badge">ADMIN</span>} {username}
                </span>
              </div>
              <button
                onClick={onLogout}
                className="nav-logout-btn"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={onLoginClick}
              className="nav-login-btn"
            >
              <Lock style={{ width: '16px', height: '16px' }} />
              LOGIN
            </button>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-mobile-btn"
        >
          {mobileMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
            <div className="nav-mobile-header">
              <div className="nav-logo">
                <Terminal className="nav-logo-icon" />
                <span className="nav-logo-text">PORTFOLIO</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="nav-mobile-close"
              >
                <X style={{ width: '24px', height: '24px' }} />
              </button>
            </div>

            <div className="nav-mobile-items">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-mobile-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon style={{ width: '20px', height: '20px' }} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="nav-mobile-user">
              {isLoggedIn ? (
                <>
                  <div className="nav-user-info">
                    <span className="nav-user-name">
                      {isAdmin && <span className="nav-admin-badge">ADMIN</span>} {username}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="nav-logout-btn"
                    style={{ width: '100%' }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  className="nav-login-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Lock style={{ width: '16px', height: '16px' }} />
                  LOGIN
                </button>
              )}
            </div>
          </div>
        )}
    </nav>
  );
}
