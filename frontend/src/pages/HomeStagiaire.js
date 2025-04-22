import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStagiaire } from "../context/StagiaireContext";

const HomeStagiaire = ({ jobs, filteredJobs, setJobs, setFilteredJobs }) => {
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

    // Simulez une API ou utilisez une vraie API pour récupérer les données
    const fetchJobs = async () => {
      const data = [
        {
          id: 1,
          title: "Stage - Développeur Web Front-End",
          location: "Casablanca",
          domain: "Developpement",
          preHire: "Oui",
          paid: "Oui",
          type: "Télétravail",
          duration: "4 mois",
        },
        {
          id: 2,
          title: "Stage - Marketing Digital",
          location: "Rabat",
          domain: "Marketing",
          preHire: "Non",
          paid: "Non",
          type: "Présentiel",
          duration: "3 mois",
        },
      ];
      setJobs(data);
      setFilteredJobs(data);
    };

    fetchJobs();
  }, [idstagiaire, setIdStagiaire, setJobs, setFilteredJobs]);

  return (
    <div className="content-body">
      <div className="card-grid">
        {filteredJobs.map((job) => (
          <div className="job-card">
            <a key={job.id} href="/entreprise" className="job-card-link">
              <div className="job-left">
                <img src="https://i.pravatar.cc/80?img=20" alt="Auteur" />
                <h6>Nom de l'entreprise</h6>
                <span className="category-tag">{job.domain}</span>
                <div className="location">
                  <i className="fa-solid fa-location-dot" /> {job.location}
                </div>
                <div className="type">
                  <i className="fa-solid fa-laptop-house" /> {job.type}
                </div>
              </div>
            </a>
            <div className="job-right">
              <h2>
                <i className="fa-solid fa-briefcase"></i> {job.title}
              </h2>
              <p>
                Intègre notre équipe tech pour développer de nouvelles
                interfaces web avec React et Tailwind. Intègre notre équipe tech
                pour développer de nouvelles interfaces web avec React et
                Tailwind. Intègre notre équipe tech pour développer de nouvelles
                interfaces web avec React et Tailwind. Intègre notre équipe tech
                pour développer de nouvelles interfaces web avec React et
                Tailwind.
              </p>

              <div className="tags">
                <span>
                  <i className="fa-solid fa-circle-check green-icon" /> Rémunéré
                  : {job.paid}
                </span>
                <span>
                  <i className="fa-solid fa-user-check" /> Pré-embauche :{" "}
                  {job.preHire}
                </span>
                <span>
                  <i className="fa-regular fa-calendar gray-icon" /> Durée :{" "}
                  {job.duration}
                </span>
                <span>
                  <i className="fa-regular fa-calendar gray-icon" /> Début : 4
                  mai
                </span>
              </div>

              <div className="Requiredskills">
                <strong>Compétences requises :</strong>
                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>API REST</li>
                </ul>
              </div>

              <div className="card-footer">
                <button className="apply-btn">Postuler</button>
                <i
                  className="fa-regular fa-bookmark save-icon"
                  title="Enregistrer l'offre"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStagiaire;
