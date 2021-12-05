import React from "react";
import cercc from "../../../img/cerc_complet.svg";

import "./ServiceLanding.css";

import { servicesInfo } from "../Information/InfoService";
import Service3Highlights from "../Service3Highlights/Service3Highlights";
export default function ServiceLanding(props) {
    const highlights = props.infoHighlights;
    console.log(highlights);

    return (
        <div className="service-page-landing-container">
            <div className="svg-bg">
                <img className="cercc" src={cercc}></img>
            </div>
            <div className="hightlights-container">
                <Service3Highlights data={highlights}></Service3Highlights>
            </div>
        </div>
    );
}
