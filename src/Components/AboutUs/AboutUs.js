import React from "react";
import "./AboutUs.css";
import iso_blue from "../../img/iso_albastru.png";
import iso_orange from "../../img/iso-orange.png";
import iso_purple from "../../img/iso_mov.png";
import iso_green from "../../img/iso_green.png";
import logo from "../../img/logo.png";
import Worker from "../../img/worker_graphics.png";
export default function AboutUs() {
    return (
        <div className="about-section">
            <div className="first">
                <div className="title">
                    <h1>Cine suntem?</h1>
                </div>
            </div>
            <div className="second">
                <div class="circle-container">
                    <img src={iso_blue} class="circle1"></img>
                    <img src={iso_orange} class="circle2"></img>
                    <img src={iso_purple} class="circle3"></img>
                    <img src={iso_green} class="circle4"></img>
                </div>
                <div class="center">
                    <img src={logo} style={{ width: "150px" }} />
                </div>
            </div>
        </div>
    );
}
