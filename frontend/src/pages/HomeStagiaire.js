import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStagiaire } from "../context/StagiaireContext";

const HomeStagiaire = () => {
  const { idstagiaire } = useParams(); // Récupère l'ID depuis l'URL
  const { setIdStagiaire } = useStagiaire(); // Met à jour l'ID dans le contexte

  useEffect(() => {
    // Vérifie si l'ID est récupéré
    if (!idstagiaire) {
      console.error("idstagiaire est introuvable dans l'URL.");
    } else {
      console.log("idstagiaire récupéré :", idstagiaire);
    }

    // Vérifie si la fonction setIdStagiaire est définie
    if (!setIdStagiaire) {
      console.error("setIdStagiaire n'est pas défini dans le contexte.");
    } else {
      setIdStagiaire(idstagiaire); // Met à jour l'ID dans le contexte
    }
  }, [idstagiaire, setIdStagiaire]);

  return (
    <div className="content-body">
      <div
        className="owl-carousel blog-carousel wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div className="blog-item p-4">
          <div className="blog-img mb-4">
            <img
              src="img/service-1.jpg"
              className="img-fluid w-100 rounded"
              alt
            />
            <div className="blog-title">
              <a href="#" className="btn">
                Dividend Stocks
              </a>
            </div>
          </div>
          <a href="#" className="h4 d-inline-block mb-3">
            Options Trading Business?
          </a>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
            aliquam suscipit error corporis accusamus labore....
          </p>
          <div className="d-flex align-items-center">
            <img
              src="img/testimonial-1.jpg"
              className="img-fluid rounded-circle"
              style={{ width: 60, height: 60 }}
              alt
            />
            <div className="ms-3">
              <h5>Admin</h5>
              <p className="mb-0">October 9, 2025</p>
            </div>
          </div>
        </div>
        <div className="blog-item p-4">
          <div className="blog-img mb-4">
            <img
              src="img/service-2.jpg"
              className="img-fluid w-100 rounded"
              alt
            />
            <div className="blog-title">
              <a href="#" className="btn">
                Non-Dividend Stocks
              </a>
            </div>
          </div>
          <a href="#" className="h4 d-inline-block mb-3">
            Options Trading Business?
          </a>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
            aliquam suscipit error corporis accusamus labore....
          </p>
          <div className="d-flex align-items-center">
            <img
              src="img/testimonial-2.jpg"
              className="img-fluid rounded-circle"
              style={{ width: 60, height: 60 }}
              alt
            />
            <div className="ms-3">
              <h5>Admin</h5>
              <p className="mb-0">October 9, 2025</p>
            </div>
          </div>
        </div>
        <div className="blog-item p-4">
          <div className="blog-img mb-4">
            <img
              src="img/service-3.jpg"
              className="img-fluid w-100 rounded"
              alt
            />
            <div className="blog-title">
              <a href="#" className="btn">
                Dividend Stocks
              </a>
            </div>
          </div>
          <a href="#" className="h4 d-inline-block mb-3">
            Options Trading Business?
          </a>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
            aliquam suscipit error corporis accusamus labore....
          </p>
          <div className="d-flex align-items-center">
            <img
              src="img/testimonial-3.jpg"
              className="img-fluid rounded-circle"
              style={{ width: 60, height: 60 }}
              alt
            />
            <div className="ms-3">
              <h5>Admin</h5>
              <p className="mb-0">October 9, 2025</p>
            </div>
          </div>
        </div>
        <div className="blog-item p-4">
          <div className="blog-img mb-4">
            <img
              src="img/service-4.jpg"
              className="img-fluid w-100 rounded"
              alt
            />
            <div className="blog-title">
              <a href="#" className="btn">
                Non-Dividend Stocks
              </a>
            </div>
          </div>
          <a href="#" className="h4 d-inline-block mb-3">
            Options Trading Business?
          </a>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
            aliquam suscipit error corporis accusamus labore....
          </p>
          <div className="d-flex align-items-center">
            <img
              src="img/testimonial-1.jpg"
              className="img-fluid rounded-circle"
              style={{ width: 60, height: 60 }}
              alt
            />
            <div className="ms-3">
              <h5>Admin</h5>
              <p className="mb-0">October 9, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStagiaire;
