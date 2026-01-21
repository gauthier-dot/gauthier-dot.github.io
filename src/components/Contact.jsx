import { Mail, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import "../style/Contact.css";

export function Contact() {
  const [state, handleSubmit] = useForm("mjggjogw");

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/gauthier-dot", handle: "@gauthier-dot" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/gauthier-ottignon/", handle: "Gauthier Ottignon" }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">
          {'>'} ./contact.sh
        </h1>
        <p className="contact-subtitle">{'>'} Envoyez-moi un message</p>

        {state.succeeded ? (
          <div
            className="sent-message"
            style={{
              border: '2px solid #00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <CheckCircle style={{ width: '64px', height: '64px', color: '#00ff00', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '20px', fontFamily: 'Courier New, monospace', color: '#00ff00', marginBottom: '8px' }}>
              Message envoyé !
            </h3>
          </div>
        ) : (
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="email" className="contact-label">
                  {'>'} Email:
                </label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  className="contact-input"
                  placeholder="votre@email.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="message" className="contact-label">
                  {'>'} Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Votre message..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" className="contact-submit" disabled={state.submitting}>
                <Send style={{ width: '16px', height: '16px' }} />
                Envoyer le message
              </button>
            </form>
          </div>
        )}

        <div className="contact-info">
          <h3 className="contact-info-title">
            <Mail className="contact-info-icon" style={{ display: 'inline', marginRight: '8px' }} />
            Contact & Réseaux
          </h3>
          <div className="contact-info-item">
            <Mail className="contact-info-icon" />
            <a href="mailto:gauthier.ottignon.24@neoma-bs.com" style={{ color: '#00ff00', textDecoration: 'none' }}>
              gauthier.ottignon.24@neoma-bs.com
            </a>
          </div>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                style={{ textDecoration: 'none' }}
              >
                <Icon className="contact-info-icon" />
                <div>
                  <div>{social.label}: {social.handle}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
