import React from "react";
import "./AboutUs.css"
import Iso_blue from "../../img/albastru.png";
import Iso_orange from "../../img/portocaliu.png";
import Worker from "../../img/worker_graphics.png";
export default function AboutUs() {
    return (
        <div className="about-section">
            <div className="about-us-header">
                <div
                    style={{
                        background: "white",
                        position: "absolute",
                        opacity: ".4",
                        height: "120px",
                        width: "100%",
                    }}
                ></div>
               
                <h2 style={{textAlign:'center', color:"black"}}> DESPRE NOI</h2>
            </div>
            <div className="first-container">
                <div className="who-we-are-text">
                    <div class="our-mission-text">
                    <h2>CINE SUNTEM?</h2>
                    </div>
                    <p>WORK MANAGEMENT este abilitată, conform certificatelor de abilitare nr.1312/PS din 24.02.2021 emis de Ministerul Muncii, Familiei și Protecției Sociale – ITM București, să desfășoare activități specifice de prevenire și protecție.
                        <br/><br/>
                       <p> Ne-am început activitatea în anul 2007, iar de atunci ne ocupăm de siguranța clienților din portofoliul nostru și ne asiguram că aceștia funcționează sub regulile prevazute de legea în vigoare.</p><br/><br/>
                    </p>
                </div>
                <div className="pic"></div>
            </div>
            <div className="second-container">
                    <div className="iso-images">   
                            <img className="iso-img" src={Iso_blue} alt="iso_blue" style={{width:'150px', height:'150px'}}></img>
                            <img className="iso-img"  src={Iso_orange} alt="iso_orange"style={{width:'150px', height:'150px'}} ></img>
                            <img className="iso-img" src={Iso_blue} alt="iso_blue" style={{width:'150px', height:'150px'}}></img>
                            <img className="iso-img"  src={Iso_orange} alt="iso_orange" style={{width:'150px', height:'150px'}}></img>
                    </div>
                    <div className="our-mission-text">
                        <h2 class="contentHead">MISIUNEA NOASTRA</h2>
                        <p>Abordarea aspectelor de securitate și sănătate, la nivelul societății, vă asigură nu numai evitarea costurilor mari cu accidentele și îmbolnăvirile profesionale, dar și îmbunătățirea productivității muncii. </p>
                        <p>Lucrătorii bine motivați și bine instruiți, lucrând cu echipamente și materiale eficiente și bine întreținute, pot obține o calitate mai bună, o
productivitate mai ridicată și performanțe economice mai bune.</p>
                        <h4>WORK MANAGEMENT este certificată ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 27001:2018.</h4>
                        <h5>Deviza echipei de management este: <br></br><span>
                            „Celor care spun că securitatea în muncă costă le-am spune că lipsa acesteia costă și mai mult.”</span>
                        </h5>
                    </div>
                </div>
            </div>
        );
}