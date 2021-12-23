import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ServiceLanding from "./ServiceLanding/ServiceLanding";

import "./IndividualServicePage.css";
import Service3Highlights from "./Service3Highlights/Service3Highlights";

import { servicesInfo } from "./Information/InfoService";

import { formatText } from "../../Modules/Formatter";

export default function IndividualServicePage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let { serviciu } = useParams();
    let serviceData;
    for (let i = 0; i <= 11; i++) {
        if (serviciu == servicesInfo[i].id) serviceData = servicesInfo[i];
    }
    const information = serviceData.information;

    return (
        <div>
            <ServiceLanding
                infoHighlights={serviceData.highlights}
                titleService={serviceData.name}
            ></ServiceLanding>
            <div className="text-information"></div>
        </div>
    );
}
