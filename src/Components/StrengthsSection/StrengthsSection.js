import React, { useState, useEffect } from "react";
import "./StrengthsSection.css";
import { RiRoadMapLine } from "react-icons/ri";
import { FcDiploma1 } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";

import "animate.css";

export default function StrengthsSection() {
    const [animationClassLeft, setAnimationClassLeft] =
        useState("invisible strength");
    const [animationClassMiddle, setAnimationClassMiddle] =
        useState("invisible strength");
    const [animationClassRight, setAnimationClassRight] =
        useState("invisible strength");

    let observer1 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setAnimationClassLeft(
                "strength strength1 animate__animated animate__fadeInLeft"
            );
        } else {
        }
    });

    let observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setAnimationClassMiddle(
                "strength strength1 animate__animated animate__fadeInUp"
            );
        } else {
        }
    });

    let observer3 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setAnimationClassRight(
                "strength strength1 animate__animated animate__fadeInRight"
            );
        } else {
        }
    });

    useEffect(() => {
        observer1.observe(
            document.getElementsByClassName("strength")[0].children[1]
        );
        observer2.observe(
            document.getElementsByClassName("strength")[1].children[1]
        );
        observer3.observe(
            document.getElementsByClassName("strength")[2].children[1]
        );
    });

    return (
        <div className="strengths-section">
            <div class="custom-shape-divider-top-1640635384">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="cards">
                <div className={animationClassLeft}>
                    <FcDiploma1 size={40}></FcDiploma1>
                    <h3>Deţinem Asigurare de Răspundere Civilă</h3>
                    <p>
                        WORK MANAGEMENT deține{" "}
                        <b><span>
                            Asigurare de Răspundere Civilă-
                        </span></b>
                        pentru toate serviciile prestate - limita de despăgubire
                        500.000 EUR.
                    </p>
                </div>

                <div className={animationClassMiddle}>
                    <RiTeamFill  className="icon"></RiTeamFill>
                    <h3>Experiență si Profesionalism</h3>
                    <p>
                        Personal calificat, cu vastă experiență, în toate
                        domeniile prestate. Activitatea sediului central este
                        împărțită în
                        <b><span>
                            {" "}
                            8 departamente
                        </span></b>
                        , pentru o mai bună centralizare a locațiilor.
                    </p>
                </div>

                <div class={animationClassRight}>
                    <RiRoadMapLine className="strengths-map-icon"
                        size={40}
                        
                    ></RiRoadMapLine>
                    <h3>Puncte de lucru în toată țara</h3>
                    <p>
                        Dispunem de acoperire națională pentru a fi cât mai
                        aproape de clienții noștri.
                        <b><span >
                            {" "}
                            Nu subcontractăm serviciile.
                        </span></b>
                    </p>
                </div>
            </div>
        </div>
    );
}
