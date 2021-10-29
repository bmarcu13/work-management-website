// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import ClientCard from "./Components/ClientCard/ClientCard";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import CerereOferta from "./Screens/CerereOfertaPage/CerereOferta";

import MainPage from "./Screens/MainPage/MainPage";
import PortfolioPage from "./Screens/PortfolioPage/PortfolioPage";
import ServicesPage from "./Screens/ServicesPage/ServicesPage";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={MainPage} exact />
            <Route path="/portofoliu" component={PortfolioPage} exact />
            <Route path="/cerere-oferta" component={CerereOferta} exact />
            <Route path="/servicii" component={ServicesPage} exact />
            <NavigationBar></NavigationBar>
        </BrowserRouter>
    );
}

export default App;
