import React , {} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navheader from "./components/NavHeader";
import Sidebar from "./components/Sidebar";
import ContentBody from "./components/ContentBody";
import StagiairesList from "./components/StagiairesList";

const App = () => {
  return (
    <div>
     
     <div id="main-wrapper">

          <Navheader />

          <Header />

          <Sidebar />

          <StagiairesList />

          <Footer />
    </div>

     
     
    </div>
  );
};

export default App;
