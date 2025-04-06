import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Projet = ({
  stagiaire,
  isEditingProjet,
  handleEditProjetClick,
  handleChangeProjet, // Fonction pour gérer les changements dans l'expérience
  editProjet, // Expérience en cours de modification
  handleSaveProjet, // Fonction pour sauvegarder l'expérience modifiée
  handleCancel, // Fonction pour annuler la modification
}) => {
  if (isEditingProjet && editProjet) {
    return (
      <div>
        <h4>Modifier le projet</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveProjet(
              stagiaire._id, // ID du stagiaire
              editProjet.idProjet, // ID de l'expérience
              editProjet // Données mises à jour
            );
          }}
        >
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={editProjet.title}
              onChange={handleChangeProjet}
            />
          </div>
          <div className="form-group">
            <label>image</label>
           
            <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    // Gérer l'upload de l'image ici
                  }}
                />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              value={editProjet.description}
              onChange={handleChangeProjet}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Sauvegarder
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCancel("Projet")}
          >
            Annuler
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="col-lg-11">
        <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
          {stagiaire?.projets?.map((projet, index) => (
            <div key={index} className="portfolio-item py-5 border-bottom">
              <div className="row g-4 align-items-center ">
                <div className="col-xl-6">
                  <h4 className="text-body">
                    {projet.title || "Type de projet"}
                  </h4>
                  <h1 className="display-6 mb-0">
                    {projet.description || "Titre du projet"}
                  </h1>
                  {/*{projet.technologies && (
                                                <div className="mt-3">
                                                  <div className="d-flex flex-wrap">
                                                    {projet.technologies.map((tech, techIndex) => (
                                                      <span key={techIndex} className="badge bg-light text-dark me-2 mb-2">
                                                        {tech}
                                                      </span>
                                                    ))}
                                                  </div>
                                                </div>
                                              )} */}
                </div>

                <div className="col-9 col-xl-4">
                  <div className="portfolio-img">
                    <div className="portfolio-img-inner">
                      <img
                        src={projet.imageUrl || "images/profile/profile.png"}
                        className="img-fluid"
                        alt={projet.titre || "Projet"}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-3 col-xl-2">
                  <div className="view-img">
                    <button
                      className="btn btn-light"
                      style={{
                        marginRight: "8px",
                        border: "none",
                        backgroundColor: "transparent",
                        padding: "0",
                      }}
                      onClick={() => handleEditProjetClick(projet)} // Fonction pour modifier l'expérience
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        style={{ color: "#007BFF", fontSize: "16px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projet;
