import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projet from "./Projet";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const StagiairesList = () => {
  const [stagiaire, setStagiaire] = useState(); // Stocke les stagiaires
  const [loading, setLoading] = useState(true); // Indique si les données chargent
  const [error, setError] = useState(null);

  const [isEditingAboutMe, setIsEditingAboutMe] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingProjet, setIsEditingProjet] = useState(false);
  const [editForm, setEditForm] = useState({
    description: "",
    fullName: "",
    Email: "",
    university: "",
    educationLevel: "",
    DateNaissance: "",
    address: "",
    phone: "",
    competences: [],
    languages: [],
  });
  const [tempLanguages, setTempLanguages] = useState([]);
  const [tempCompetences, setTempCompetences] = useState([]);
  const [editExperience, setEditExperience] = useState(null);
  const [editProjet, setEditProjet] = useState(null);

  useEffect(() => {
    if (stagiaire) {
      const languages = [...(stagiaire.languages || [])];
      const competences = [...(stagiaire.competences || [])];

      setEditForm({
        description: stagiaire.description || "",
        fullName: stagiaire.fullName || "",
        Email: stagiaire.Email || "",
        university: stagiaire.university || "",
        educationLevel: stagiaire.educationLevel || "",
        DateNaissance: stagiaire.DateNaissance || "",
        address: stagiaire.address || "",
        phone: stagiaire.phone || "",
        competences,
        languages,
      });

      setTempLanguages(languages);
      setTempCompetences(competences);
    }
  }, [stagiaire]);

  const handleAddLanguage = (languageName, level) => {
    // Vérifier si le nom de la langue et le niveau ne sont pas vides

    if (languageName.trim() !== "" && level.trim() !== "") {
      const newLanguage = { language: languageName, level }; // Fix: use `language` instead of `languageName`

      // Vérifier si la langue avec ce niveau existe déjà
      const languageExists = tempLanguages.some(
        (lang) =>
          lang.language === newLanguage.languageName &&
          lang.level === newLanguage.level // Fix: compare using `language`
      );

      // Si la langue et le niveau ne sont pas déjà présents, on l'ajoute
      if (!languageExists) {
        setTempLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
      } else {
        console.log("La langue avec ce niveau existe déjà.");
      }
    } else {
      console.log("Le nom de la langue ou le niveau est vide.");
    }
  };

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // Si la date d'anniversaire n'est pas encore passée cette année
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleAddCompetence = (competenceName) => {
    console.log("Ajout de compétence:", competenceName);
    // Vérifier que comp n'est pas vide, null, ou seulement des espaces
    if (competenceName.trim() !== "") {
      const level = "A+";
      const newComp = { competenceName, level };
      setTempCompetences((prev) => [...prev, newComp]);
    }
  };

  const handleRemoveLanguage = (lang) => {
    setTempLanguages((prev) => prev.filter((l) => l !== lang));
  };

  const handleRemoveCompetence = (comp) => {
    setTempCompetences((prev) => prev.filter((c) => c !== comp));
  };

  const handleEditClick = () => {
    setIsEditingAboutMe(true);
  };
  const handleEditExperienceClick = (experience) => {
    setIsEditingExperience(true); // Active le mode édition
    setEditExperience(experience); // Stocke l'expérience à modifier
  };
  const handleEditProjetClick = (projet) => {
    setIsEditingProjet(true); // Active le mode édition
    setEditProjet(projet); // Stocke l'expérience à modifier
  };

  const handleSaveExperience = async (
    stagiaireId,
    experienceId,
    updatedExperience
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/api/stagiaires/${stagiaireId}/experiences/${experienceId}`,
        updatedExperience
      );
      console.log("Expérience mise à jour :", response.data);
      console.log("Stagiaire ID:", stagiaireId);
      console.log("Experience ID:", experienceId);
      console.log("Données mises à jour :", updatedExperience);

      // Mettez à jour l'état local avec les nouvelles données
      setStagiaire((prev) => ({
        ...prev,
        experiences: prev.experiences.map((exp) =>
          exp.idExperience === experienceId ? response.data : exp
        ),
      }));
      setIsEditingExperience(false); // Désactive le mode édition
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'expérience :", error);
    }
  };

  const handleSaveProjet = async (stagiaireId, projetId, updatedProjet) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/api/stagiaires/${stagiaireId}/projets/${projetId}`,
        updatedProjet
      );
      console.log("Expérience mise à jour :", response.data);
      console.log("Stagiaire ID:", stagiaireId);
      console.log("Experience ID:", projetId);
      console.log("Données mises à jour :", updatedProjet);

      // Mettez à jour l'état local avec les nouvelles données
      setStagiaire((prev) => ({
        ...prev,
        projets: prev.projets.map((exp) =>
          exp.idProjet === projetId ? response.data : exp
        ),
      }));
      setIsEditingProjet(false); // Désactive le mode édition
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'projet :", error);
    }
  };

  const handleCancel = (sectionName) => {
    if (sectionName === "AboutMe") {
      // Réinitialiser les listes temporaires aux valeurs d'origine
      setTempLanguages(stagiaire.languages || []);
      setTempCompetences(stagiaire.competences || []);
      setIsEditingAboutMe(false);
    } else if (sectionName === "Experience") {
      setIsEditingExperience(false);
    } else if (sectionName === "Projet") {
      setIsEditingProjet(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setEditExperience((prev) => ({
      ...prev,
      [name]: value, // Met à jour uniquement le champ modifié
    }));
  };

  const handleChangeProjet = (e) => {
    const { name, value } = e.target;
    setEditProjet((prev) => ({
      ...prev,
      [name]: value, // Met à jour uniquement le champ modifié
    }));
  };

  //update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedForm = {
      ...editForm,
      languages: tempLanguages,
      competences: tempCompetences,
      experiences: stagiaire.experiences || [],
    };

    try {
      const response = await axios.put(
        `http://localhost:8081/api/stagiaires/${stagiaire._id}`,
        updatedForm
      );
      setStagiaire(response.data);
      setIsEditingAboutMe(false);
    } catch (error) {
      console.error("Error updating stagiaire:", error);
      setError("An error occurred while updating the information.");
    }
  };

  //recuperer
  useEffect(() => {
    // Fonction pour récupérer les stagiaires via l'API
    const fetchStagiaires = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/stagiaires"
        ); // URL de l'API
        setStagiaire(response.data[0]); // Mets à jour les stagiaires
        setLoading(false); // Arrête le chargement
      } catch (err) {
        console.error(" lors de la récupération :", err);
        setError("Impossible de charger les stagiaires.");
        setLoading(false);
      }
    };

    fetchStagiaires(); // Appelle la fonction au chargement
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="profile">
                <div className="profile-head">
                  <div className="photo-content">
                    <div className="cover-photo" />
                    <div className="profile-photo">
                      <img
                        src="images/profile/profile.png"
                        className="img-fluid rounded-circle"
                        alt
                      />
                    </div>
                  </div>
                  <div className="profile-info">
                    <div className="row justify-content-center">
                      <div className="col-xl-8">
                        <div className="row">
                          <div className="col-xl-4 col-sm-4 border-right-1 prf-col">
                            <div className="profile-name">
                              <h4 className="text-primary">
                                {stagiaire.fullName}
                              </h4>
                              <p>{stagiaire.domain}</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-4 border-right-1 prf-col">
                            <div className="profile-email">
                              <h4 className="text-muted">{stagiaire.Email}</h4>
                              <p>Email</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="profile-tab">
                    <div className="custom-tab-1">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            href="#about-me"
                            data-toggle="tab"
                            className="nav-link active show"
                          >
                            About Me
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#Experience"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            Experience
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#projets"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            projets
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#profileSettings"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            profile Settings
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="Experience" className="tab-pane fade mt-4">
                          <Experience
                            stagiaire={stagiaire}
                            isEditingExperience={isEditingExperience}
                            editForm={editForm}
                            editExperience={editExperience}
                            handleChangeExperience={handleChangeExperience}
                            handleSubmit={handleSubmit}
                            handleCancel={handleCancel}
                            handleEditExperienceClick={
                              handleEditExperienceClick
                            }
                            handleSaveExperience={handleSaveExperience}
                          />
                        </div>

                        <div
                          id="about-me"
                          className="tab-pane fade active show"
                        >
                          <AboutMe
                            stagiaire={stagiaire}
                            isEditingAboutMe={isEditingAboutMe}
                            editForm={editForm}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleCancel={handleCancel}
                            handleEditClick={handleEditClick}
                            tempLanguages={tempLanguages}
                            tempCompetences={tempCompetences}
                            handleAddLanguage={handleAddLanguage}
                            handleRemoveLanguage={handleRemoveLanguage}
                            handleAddCompetence={handleAddCompetence}
                            handleRemoveCompetence={handleRemoveCompetence}
                            calculateAge={calculateAge}
                          />
                        </div>
                        <div id="projets" className="tab-pane fade">
                          <Projet
                            stagiaire={stagiaire}
                            isEditingProjet={isEditingProjet}
                            editForm={editForm}
                            editProjet={editProjet}
                            handleChangeProjet={handleChangeProjet}
                            handleSubmit={handleSubmit}
                            handleCancel={handleCancel}
                            handleEditProjetClick={handleEditProjetClick}
                            handleSaveProjet={handleSaveProjet}
                          />
                        </div>
                        <div id="profileSettings" className="tab-pane fade">
                          <div className="pt-3">
                            <div className="settings-form">
                              <h4 className="text-primary">Account Setting</h4>
                              <form>
                                <div className="form-row">
                                  <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label> Full Name</label>
                                    <input
                                      type="text"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label> Fillierer</label>
                                    <input
                                      type="text"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-md-3">
                                    <label> profile </label>
                                    <input
                                      type="file"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-md-3">
                                    <img
                                      src="images/profile/profile.png"
                                      className="img-fluid rounded-circle w-30"
                                      alt=""
                                      
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input
                                      type="password"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label> confirmer Password</label>
                                    <input
                                      type="password"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>

                                </div>
                             
                              
                                <div className="form-group">
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="gridCheck"
                                    />
                                    <label
                                      htmlFor="gridCheck"
                                      className="form-check-label"
                                    >
                                      Check me out
                                    </label>
                                  </div>
                                </div>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Sign in
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StagiairesList;
