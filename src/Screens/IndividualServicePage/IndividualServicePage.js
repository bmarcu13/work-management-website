import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ServiceLanding from "./ServiceLanding/ServiceLanding";

import "./IndividualServicePage.css";
import Service3Highlights from "./Service3Highlights/Service3Highlights";

import { servicesInfo } from "./Information/InfoService";

export default function IndividualServicePage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let { serviciu } = useParams();
    let serviceData;
    for (let i = 0; i <= 11; i++) {
        if (serviciu == servicesInfo[i].id) serviceData = servicesInfo[i];
    }
    console.log(serviciu);
    return (
        <div>
            <ServiceLanding
                infoHighlights={serviceData.highlights}
            ></ServiceLanding>
        </div>
    );
}
