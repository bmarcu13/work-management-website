import React from "react";
import "./StrengthsSection.css";
import { RiRoadMapLine } from "react-icons/ri";
import { FcDiploma1 } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";

export default function StrengthsSection() {
    return (
        <div className="strengths-section">
            <div className="strength strength1">
                <FcDiploma1 size={40}></FcDiploma1>
                <h3>Deţinem Asigurare de Răspundere Civilă</h3>
                <p>
                    WORK MANAGEMENT deține{" "}
                    <span style={{ fontWeight: "bold" }}>
                        Asigurarea de Răspundere Civilă
                    </span>
                    pentru toate serviciile prestate - limita de despăgubire
                    500.000 EUR.
                </p>
            </div>

            <div className="strength strength2">
                <RiTeamFill color="#425fca" className="icon"></RiTeamFill>
                <h3>Experiență si Profesionalism</h3>
                <p>
                    Personal calificat, cu vastă experiență, în toate domeniile
                    prestate. Activitatea sediului central este împărțită în
                    <span style={{ fontWeight: "bold" }}> 8 departamente</span>,
                    pentru o mai bună centralizare a locațiilor.
                </p>
            </div>

            <div class="strength  strength3">
                <RiRoadMapLine
                    size={40}
                    color="#8c37b6"
                    style={{ width: "40px" }}
                ></RiRoadMapLine>
                <h3>Puncte de lucru în toata țara</h3>
                <p>
                    Dispunem de acoperire națională pentru a fi cât mai aproape
                    de clienții noștri.
                    <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Nu subcontractăm serviciile.
                    </span>
                </p>
            </div>
        </div>
    );
}
