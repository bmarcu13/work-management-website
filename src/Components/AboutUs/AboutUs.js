import React from "react";
import "./AboutUs.css";
import iso_blue from "../../img/iso_albastru.png";
import iso_orange from "../../img/iso-orange.png";
import iso_purple from "../../img/iso_mov.png";
import iso_green from "../../img/iso_green.png";
import logo from "../../img/logo-work.png";

import { RiDoubleQuotesL } from "react-icons/ri";

export default function AboutUs() {
    return (
        <div className="about-section">
            <div className="first">
                <div className="title">
                    <h1>Cine suntem?</h1>
                </div>
                <div className="content">
                    <p>
                        Ne-am început activitatea în anul 2007, iar de atunci ne
                        ocupăm de siguranța clienților din portofoliul nostru și
                        ne asiguram că aceștia funcționează sub regulile
                        prevazute de legea în vigoare. WORK MANAGEMENT este
                        abilitata să desfășoare activități specifice de
                        prevenire și protecție. Misiunea noastra este sa ne
                        asiguram ca partenerii nostri își desfașoara activitatea
                        in siguranță și în conformitate cu prevederile legale.
                        Abordarea aspectelor de securitate și sănătate, la
                        nivelul societății, vă asigură nu numai evitarea
                        costurilor mari cu accidentele și îmbolnăvirile
                        profesionale, dar și îmbunătățirea productivității
                        muncii.{" "}
                    </p>
                    <RiDoubleQuotesL
                        className="icon"
                        size={60}
                    ></RiDoubleQuotesL>
                    <h3>
                        Celor care spun că securitatea în muncă costă le-am
                        spune că lipsa acesteia costă și mai mult.
                    </h3>
                </div>
                <svg
                    viewBox="0 0 500 500"
                    width="100%"
                    id="blobSvg"
                    style={{
                        position: "absolute",
                        maxWidth: "80%",
                        maxHeight: "80%",
                        zIndex: "0",
                    }}
                >
                    <path
                        id="blob"
                        d="M397,338Q351,426,247.5,429.5Q144,433,90.5,341.5Q37,250,99,173Q161,96,254.5,88Q348,80,395.5,165Q443,250,397,338Z"
                        fill="#d1d8e0"
                        style={{ boxShadow: "1px 1px 2px black" }}
                    ></path>
                </svg>
            </div>
            <div className="second">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                    }}
                >
                    <div class="circle-container">
                        <img src={iso_blue} class="circle circle1"></img>
                        <img src={iso_orange} class="circle circle2"></img>
                        <img src={iso_purple} class="circle circle3"></img>
                        <img src={iso_green} class="circle circle4"></img>
                    </div>
                    <div class="center">
                        <img src={logo} style={{ width: "150px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
