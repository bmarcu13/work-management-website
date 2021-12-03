import React from "react";
import ServiceLanding from "./ServiceLanding/ServiceLanding";

import "./IndividualServicePage.css";
import Service3Highlights from "./Service3Highlights/Service3Highlights";

export default function IndividualServicePage(props) {
    return (
        <div>
            <ServiceLanding></ServiceLanding>
            <Service3Highlights></Service3Highlights>
        </div>
    );
}
