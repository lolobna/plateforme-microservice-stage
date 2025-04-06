import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const AboutMe = ({
  stagiaire,
  editForm,
  isEditingAboutMe,
  handleChange,
  handleSubmit,
  handleCancel,
  handleEditClick,
  tempLanguages,
  tempCompetences,
  handleAddLanguage,
  handleRemoveLanguage,
  handleAddCompetence,
  handleRemoveCompetence,
  calculateAge,
}) => {
  const age = calculateAge(stagiaire.DateNaissance);

  if (isEditingAboutMe) {
    return (
      <div className="pt-3">
        <div className="settings-form">
          <h4 className="text-primary  ml-4  mb-4">Account Update</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Email</label>
                <input
                  type="email"
                  name="Email"
                  value={editForm.Email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={editForm.fullName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Domain</label>
                <input
                  type="text"
                  name="domain"
                  value={stagiaire.domain || ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <label>Description</label>
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>University</label>
                <input
                  type="text"
                  name="university"
                  value={editForm.university}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Education Level</label>
                <input
                  type="text"
                  name="educationLevel"
                  value={editForm.educationLevel}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Link Portfolio</label>
                <input
                  type="text"
                  name="portfolioLink"
                  value={stagiaire.portfolioLink || ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Date de Naissance</label>
                <input
                  type="date"
                  name="DateNaissance"
                  value={editForm.DateNaissance}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={editForm.address}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Photo de profile</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    // Gérer l'upload de l'image ici
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>CV</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    // Gérer l'upload du CV ici
                  }}
                />
              </div>
            </div>
            {/* =======================================================================================*/}
            {/* ==========================gESTION LANGAUAGES COMPETENCES===============================*/}
            {/* =======================================================================================*/}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Langues</label>
                <div className="current-languages mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    {tempLanguages.map((lang, index) => (
                      <span
                        key={index}
                        className="badge bg-primary p-2 d-flex align-items-center"
                      >
                        {lang.language}
                        <button
                          className="btn-close btn-close-white ms-2"
                          onClick={() => handleRemoveLanguage(lang)}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Nouvelle langue"
                  className="form-control"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const languageName = e.target.value.trim(); // On prend la valeur de l'input
                      if (languageName !== "") {
                        handleAddLanguage(languageName, "A+"); // Ajouter la langue seulement si non vide
                        e.target.value = "";
                      }
                    }
                  }}
                />
              </div>

              <div className="form-group col-md-6">
                <label>Compétences</label>
                <div className="current-languages mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    {tempCompetences.map((comp, index) => (
                      <span
                        key={index}
                        className="badge bg-primary p-2 d-flex align-items-center"
                      >
                        {comp.competenceName}
                        <button
                          className="btn-close btn-close-white ms-2"
                          onClick={() => handleRemoveCompetence(comp)}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nouvelle compétence"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const competenceName = e.target.value.trim();
                      if (competenceName !== "") {
                        handleAddCompetence(competenceName); // Ajouter la langue seulement si non vide
                        e.target.value = "";
                      }
                    }
                  }}
                />
              </div>
            </div>
            {/* =======================================================================================*/}
            {/* =======================================================================================*/}
            {/* =======================================================================================*/}
            <button
              className="btn btn-info  float-end"
              onClick={handleSubmit}
              type="button"
            >
              Modifier
            </button>
            <button
              className="btn btn-danger mr-2  float-end"
              type="button"
              onClick={() => handleCancel("AboutMe")}
            >
              Annuler
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="profile-about-me">
        <div className="pt-4 border-bottom-1 pb-4">
          <h4 className="text-primary">About Me</h4>
          <p>{stagiaire.description}</p>
        </div>
      </div>
      <div className="profile-skills pt-2 border-bottom-1 pb-2">
        <h4 className="text-primary mb-4">COMPETENCES</h4>
        {(stagiaire.competences || []).map((competence, index) => (
          <a
            href="javascript:void()"
            key={index}
            className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"
          >
            {competence.competenceName}
          </a>
        ))}
      </div>
      <div className="profile-lang pt-5 border-bottom-1 pb-5">
        <h4 className="text-primary mb-4">Language</h4>
        {(stagiaire.languages || []).map((language, index) => (
          <a
            key={index}
            href="javascript:void(0)"
            className="text-muted pr-3 f-s-16"
          >
            {language.language} - {language.level}
          </a>
        ))}
      </div>

      <div className="profile-personal-info">
        <h4 className="text-primary mb-4">Personal Information</h4>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Name <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.fullName}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Email <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.Email}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              University <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.university}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Education Level <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.educationLevel}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Age <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{age} Ans</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Location <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.address}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <h5 className="f-w-500">
              Phone <span className="pull-right">:</span>
            </h5>
          </div>
          <div className="col-9">
            <span>{stagiaire.phone}</span>
          </div>
        </div>
      </div>
      <button
        className="btn btn-secondary float-end"
        type="button"
        onClick={() => handleEditClick("AboutMe")}
      >
        modifier
      </button>
    </>
  );
};

export default AboutMe;
