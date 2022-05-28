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
                        îi ajutăm să își desfașoare activitatea în siguranță și
                        în conformitate cu prevederile legale. WORK MANAGEMENT
                        este abilitată să presteze activități specifice de
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
                        Celor care spun că securitatea în muncă costă, le-am
                        spune că lipsa acesteia este și mai costisitoare.
                    </h3>
                    <RiDoubleQuotesL
                        className="icon"
                        size={60}
                    ></RiDoubleQuotesL>
                    
                    <h5 >G. C. - Director General</h5>
                </div>
                <img
                    class="bg"
                    src={bg}
                    alt="fundal-despre-noi"
                    className="fundal-despre-noi"
                ></img>
            </div>
            <div className="second">
                <div>
                    <div class="circle-container">
                        <img src={iso_blue} className="circle circle1" alt="sigla-iso-blue"></img>
                        <img src={iso_orange} class="circle circle2" alt="sigla-iso-orange"></img>
                        <img src={iso_purple} class="circle circle3" alt="sigla-iso-purple"></img>
                        <img src={iso_green} class="circle circle4"alt="sigla-iso-green"></img>
                    </div>
                    <div class="center">
                        <img src={logo} alt="logo-without-writing" className="logo-without-writing" />
                    </div>
                </div>
            </div>
        </div>
    );
}
