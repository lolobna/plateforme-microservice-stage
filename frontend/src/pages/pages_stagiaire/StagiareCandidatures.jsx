import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStagiaire } from "../../context/StagiaireContext";

const StagiaireCandidature = () => {
  const { idstagiaire } = useParams(); // Récupère l'ID depuis l'URL
  const { setIdStagiaire } = useStagiaire(); // Met à jour l'ID dans le contexte

  useEffect(() => {
    if (!idstagiaire) {
      console.error("idstagiaire est introuvable dans l'URL.");
    } else {
      console.log("idstagiaire récupéré :", idstagiaire);
    }

    if (!setIdStagiaire) {
      console.error("setIdStagiaire n'est pas défini dans le contexte.");
    } else {
      setIdStagiaire(idstagiaire); // Met à jour l'ID dans le contexte
    }
  }, [idstagiaire, setIdStagiaire]);



  return (
<div className="content-body">


<div className="container2">
  <h2>Suivre mes Candidaturest</h2>
  <div className="table-header">
    <div>Entreprise</div>
    <div>stage</div>
    <div>Competence requises</div>
    <div>statut</div>
    <div>date de postule </div>
  </div>
  <div className="row">
    <div className="assigned">
      <img src="https://th.bing.com/th/id/OIP.2cRj6TSsb2aHDYH5mt6IYgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Minecraft App" />
      <div>
        <strong>Microsoft </strong>
        <p>Developpemnt</p>
      </div>
    </div>
    <div className="stage-info">
       stage en developpement web frontend 
      <span className="stage-badge">Voir le stage poste</span>
    </div>

    <div className="skills">
      <span className="skill-badge">Spring Boot</span>
      <span className="skill-badge">Java</span>
    </div>

    <div><span className="tag high">en cours</span></div>
    <div>2024/02/02</div>
  </div>
  <div className="row">
    <div className="assigned">
      <img src="https://th.bing.com/th/id/OIP.2cRj6TSsb2aHDYH5mt6IYgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Minecraft App" />
      <div>
        <strong>Microsoft </strong>
        <p>Developpemnt</p>
      </div>
    </div>
    <div className="stage-info">
       stage en developpement web frontend 
      <span className="stage-badge">Voir le stage poste</span>
    </div>

    <div className="skills">
      <span className="skill-badge">Spring Boot</span>
      <span className="skill-badge">Java</span>
    </div>

    <div><span className="tag high">en cours</span></div>
    <div>2024/02/02</div>
  </div>
  <div className="row">
    <div className="assigned">
      <img src="https://th.bing.com/th/id/OIP.2cRj6TSsb2aHDYH5mt6IYgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Minecraft App" />
      <div>
        <strong>Microsoft </strong>
        <p>Developpemnt</p>
      </div>
    </div>
    <div className="stage-info">
      
       stage en developpement web frontend 
      <span className="stage-badge">Voir le stage poste</span>
    </div>

    <div className="skills">
      <span className="skill-badge">Spring Boot</span>
      <span className="skill-badge">Java</span>
    </div>

    <div><span className="tag high">en cours</span></div>
    <div>2024/02/02</div>
  </div>
  <div className="row">
    <div className="assigned">
      <img src="https://th.bing.com/th/id/OIP.2cRj6TSsb2aHDYH5mt6IYgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Minecraft App" />
      <div>
        <strong>Microsoft </strong>
        <p>Developpemnt</p>
      </div>
    </div>
    <div className="stage-info">
       stage en developpement web frontend 
      <span className="stage-badge">Voir le stage poste</span>
    </div>

    <div className="skills">
      <span className="skill-badge">Spring Boot</span>
      <span className="skill-badge">Java</span>
    </div>

    <div><span className="tag high">en cours</span></div>
    <div>2024/02/02</div>
  </div>

</div>


</div>

  
  );
};

export default StagiaireCandidature;
