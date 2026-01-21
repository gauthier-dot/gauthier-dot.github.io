import { useState } from "react";
import { Plus, MessageSquare, Send, X, Trash2 } from "lucide-react";
import "../style/Projects.css";

export function Projects({ isAdmin, isLoggedIn }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [commentText, setCommentText] = useState("");
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "JAVA 2D - Game",
      shortDesc: "'Skiv - Incarnez Batman ou Ekko et évitez les obstacles ! Retro/Arcade",
      description: "Un jeu en 2D avec un système de sauvegarde, un score, des personnalisations (personnage, map, etc..) et des ennemis. Le but du jeu est de survivre le plus longtemps possible en s'aidant des bonus et du dash.",
      image: "./img/JAVA_2D_game.png",
      technologies: ["JAVA", "PiskelApp.com"],
      comments: [
        { id: 1, author: "Alice_H", content: "Excellent projet ! Je suis addict à ce jeu !", date: "2025-12-15" }
      ]
    },
    {
      id: 2,
      title: "Frigo Intelligent",
      shortDesc: "Allier le marketing et le digital pour un produit moderne et innovant.",
      description: "Création d'un produit (frigo intelligent) de A à Z, comprenant tout l'aspect marketing, ressources humaines, développement et financier derrière le projet. Sans le lancement.",
      image: "./img/frigo_intelligent.png",
      technologies: ["Trello", "Excel", "PowerPoint"],
      comments: []
    },
    {
      id: 3,
      title: "Site WEB",
      shortDesc: "Site WEB connecté à un back-end fonctionnel et une db SQL.",
      description: "",
      image: "./img/nightlife_in_france.png",
      technologies: ["HTML", "CSS", "PHP", "SQL", "Javascript"],
      comments: []
    }
  ]);

  const handleAddProject = (e) => {
    e.preventDefault();
    alert("Projet ajouté ! (faux - connectez votre backend)");
    setShowAddForm(false);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      author: isAdmin ? "Admin" : "Guest",
      content: commentText,
      date: new Date().toISOString().split('T')[0]
    };
    
    setProjects(projects.map(p => 
      p.id === selectedProject.id 
        ? { ...p, comments: [...p.comments, newComment] }
        : p
    ));
    
    setSelectedProject({
      ...selectedProject,
      comments: [...selectedProject.comments, newComment]
    });
    
    setCommentText("");
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">
            {'>'} ls -la ~/projects/
          </h1>
          
          {isAdmin && (
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="project-btn"
            >
              <Plus style={{ width: '16px', height: '16px' }} />
              {showAddForm ? 'Annuler' : 'Ajouter projet'}
            </button>
          )}
        </div>

        {isAdmin && showAddForm && (
          <div className="admin-add-form">
            <h3 className="admin-title">{'>'} Nouveau projet</h3>
            <form onSubmit={handleAddProject} className="admin-form-grid">
              <div className="admin-field">
                <label className="admin-label">Titre:</label>
                <input type="text" className="admin-input" placeholder="Nom du projet" required />
              </div>
              <div className="admin-field">
                <label className="admin-label">Technologies:</label>
                <input type="text" className="admin-input" placeholder="React, Node.js..." required />
              </div>
              <div className="admin-field" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-label">Description courte:</label>
                <input type="text" className="admin-input" placeholder="Résumé en une ligne" required />
              </div>
              <div className="admin-field" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-label">Description complète:</label>
                <textarea className="admin-textarea" placeholder="Description détaillée..." required />
              </div>
              <div className="admin-field" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-label">URL de l'image:</label>
                <input type="url" className="admin-input" placeholder="https://..." required />
              </div>
              <button type="submit" className="admin-submit" style={{ gridColumn: '1 / -1' }}>
                Ajouter le projet
              </button>
            </form>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="project-btn">
                    <MessageSquare style={{ width: '16px', height: '16px' }} />
                    {project.comments.length} commentaires
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <>
              <div
                className="modal-overlay"
                onClick={() => setSelectedProject(null)}
              />
              <div
                className="modal-overlay"
                style={{ pointerEvents: 'none' }}
              >
                <div className="modal-content" style={{ pointerEvents: 'all' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="modal-close"
                  >
                    <X style={{ width: '20px', height: '20px' }} />
                  </button>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />

                  <div className="modal-body">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.description}</p>
                    
                    <div className="project-tags" style={{ marginBottom: '24px' }}>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="project-tag">{tech}</span>
                      ))}
                    </div>

                    {isAdmin && (
                      <button className="project-btn project-btn-delete" style={{ marginBottom: '24px' }}>
                        <Trash2 style={{ width: '16px', height: '16px' }} />
                        Supprimer le projet
                      </button>
                    )}

                    <div className="comments-section">
                      <h3 className="comments-title">
                        <MessageSquare style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                        Commentaires ({selectedProject.comments.length})
                      </h3>

                      {isLoggedIn ? (
                        <form onSubmit={handleAddComment} className="comment-form">
                          <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="comment-textarea"
                            placeholder="Votre commentaire..."
                            required
                          />
                          <button type="submit" className="comment-submit">
                            <Send style={{ width: '16px', height: '16px' }} />
                            Envoyer
                          </button>
                        </form>
                      ) : (
                        <div className="comment-form">
                          <p style={{ fontFamily: 'Courier New, monospace', color: 'rgba(0, 255, 0, 0.6)', fontSize: '14px' }}>
                            Connectez-vous pour laisser un commentaire
                          </p>
                        </div>
                      )}

                      <div className="comment-list">
                        {selectedProject.comments.length > 0 ? (
                          selectedProject.comments.map(comment => (
                            <div key={comment.id} className="comment-item">
                              <div className="comment-header">
                                <span className="comment-author">{'>'} {comment.author}</span>
                                <span className="comment-date">{comment.date}</span>
                              </div>
                              <p className="comment-text">{comment.content}</p>
                            </div>
                          ))
                        ) : (
                          <p className="comment-empty">Aucun commentaire pour le moment</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </div>
  );
}
