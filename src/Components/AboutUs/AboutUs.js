import React from "react";
import "./AboutUs.css"
import Iso_blue from "../../img/albastru.png";
import Iso_orange from "../../img/portocaliu.png";
import Worker from "../../img/worker_graphics.png";
export default function AboutUs() {
    return (
        <div className="about-section">
            <h1>Despre noi</h1>
          <hr></hr>
            <div className="first-container">
                <div className="who-we-are-text">
                    <h2 class="contentHead">CINE SUNTEM?</h2>
                    <h4>
                    WORK MANAGEMENT este abilitata, conform certificatelor de abilitare nr.1312/PS din 24.02.2021 emis de Ministerul Muncii, Familiei si Protectiei Sociale – ITM Bucuresti, sa desfasoare activitatii specifice de prevenire si protectie.
                        <br/><br/>
                        Something 
                        <br/><br/>
                        <p>(NOTICE:)</p>
                        <p><span>Anything</span></p>
                    </h4>
                                    </div>
                                    
                                    <div class="pic"></div>
                    </div>
                                <div className="second-container">
                                    <div className="iso-images">
                                        <img className="iso-img" src={Iso_blue} alt="iso_blue"></img>
                                        <img className="iso-img"  src={Iso_orange} alt="iso_orange"></img>
                                    </div>
                                    <div className="our-mission-text">
                                    <h2 class="contentHead">MISIUNEA NOASTRA</h2>
                                        <p>Abordarea aspectelor de securitate si sanatate, la nivelul societatii, va asigura nu numai evitarea costurilor mari cu accidentele si imbolnavirile profesionale, dar si imbunatatirea productivitatii muncii. </p>
                                        <h4>WORK MANAGEMENT este certificata ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 27001:2018.</h4>
                                        <h5>Deviza echipei de management este: <br></br><span>
                        „Celor care spun ca securitatea in munca costa le-as spune ca lipsa acesteia costa si mai mult.”</span>
                    </h5>
                </div>
            </div>
        </div>
        );
}