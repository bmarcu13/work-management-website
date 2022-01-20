import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { useState } from "react";

import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

import CerereOferta from "./Screens/CerereOfertaPage/CerereOferta";
import MainPage from "./Screens/MainPage/MainPage";
import ContactPage from "./Screens/ContactPage/ContactPage";
import PortfolioPage from "./Screens/PortfolioPage/PortfolioPage";
import ServicesPage from "./Screens/ServicesPage/ServicesPage";
import CarierePage from "./Screens/CarierePage/Cariere";
import ProtectiaDate from "./Screens/PoliticiPage/ProtectiaDate";
import SecuritateDate from "./Screens/PoliticiPage/SecuritateDate";
import IndividualServicePage from "./Screens/IndividualServicePage/IndividualServicePage";

function App() {
    // The back-to-top button is hidden at the beginning
    //const [showButton, setShowButton] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.pageYOffset > 300) {
    //             setShowButton(true);
    //         } else {
    //             setShowButton(false);
    //         }
    //     });
    // }, []);
    // const scrollToTop = () => {
    //     window.scrollTo(0, 0);
    // };

    return (
        <>
            <BrowserRouter>
                <Route path="/" component={MainPage} exact />
                <Route path="/portofoliu" component={PortfolioPage} exact />
                <Route path="/contact" component={ContactPage} exact />
                <Route path="/cerere-oferta" component={CerereOferta} exact />
                <Route path="/cariere" component={CarierePage} exact />
                <Route path="/servicii" component={ServicesPage} exact />
                <Route
                    path="/protectia-datelor"
                    component={ProtectiaDate}
                    exact
                />
                <Route
                    path="/securiatea-datelor"
                    component={SecuritateDate}
                    exact
                />
                <Route
                    path="/servicii/:serviciu"
                    component={IndividualServicePage}
                ></Route>
                <NavigationBar></NavigationBar>
            </BrowserRouter>
            {/* {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )} */}
        </>
    );
}

export default App;
