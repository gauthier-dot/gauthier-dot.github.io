import { useState } from "react";
import { GraduationCap, Plus } from "lucide-react";
import "../style/Education.css";

export function Education({ isAdmin }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEdu, setNewEdu] = useState({
    year: "",
    degree: "",
    institution: "",
    description: ""
  });
  
  const [educations] = useState([
    {
      id: 1,
      year: "2023-2024",
      degree: "Baccalauréat Européen",
      institution: "Ecole Européenne Luxembourg II",
      description: "Spécialisation : Économie, Mathématiques, Histoire, Langues."
    },
    {
      id: 2,
      year: "2024-2029 (EN COURS)",
      degree: "Master en Technologies & Management",
      institution: "NEOMA Business School - TEMA",
      description: "Études de commerce incluant des sujets sur la technologie, des stages et des semestres d'immersion dans d'autres écoles en France et à l'international."
    },
    {
      id: 3,
      year: "2025",
      degree: "Première Immersion",
      institution: "Epitech",
      description: "Semestre d'immersion dans une école de codage incluant des cours sur Python, PHP, HTML/CSS-Javascript, JAVA, SQL, Ubuntu/Linux."
    }
  ]);

  const handleAddEducation = (e) => {
    e.preventDefault();
    alert("Étude ajoutée ! (Pour de faux, pas de back-end)");
    setShowAddForm(false);
    setNewEdu({ year: "", degree: "", institution: "", description: "" });
  };

  return (
    <div className="education-page">
      <div className="education-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <h1 className="education-title">
            {'>'} cat ~/education.log
          </h1>
          
          {isAdmin && (
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="admin-submit"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
                <Plus style={{ width: '16px', height: '16px' }} />
              {showAddForm ? 'Annuler' : 'Ajouter parcours'}
            </button>
          )}
        </div>

        {isAdmin && showAddForm && (
          <div className="admin-section">
            <h3 className="admin-title">{'>'} Ajouter un nouveau parcours</h3>
            <form onSubmit={handleAddEducation} className="admin-form">
              <div className="admin-field">
                <label className="admin-label">Année:</label>
                <input
                  type="text"
                  value={newEdu.year}
                  onChange={(e) => setNewEdu({ ...newEdu, year: e.target.value })}
                  className="admin-input"
                  placeholder="Ex: 2020-2022"
                  required
                />
              </div>
              <div className="admin-field">
                <label className="admin-label">Diplôme:</label>
                <input
                  type="text"
                  value={newEdu.degree}
                  onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
                  className="admin-input"
                  placeholder="Ex: Master Informatique"
                  required
                />
              </div>
              <div className="admin-field">
                <label className="admin-label">Établissement:</label>
                <input
                  type="text"
                  value={newEdu.institution}
                  onChange={(e) => setNewEdu({ ...newEdu, institution: e.target.value })}
                  className="admin-input"
                  placeholder="Ex: Université de Paris"
                  required
                />
              </div>
              <div className="admin-field">
                <label className="admin-label">Description:</label>
                <textarea
                  value={newEdu.description}
                  onChange={(e) => setNewEdu({ ...newEdu, description: e.target.value })}
                  className="admin-textarea"
                  placeholder="Description du parcours..."
                  required
                />
              </div>
              <button type="submit" className="admin-submit">
                Ajouter
              </button>
            </form>
          </div>
        )}

        <div className="timeline">
          {educations.map((edu, index) => (
            <div key={edu.id} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                    <div className="timeline-year">
                        {'>'} {edu.year}
                    </div>
                    <h3 className="timeline-degree">
                    <GraduationCap style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                    {edu.degree}
                    </h3>
                    <div className="timeline-school">{edu.institution}</div>
                    <p className="timeline-description">{edu.description}</p>
                    
                    {isAdmin && (
                    <button className="delete-btn">
                        Supprimer
                        </button>                
                    )}              
                </div>          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
