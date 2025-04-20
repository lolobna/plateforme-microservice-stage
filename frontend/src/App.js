import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StagiaireProvider } from "./context/StagiaireContext"; // Import du contexte
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navheader from "./components/NavHeader";
import Sidebar from "./components/Sidebar";
import Accueil from "./pages/Accueil"; // Page d'accueil
import AboutUs from "./pages/AboutUs"; // Page "About Us"
import HomeStagiaire from "./pages/HomeStagiaire"; // Page Home pour un stagiaire
import ProfileStagiaire from "./pages/ProfileStagiaire"; // Page Profile pour un stagiaire
import PostEnregistres from "./pages/PostEnregistres";
import StagiaireCandidature from "./pages/StagiareCandidatures";
import Stagiaire_stageRealises from "./pages/Stagiaire_stageRealises";

const App = () => {
  return (
    <StagiaireProvider>
      <Router>
        <div id="main-wrapper">
          <Navheader />
          <Header />
          <Sidebar />

          <div>
            <Routes>
              {/* Route pour la page d'accueil */}
              <Route path="/" element={<Accueil />} />

              {/* Route pour la page "About Us" */}
              <Route path="/about" element={<AboutUs />} />

              {/* Route pour la page Home d'un stagiaire */}
              <Route path="/:idstagiaire/home" element={<HomeStagiaire />} />

              {/* Route pour la page Profile d'un stagiaire */}
              <Route
                path="/:idstagiaire/profile"
                element={<ProfileStagiaire />}
              />
               {/* Route pour la page PostEnregistres d'un stagiaire */}
               <Route path="/:idstagiaire/saved-posts" element={<PostEnregistres />} />
               <Route path="/:idstagiaire/stages" element={<Stagiaire_stageRealises />} />
                {/* Route pour la page PostEnregistres d'un stagiaire */}
                <Route path="/:idstagiaire/candidature" element={<StagiaireCandidature />} />
            </Routes>

             
          </div>

          <Footer />
        </div>
      </Router>
    </StagiaireProvider>
  );
};

export default App;
