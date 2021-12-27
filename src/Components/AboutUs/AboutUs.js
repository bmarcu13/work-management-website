import React from "react";
import "./AboutUs.css";
import iso_blue from "../../img/iso_albastru.png";
import iso_orange from "../../img/iso-orange.png";
import iso_purple from "../../img/iso_mov.png";
import iso_green from "../../img/iso_green.png";
import logo from "../../img/logo-work.png";
import bg from "../../img/about-us-circle.png";

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
                        își desfașoară activitatea în siguranță și în
                        conformitate cu prevederile legale. WORK MANAGEMENT este
                        abilitată să desfășoare activități specifice de
                        prevenire și protecție. Abordarea aspectelor de
                        securitate și sănătate, la nivelul societății, vă
                        asigură nu numai evitarea costurilor mari cu accidentele
                        și îmbolnăvirile profesionale, dar și îmbunătățirea
                        productivității muncii.{" "}
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
                <img
                    class="bg"
                    src={bg}
                    style={{
                        maxWidth: "75%",
                        position: "absolute",
                        zIndex: "0",
                    }}
                ></img>
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
