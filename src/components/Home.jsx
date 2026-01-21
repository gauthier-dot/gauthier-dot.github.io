import { Code, Volleyball, Gamepad2, Music, FileCode, Smile, Eye, Lightbulb } from "lucide-react";
import "../style/Home.css";

export function Home() {
  const hobbies = [
    { icon: Code, title: "Coding", desc: "Projets perso, jeux, ctf, encore débutant..." },
    { icon: Volleyball, title: "Football", desc: "Grand fan de Tottenham Hotspurs... #COYS" },
    { icon: Gamepad2, title: "Gaming", desc: "FPS, RPG, Adventure, Die&Retry, Solo, Online, je suis un grand fan de jeux vidéo de tout genre" },
    { icon: Music, title: "Music", desc: "Rap FR - Pop - Rock ... j'ai + de 100 000 heures d'écoute sur Spotify  >:)" }
  ];
  const skills = [
    { icon: FileCode, title: "Programmation", desc: "PHP, CSS, HTML, JAVA, Javascript, Python... J'apprends encore mais je suis très impliqué dans ce domaine." },
    { icon: Smile, title: "Social", desc: "Gentil de nature, j'aime aider lorsque c'est nécessaire" },
    { icon: Eye, title: "Curiosité / Détermination", desc: "Curieux, toujours à la recherche de nouvelles compétences et déterminé dans tous ce que j'entreprends" },
    { icon: Lightbulb, title: "Apprentissage", desc: "J'apprends vite... Mais il me faut quand même du temps pour m'adapter, pour apprendre, pour comprendre, etc..." }
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-photo">
            <div className="hero-photo-glow" />
            <div className="hero-photo-border">
              <img
                src="./img/profil.jpg"
                alt="Profil pro"
                className="hero-photo-img"
              />
              <div className="hero-photo-gradient" />
            </div>
          </div>

          <div className="hero-info">
            <div>
              <div className="hero-terminal">{'>'} root@portfolio:~$</div>
              <h1 className="hero-title">G4UTH1ER 0TT1GN0N</h1>
              <div className="hero-subtitle">
                Étudiant | Développeur | 2006
              </div>
            </div>

            <div className="hero-quote">
              <p className="hero-quote-text">
                "Mir wëllen bleiwen waat mir sinn."
              </p>
            </div>
          </div>
        </div>

        <div className="description-section">
          <h2 className="description-title">{'>'} whoami</h2>
          <div className="description-content">
            <p>
              Jeune étudiant en école de commerce, plus spécifiquement en programme TEMA (technology-management),
              je suis plus particulièrement attiré par le côté innovant et la technologie. J'ai eu la chance d'explorer
              le monde de la programmation lors de mon semestre d'immersion, qui m'a permit de réaliser des projets
              en utilisant différents languages informatique. Grâce à cela, je me vois capable de coder des jeux en 2D,
              de créer des sites complets et modernes, ou encore créer de simples programmes en Python ou bash. 
            </p>
            <p>
              J'ai cependant encore beaucoup à apprendre à ce sujet, étant donné la vastitude de l'univers du codage malgré
              les idées reçues, mais je pourrai compter sur une grande part de curiosité accompagnée de détermination pour continuer
              à découvrir de nouveaux languages et m'améliorer dans ce domaine.
            </p>
          </div>
        </div>

        <div className="hobbies-section">
          <h2 className="hobbies-title">{'>'} ls ~/hobbies</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, idx) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.title}
                  className="hobby-card"
                >
                  <Icon className="hobby-icon" />
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-desc">{hobby.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hobbies-section">
          <h2 className="hobbies-title">{'>'} ls ~/skills</h2>
          <div className="hobbies-grid">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="hobby-card"
                >
                  <Icon className="hobby-icon" />
                  <h3 className="hobby-title">{skill.title}</h3>
                  <p className="hobby-desc">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
