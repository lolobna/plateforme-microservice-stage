import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStagiaire } from "../../context/StagiaireContext";

const HomeStagiaire = ({ jobs, setJobs, filteredJobs, setFilteredJobs }) => {

  const { idstagiaire } = useParams();
  const { setIdStagiaire } = useStagiaire();
  const [stagiaireCompetencies, setStagiaireCompetencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");  // Ajout de l'état pour la recherche

  useEffect(() => {
    const fetchData = async () => {
      if (!idstagiaire) {
        console.error("idstagiaire manquant");
        return;
      }

      setIdStagiaire(idstagiaire);

      try {
        // 🔽 1. Récupérer les compétences du stagiaire depuis l’API
        const res = await fetch(`http://localhost:8080/api/stagiaires/${idstagiaire}/competences`);
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des compétences");
        }

        const competences = await res.json();
        const competencies = competences.map((c) => c.libelle || c.competenceName);
        setStagiaireCompetencies(competencies);

        // 🔽 2. Exemple d’offres (simulées ici)
        const data = [
          {
            id: 1,
            title: "Stage - Développeur Web Front-End",
            location: "Rabat",
            domain: "Développement",
            preHire: "Oui",
            paid: "Oui",
            type: "Télétravail",
            duration: "4 mois",
            requiredSkills: ["React", "Tailwind CSS"],
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
            requiredSkills: ["SEO", "Google Analytics"],
          },
          {
            id: 3,
            title: "Stage - Développeur Web Front-End",
            location: "Casablanca",
            domain: "Développement",
            preHire: "Oui",
            paid: "Non",
            type: "Présentiel",
            duration: "4 mois",
            requiredSkills: ["SEO", "React", "Tailwind CSS"],
          },
          {
            id: 4,
            title: "Stage - Marketing Digital",
            location: "Rabat",
            domain: "Marketing",
            preHire: "Oui",
            paid: "Non",
            type: "Télétravail",
            duration: "3 mois",
            requiredSkills: ["React", "Google Analytics"],
          },
        ];

        // 🔽 3. Calculer le score pour chaque offre en fonction des compétences
        const scoredJobs = data.map((job) => {
          const matchedSkills = job.requiredSkills.filter((skill) =>
            competencies.includes(skill)
          );
          const score = matchedSkills.length; // Le score est basé sur le nombre de compétences correspondantes
          return { ...job, score };
        });

        // 🔽 4. Trier les offres en fonction du score
        scoredJobs.sort((a, b) => b.score - a.score); // Tri décroissant

        setJobs(data);
        setFilteredJobs(scoredJobs);
      } catch (error) {
        console.error("Erreur dans fetchData :", error);
      }
    };

    fetchData();
  }, [idstagiaire, setIdStagiaire, setJobs, setFilteredJobs]);

  // Fonction de filtrage et de recherche
  const filterAndSearchJobs = () => {
    // Appliquer un filtrage selon le terme de recherche
    const filtered = filteredJobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requiredSkills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

    return filtered;
  };

  return (
    <div className="content-body">
     
      <div className="card-grid">
        {filterAndSearchJobs().map((job) => (
          <div className="job-card" key={job.id}>
            <a href="/entreprise" className="job-card-link">
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
                Intègre notre équipe tech pour développer de nouvelles interfaces web avec React et Tailwind.
              </p>
              <div className="tags">
                <span>
                  <i className="fa-solid fa-circle-check green-icon" /> Rémunéré : {job.paid}
                </span>
                <span>
                  <i className="fa-solid fa-user-check" /> Pré-embauche : {job.preHire}
                </span>
                <span>
                  <i className="fa-regular fa-calendar gray-icon" /> Durée : {job.duration}
                </span>
                <span>
                  <i className="fa-regular fa-calendar gray-icon" /> Début : 4 mai
                </span>
              </div>

              <div className="Requiredskills">
                <strong>Compétences requises :</strong>
                <ul>
                  {job.requiredSkills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <button className="apply-btn">Postuler</button>
                <i className="fa-regular fa-bookmark save-icon" title="Enregistrer l'offre"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStagiaire;
