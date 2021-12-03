import React from "react";
import oras from "../../../img/oras.jpg";
import cercblana from "../../../img/cerc_complet.svg";
import {servicesInfo} from "../Information/InfoService";

import "./ServiceLanding.css";

export default function ServiceLanding(props) {
    return (
        <div className="service-page-landing-container">
            <div>
                <div className="svg-bg">
                    <img src={cercblana}></img>
                </div>
                {servicesInfo.ssm.highlights[0].icon}
            </div>
        </div>
    );
}
