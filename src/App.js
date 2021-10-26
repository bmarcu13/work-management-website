// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import MainPage from "./Screens/MainPage/MainPage";
import ContactPage from "./Screens/ContactPage/ContactPage";
import PortfolioPage from "./Screens/PortfolioPage/PortfolioPage";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={MainPage} exact />
            <Route path="/portofoliu" component={PortfolioPage} exact />
            <Route path="/contact" component={ContactPage} exact/>
            <NavigationBar></NavigationBar>
        </BrowserRouter>
    );
}

export default App;
