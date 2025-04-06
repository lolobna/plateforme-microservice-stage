import React , {} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navheader from "./components/NavHeader";
import Sidebar from "./components/Sidebar";
import ProfileStagiaire from "./components/ProfileStagiaire";

const App = () => {
  return (
    <div>
     
     <div id="main-wrapper">

          <Navheader />

          <Header />

          <Sidebar />

          <ProfileStagiaire/>

          <Footer />
    </div>

     
     
    </div>
  );
};

export default App;
