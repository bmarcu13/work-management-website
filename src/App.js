// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

import CerereOferta from "./Screens/CerereOfertaPage/CerereOferta";
import MainPage from "./Screens/MainPage/MainPage";
import ContactPage from "./Screens/ContactPage/ContactPage";
import PortfolioPage from "./Screens/PortfolioPage/PortfolioPage";
import ServicesPage from "./Screens/ServicesPage/ServicesPage";

function App() {
    return (
        <BrowserRouter
            style={{
                position: "relative",
            }}
        >
            <Route path="/" component={MainPage} exact />
            <Route path="/portofoliu" component={PortfolioPage} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route path="/cerere-oferta" component={CerereOferta} exact />
            <Route path="/servicii" component={ServicesPage} exact />
            <NavigationBar></NavigationBar>
        </BrowserRouter>
    );
}

export default App;
