import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Experience = ({
  stagiaire,
  isEditingExperience,
  handleEditExperienceClick,
  handleChangeExperience, // Fonction pour gérer les changements dans l'expérience
  editExperience, // Expérience en cours de modification
  handleSaveExperience, // Fonction pour sauvegarder l'expérience modifiée
  handleCancel, // Fonction pour annuler la modification
}) => {
  if (isEditingExperience && editExperience) {
    return (
      <div>
        <h4>Modifier l'expérience</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveExperience(
              stagiaire._id, // ID du stagiaire
              editExperience.idExperience, // ID de l'expérience
              editExperience // Données mises à jour
            );
          }}
        >
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={editExperience.title}
              onChange={handleChangeExperience}
            />
          </div>
          <div className="form-group">
            <label>Entreprise</label>
            <input
              type="text"
              name="company"
              className="form-control"
              value={editExperience.company}
              onChange={handleChangeExperience}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              value={editExperience.description}
              onChange={handleChangeExperience}
            />
          </div>
          <div className="form-group">
            <label>Date de début</label>
            <input
              type="date"
              className="form-control"
              name="startDate"
              value={editExperience.startDate}
              onChange={handleChangeExperience}
            />
          </div>
          <div className="form-group">
            <label>Date de fin</label>
            <input
              type="date"
              className="form-control"
              name="endDate"
              value={editExperience.endDate}
              onChange={handleChangeExperience}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sauvegarder
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCancel("Experience")}
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
        {stagiaire?.experiences?.map((experience, index) => (
          <div
            key={index}
            className="experience-item"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="resume-item pb-0"
              style={{
                borderLeft: "3px solid #007BFF",
                paddingLeft: "15px",
                position: "relative",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "-9px",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#007BFF",
                  borderRadius: "50%",
                }}
              ></div>
              <h4>{experience.title || "Titre non spécifié"}</h4>
              <h5>{experience.company || "Entreprise non spécifiée"}</h5>
              <p>
                <em>
                  {experience.startDate || "Durée non spécifiée"} -{" "}
                  {experience.endDate || "Durée non spécifiée"}
                </em>
              </p>
              <p>{experience.description || "Description non disponible"}</p>
            </div>
            <button
              className="btn btn-light"
              style={{
                marginRight: "8px",
                border: "none",
                backgroundColor: "transparent",
                padding: "0",
              }}
              onClick={() => handleEditExperienceClick(experience)} // Fonction pour modifier l'expérience
            >
              <FontAwesomeIcon
                icon={faPen}
                style={{ color: "#007BFF", fontSize: "16px" }}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
