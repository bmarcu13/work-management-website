import React from "react";
import cercc from "../../../img/cerc_complet.svg";

import { useRouteMatch } from "react-router";

import "./ServiceLanding.css";

import { servicesInfo } from "../Information/InfoService";
import Service3Highlights from "../Service3Highlights/Service3Highlights";
export default function ServiceLanding(props) {
    const highlights = props.infoHighlights;
    const title = props.titleService;
    const icon = props.icon;

    return (
        <div className="service-page-landing-container">
            <div className="title-container">
                <h1>
                    {/* <span className="service-icon">{icon}</span> */}
                    {title}
                </h1>
                {/*  */}
            </div>
            
           
            <div className="svg-bg">
                <img className="cercc" src={cercc}></img>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <div className="hightlights-container">
                    <Service3Highlights data={highlights}></Service3Highlights>
                </div>
            </div>
        </div>
    );
}
