import { useState } from "react";
import { X, Terminal, Eye, EyeOff } from "lucide-react";
import "../style/Login.css";

export function Login({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="login-overlay"
            onClick={onClose}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1001
            }}
          >
            <div className="login-modal">
              <button onClick={onClose} className="login-close">
                <X style={{ width: '24px', height: '24px' }} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Terminal style={{ color: '#00ff00', width: '24px', height: '24px' }} />
                <h2 className="login-title">ACCESS_TERMINAL</h2>
              </div>
              <p className="login-subtitle">{'>'} Authentification requise</p>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="login-field">
                  <label className="login-label">{'>'} USERNAME:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                    placeholder="Qui êtes-vous?"
                    required
                  />
                </div>

                <div className="login-field">
                  <label className="login-label">{'>'} PASSWORD:</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login-input"
                      style={{ paddingRight: '40px' }}
                      placeholder="Mot de passe?"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(0, 255, 0, 0.6)',
                        cursor: 'pointer'
                      }}
                    >
                      {showPassword ? <EyeOff style={{ width: '16px', height: '16px' }} /> : <Eye style={{ width: '16px', height: '16px' }} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-submit"
                >
                  {'>'} AUTHENTICATE
                </button>

                <div className="login-hint">
                  Demo:<br />
                  Admin: admin / admin123<br />
                  User: guest / guest123
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
