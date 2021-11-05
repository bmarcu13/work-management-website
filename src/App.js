// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

import CerereOferta from "./Screens/CerereOfertaPage/CerereOferta";
import MainPage from "./Screens/MainPage/MainPage";
import ContactPage from "./Screens/ContactPage/ContactPage";
import PortfolioPage from "./Screens/PortfolioPage/PortfolioPage";
import ServicesPage from "./Screens/ServicesPage/ServicesPage";

function App() {
        // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);
      
    useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
      });
    }, []);
    const scrollToTop = () => {
         window.scrollTo(0, 0);
    };
    return (
        <>
        <BrowserRouter>
            <Route path="/" component={MainPage} exact />
            <Route path="/portofoliu" component={PortfolioPage} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route path="/cerere-oferta" component={CerereOferta} exact />
            <Route path="/servicii" component={ServicesPage} exact />
            <NavigationBar></NavigationBar>
        </BrowserRouter>
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
        </>
    );
}

export default App;
