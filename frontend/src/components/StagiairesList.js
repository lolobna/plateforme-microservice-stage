import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const StagiairesList = () => {
  const [stagiaire, setStagiaire] = useState(); // Stocke les stagiaires
  const [loading, setLoading] = useState(true);     // Indique si les données chargent
  const [error, setError] = useState(null);         // Gère les erreurs

  useEffect(() => {
    // Fonction pour récupérer les stagiaires via l'API
    const fetchStagiaires = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/stagiaires"); // URL de l'API
        setStagiaire(response.data[0]); // Mets à jour les stagiaires
        setLoading(false);            // Arrête le chargement
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
                <img src="images/profile/profile.png" className="img-fluid rounded-circle" alt />
              </div>
            </div>
            <div className="profile-info">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="row">
                    <div className="col-xl-4 col-sm-4 border-right-1 prf-col">
                      <div className="profile-name">
                        <h4 className="text-primary">{stagiaire.fullName}</h4>
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
                  <li className="nav-item"><a href="#about-me" data-toggle="tab" className="nav-link active show">About Me</a>
                  </li>
                  <li className="nav-item"><a href="#Experience" data-toggle="tab" className="nav-link">Experience</a>
                  </li>
                  <li className="nav-item"><a href="#projets" data-toggle="tab" className="nav-link"> projets</a>
                  </li>
                </ul>
                <div className="tab-content">
                <div id="Experience" className="tab-pane fade mt-4">
                    <div className="col-lg-11">
                      {stagiaire?.experiences?.map((experience, index) => (
                        <div key={index} className="experience-item">
                          <FontAwesomeIcon 
                            icon={faPen} 
                            className="float-end" 
                            style={{ marginRight: "8px", color: "#007BFF" }} 
                          />
                          <div 
                            className="resume-item pb-0" 
                            style={{ 
                              borderLeft: "3px solid #007BFF", 
                              paddingLeft: "15px", 
                              position: "relative",
                              marginBottom: "30px"
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
                              <em>{experience.startDate || "Durée non spécifiée"} - {experience.endDate || "Durée non spécifiée"}</em>
                            </p>
                            <p>{experience.description || "Description non disponible"}</p>
                          
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="about-me" className="tab-pane fade active show">
                    <div className="profile-about-me">
                      <div className="pt-4 border-bottom-1 pb-4">
                        <h4 className="text-primary">About Me</h4>
                        <p>{stagiaire.description}</p>
                      </div>
                    </div>
                    <div className="profile-skills pt-2 border-bottom-1 pb-2">
                      <h4 className="text-primary mb-4">Skills</h4>
                      {stagiaire.competences.map((competence, index) => (
                        <a href="javascript:void()" className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">{competence.competenceName}</a>
                
              ))}
                        
                    </div>
                    <div className="profile-lang pt-5 border-bottom-1 pb-5">
                      <h4 className="text-primary mb-4">Language</h4>
                      {stagiaire.languages.map((language, index) => (
                        <a href="javascript:void()" className="text-muted pr-3 f-s-16"><i className="flag-icon flag-icon-us" key={index} /> {language.language}</a> 
                      
                
              ))}
                         </div>
                    <div className="profile-personal-info">
                      <h4 className="text-primary mb-4">Personal Information</h4>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Name <span className="pull-right">:</span>
                          </h5>
                        </div>
                        <div className="col-9"><span>{stagiaire.fullName}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Email <span className="pull-right">:</span>
                          </h5>
                        </div>
                        <div className="col-9"><span>{stagiaire.Email}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">University <span className="pull-right">:</span></h5>
                        </div>
                        <div className="col-9"><span>F{stagiaire.university}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Education Level <span className="pull-right">:</span></h5>
                        </div>
                        <div className="col-9"><span>F{stagiaire.educationLevel}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Age <span className="pull-right">:</span>
                          </h5>
                        </div>
                        <div className="col-9"><span>{stagiaire.DateNaissance}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Location <span className="pull-right">:</span></h5>
                        </div>
                        <div className="col-9"><span>{stagiaire.address}</span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <h5 className="f-w-500">Phone  <span className="pull-right">:</span></h5>
                        </div>
                        <div className="col-9"><span>{stagiaire.phone}</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-secondary float-end" type="submit">modifier</button>
                  </div>
                  <div id="projets" className="tab-pane fade">
                    <div className="col-lg-11">
                      <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
                        {stagiaire?.projets?.map((projet, index) => (
                          <div key={index} className="portfolio-item py-5 border-bottom">
                            <div className="row g-4 align-items-center">
                              <div className="col-xl-6">
                                <h4 className="text-body">{projet.title || "Type de projet"}</h4>
                                <h1 className="display-6 mb-0">{projet.description || "Titre du projet"}</h1>
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
                                  <FontAwesomeIcon 
                                    icon={faPen} 
                                    className="float-end" 
                                    style={{ marginRight: "8px", color: "#007BFF" }} 
                                  />
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
