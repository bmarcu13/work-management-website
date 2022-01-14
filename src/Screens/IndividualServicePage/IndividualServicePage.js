import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ServiceLanding from "./ServiceLanding/ServiceLanding";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./IndividualServicePage.css";
import Service3Highlights from "./Service3Highlights/Service3Highlights";

import { servicesInfo } from "./Information/InfoService";

import { formatText } from "../../Modules/Formatter";

export default function IndividualServicePage(props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
   };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let { serviciu } = useParams();
    let serviceData;
    for (let i = 0; i <= 11; i++) {
        if (serviciu == servicesInfo[i].id) serviceData = servicesInfo[i];
    }
    const information = serviceData.information;
    const information2 = serviceData.information2;
    const service_image = serviceData.image;
    console.log(information + "\n");
    console.log(information2);

    return (
        <div>
            <ServiceLanding
                infoHighlights={serviceData.highlights}
                titleService={serviceData.name}
                icon={serviceData.main_icon}
            ></ServiceLanding>
            <div className="service-first-block">
                <div className="text-information">
                    {formatText(information)}
                </div>
                <div>
                    <img className="service_image" src={service_image}></img>
                </div>
            </div>
            {information2 && (
                <div className="text-information">
                    {formatText(information2)}
                </div>
            )}
            <Link to={"/cerere-oferta"} style={{ textDecoration: "none" }}>
                <div className="offer-button-container" onClick={scrollToTop}>
                    <div className="offerBtn">
                        <span className="text1">
                            Cere ofertă
                            <br />
                            personalizată
                        </span>
                        <span className="text2">apasă aici</span>
                        <span className="text3">WM</span>
                        <span className="text4">Contacteaza-ne</span>
                    </div>
                </div>
            </Link>
            <Footer></Footer>
        </div>
    );
}
