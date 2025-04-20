import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStagiaire } from "../context/StagiaireContext";

const Stagiaire_stageRealises = () => {
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

<div className="content-body p-4">
  <h3 className="mb-4 fw-bold text-center">Stages Réalisés</h3>
  <div className="row">
    {/* Exemple de carte */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100 border-0">
        <div className="card-body">
          <h5 className="card-title text-primary">Société ABC</h5>
          <p className="card-text mb-1">
            <strong>Localisation:</strong> Casablanca
          </p>
          <p className="card-text mb-1">
            <strong>Durée:</strong> 3 mois
          </p>
          <p className="card-text mb-1">
            <strong>Type:</strong> Présentiel
          </p>
          <p className="card-text text-muted small mb-0">
            Réalisé en 2024
          </p>
        </div>
      </div>
    </div>

    {/* Copie cette carte autant de fois que nécessaire */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100 border-0">
        <div className="card-body">
          <h5 className="card-title text-primary">InnoTech</h5>
          <p className="card-text mb-1">
            <strong>Localisation:</strong> Rabat
          </p>
          <p className="card-text mb-1">
            <strong>Durée:</strong> 2 mois
          </p>
          <p className="card-text mb-1">
            <strong>Type:</strong> Télétravail
          </p>
          <p className="card-text text-muted small mb-0">
            Réalisé en 2023
          </p>
        </div>
      </div>
    </div>
  </div>
</div>




</div>

  
  );
};

export default Stagiaire_stageRealises;
