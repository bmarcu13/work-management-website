import React from "react";
import cercc from "../../../img/cerc_complet.svg";

import "./ServiceLanding.css";

import { servicesInfo } from "../Information/InfoService";
export default function ServiceLanding(props) {
    return (
        <div className="service-page-landing-container">
            <div>
                <div className="svg-bg">
                    <img className="cercc" src={cercc}></img>
                </div>
                {servicesInfo.ssm.highlights[0].icon}
            </div>
        </div>
    );
}
