import React, { useState, useEffect } from "react";
import axios from "axios";

import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projet from "../components/Projet";
import ProfileSettings from "../components/Profile_settings";
import { useStagiaire } from "../context/StagiaireContext";

const StagiairesList = () => {
  const { idstagiaire } = useStagiaire();
  const [stagiaire, setStagiaire] = useState(); // Stocke les stagiaires
  const [loading, setLoading] = useState(true); // Indique si les données chargent
  const [error, setError] = useState(null);

  const [isEditingAboutMe, setIsEditingAboutMe] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingProjet, setIsEditingProjet] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
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
  const [profileForm, setProfileForm] = useState({
    email: "",
    fullName: "",
    cv: null,
    profilePhoto: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const openCvModal = () => setIsCvModalOpen(true);
  const closeCvModal = () => setIsCvModalOpen(false);

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

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000); // Réinitialise après 3 secondes

      return () => clearTimeout(timer); // Nettoie le timer
    }
  }, [successMessage, errorMessage]);

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

  const handleAddProjetClick = () => {
    setEditProjet({ title: "", description: "", projetImg: null });
    setIsEditingProjet(true); // Active le mode édition
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

      // Mettre à jour l'état local avec les nouvelles données
      setStagiaire((prev) => ({
        ...prev,
        experiences: prev.experiences.map((exp) =>
          exp.idExperience === experienceId ? response.data : exp
        ),
      }));

      setSuccessMessage("Expérience modifiée avec succès !");
      setIsEditingExperience(false); // Désactive le mode édition
    } catch (error) {
      setErrorMessage("Erreur lors de la modification de l'expérience.");
      console.error("Erreur lors de la modification de l'expérience :", error);
    }
  };

  const handleAddExperience = async (newExperience) => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/stagiaires/${stagiaire._id}/experiences`,
        newExperience
      );

      // Mettre à jour l'état local avec la nouvelle expérience
      setStagiaire((prev) => ({
        ...prev,
        experiences: [...prev.experiences, response.data],
      }));

      setSuccessMessage("Expérience ajoutée avec succès !");
      setIsEditingExperience(false); // Désactive le mode édition
      setEditExperience(null); // Réinitialise le formulaire
    } catch (error) {
      setErrorMessage("Erreur lors de l'ajout de l'expérience.");
      console.error("Erreur lors de l'ajout de l'expérience :", error);
    }
  };

  const handleDeleteExperience = async (experienceId) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette expérience ?")
    ) {
      try {
        await axios.delete(
          `http://localhost:8081/api/stagiaires/${stagiaire._id}/experiences/${experienceId}`
        );

        // Mettre à jour l'état local après suppression
        setStagiaire((prev) => ({
          ...prev,
          experiences: prev.experiences.filter(
            (exp) => exp.idExperience !== experienceId
          ),
        }));

        setSuccessMessage("Expérience supprimée avec succès !");
      } catch (error) {
        setErrorMessage("Erreur lors de la suppression de l'expérience.");
        console.error("Erreur lors de la suppression de l'expérience :", error);
      }
    }
  };

  const handleSaveProjet = async (stagiaireId, projetId, updatedProjet) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedProjet.title);
      formData.append("description", updatedProjet.description);
      if (updatedProjet.imageFile) {
        formData.append("projetImg", updatedProjet.imageFile); // Ajoutez l'image au FormData
      }

      const response = await axios.put(
        `http://localhost:8081/api/stagiaires/${stagiaireId}/projets/${projetId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Mettez à jour l'état local avec les nouvelles données
      setStagiaire((prev) => ({
        ...prev,
        projets: prev.projets.map((projet) =>
          projet.idProjet === projetId ? response.data : projet
        ),
      }));
      setIsEditingProjet(false); // Désactive le mode édition
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);
    }
  };

  const handleAddProjet = async (newProjet) => {
    try {
      const formData = new FormData();
      formData.append("title", newProjet.title);
      formData.append("description", newProjet.description);
      if (newProjet.imageFile) {
        formData.append("projetImg", newProjet.imageFile);
      }

      console.log("Données envoyées :", newProjet); // Log des données envoyées

      const response = await axios.post(
        `http://localhost:8081/api/stagiaires/${stagiaire._id}/projets`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Réponse de l'API :", response.data); // Log de la réponse

      // Mettre à jour l'état local avec le nouveau projet
      setStagiaire((prev) => ({
        ...prev,
        projets: [...prev.projets, response.data],
      }));

      // Afficher un message de succès
      setSuccessMessage("Projet ajouté avec succès !");
      setIsEditingProjet(false); // Désactive le mode édition
      setEditProjet(null); // Réinitialise le formulaire
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet :", error);
    }
  };

  const handleDeleteProjet = async (projetId) => {
    try {
      await axios.delete(
        `http://localhost:8081/api/stagiaires/${stagiaire._id}/projets/${projetId}`
      );

      // Mettre à jour l'état local en supprimant le projet
      setStagiaire((prev) => ({
        ...prev,
        projets: prev.projets.filter((projet) => projet.idProjet !== projetId),
      }));
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
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

  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProfileForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setProfileForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "stagiaire",
      JSON.stringify({
        email: profileForm.email,
        fullName: profileForm.fullName,
      })
    );
    if (profileForm.cv) {
      formData.append("cv", profileForm.cv);
    }
    if (profileForm.profilePhoto) {
      formData.append("profilePhoto", profileForm.profilePhoto);
    }

    try {
      const response = await axios.put(
        `http://localhost:8081/api/stagiaires/${stagiaire._id}/profile`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Mettre à jour l'état local avec les nouvelles données
      setStagiaire((prev) => ({
        ...prev,
        Email: response.data.Email,
        fullName: response.data.fullName,
        profilePhoto: response.data.profilePhoto,
        cv: response.data.cv,
      }));

      // Afficher un message de succès
      setSuccessMessage("Mise à jour réussie !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
      setErrorMessage("Une erreur s'est produite lors de la mise à jour.");
    }
  };

  //update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedForm = {
      ...editForm,
      languages: tempLanguages,
      competences: tempCompetences,
      projets: stagiaire.projets,
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
          `http://localhost:8081/api/stagiaires/${idstagiaire}`
        ); // URL de l'API
        setStagiaire(response.data);
        setLoading(false); // Arrête le chargement

        // Initialiser le formulaire avec les données du stagiaire
        setProfileForm({
          email: response.data.Email || "",
          fullName: response.data.fullName || "",
          cv: null, // Les fichiers ne peuvent pas être pré-remplis
          profilePhoto: null, // Les fichiers ne peuvent pas être pré-remplis
        });
      } catch (err) {
        console.error("Erreur lors de la récupération :", err);
        setError("Impossible de charger les stagiaires.");
        setLoading(false);
      }
    };

    fetchStagiaires(); // Appelle la fonction au chargement
  }, [idstagiaire]);

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
                        src={
                          stagiaire && stagiaire.profilePhoto
                            ? `http://localhost:8081/${stagiaire.profilePhoto}` // URL de la photo de profil
                            : "images/profile/profile.png" // Image par défaut
                        }
                        className="img-fluid rounded-circle"
                        alt="Profile"
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
                          <div className="col-xl-4 col-sm-4 prf-col">
                            <div className="profile-cv">
                              {stagiaire && stagiaire.cv ? (
                                <>
                               <button
  className="btn btn-modern"
  onClick={openCvModal}
  style={{
    position: 'absolute',
    right: '20px', // vous pouvez ajuster cette valeur selon vos besoins
    top: '20px', // ajustez la position verticale si nécessaire
    padding: '10px 20px', // ajoute un peu de padding pour un bouton plus grand
    backgroundColor: '#4CAF50', // couleur moderne
    color: 'white', // texte blanc
    border: 'none',
    borderRadius: '5px', // arrondir les coins
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // effet d'ombre
    transition: 'background-color 0.3s ease', // effet de transition pour le survol
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')} // couleur au survol
  onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')} // couleur par défaut
>
  Voir le CV
</button>

                                  {isCvModalOpen && (
                                    <div className="modal-overlay">
                                      <div className="modal-content">
                                        <button
                                          className="close-button"
                                          onClick={closeCvModal}
                                        >
                                          &times;
                                        </button>
                                        <iframe
                                          src={`http://localhost:8081/${stagiaire.cv}`}
                                          title="CV"
                                          className="cv-iframe"
                                        ></iframe>
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <p className="text-muted">CV non disponible</p>
                              )}
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
                            editExperience={editExperience}
                            handleChangeExperience={handleChangeExperience}
                            handleSaveExperience={handleSaveExperience}
                            handleCancel={handleCancel}
                            setEditExperience={setEditExperience}
                            setIsEditingExperience={setIsEditingExperience}
                            handleAddExperience={handleAddExperience}
                            handleDeleteExperience={handleDeleteExperience}
                            handleEditExperienceClick={
                              handleEditExperienceClick
                            } // Passez la fonction ici
                            successMessage={successMessage}
                            errorMessage={errorMessage}
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
                            handleEditProjetClick={handleEditProjetClick}
                            handleChangeProjet={handleChangeProjet}
                            editProjet={editProjet}
                            handleSaveProjet={handleSaveProjet}
                            handleCancel={handleCancel}
                            setEditProjet={setEditProjet}
                            handleAddProjet={handleAddProjet}
                            handleDeleteProjet={handleDeleteProjet}
                            setIsEditingProjet={setIsEditingProjet}
                            successMessage={successMessage} // Passez successMessage ici
                          />
                        </div>
                        <div id="profileSettings" className="tab-pane fade">
                          <ProfileSettings
                            profileForm={profileForm}
                            handleProfileChange={handleProfileChange}
                            handleProfileSubmit={handleProfileSubmit}
                            successMessage={successMessage}
                            errorMessage={errorMessage}
                          />
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
