import React from "react";
import { useState, useEffect, useRef } from "react";
import "./ServicesMainPage.css";

import "animate.css";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import SecuritateSanatateInMunca from "../../img/services/protectia-muncii-psi.jpg";
import CoordonareaSantierelor from "../../img/services/coordonarea-santierelor.png";
import SituatiiUrgenta from "../../img/services/situatii-urgenta.jpg";
import Deseuri from "../../img/services/deseuri.jpg";
import RSVTI from "../../img/services/rsvti.jpg";
import AnalizaRiscuri from "../../img/services/analiza-riscuri.jpg";

import DividerPhoto from "../../img/landing-page-services-divider-photo.jpg";

export default function ServicesMainPage() {
    const [animationClass, setAnimationClass] = useState("grid-item-container");

    let observer = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
            setAnimationClass("grid-item-container fadeInDownCustom");
        } else {
        }
    });

    useEffect(() => {
        observer.observe(document.querySelector(".grid-item-container"));
    });

    const gridItemComponent = (item, index) => {
        return (
            <div
                className={animationClass}
                style={{
                    animationDelay: 0.3 * index + "s",
                    animationDuration: "3s",
                }}
            >
                <div className="img-container">
                    <img src={item.img}></img>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p
                    className="read-more-button"
                    style={{ fontWeight: "900", transition: ".2s" }}
                >
                    <MdOutlineArrowForwardIos
                        style={{
                            paddingRight: "5px",
                            verticalAlign: "middle",
                            marginBottom: "3px",
                        }}
                    />
                    Mai multe
                </p>
            </div>
        );
    };

    return (
        <div className="services">
            <div
                className="bg"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "calc(100% - 200px)",
                    // backgroundColor: "white",
                    // opacity: ".5",
                    top: "200px",
                    left: 0,
                    filter: "blur(1px)",
                }}
            ></div>
            <div className="divider">
                <img src={DividerPhoto} />
                <div
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: ".4",
                        height: "200px",
                        width: "100%",
                    }}
                ></div>
                <h1 style={{ position: "absolute" }}>
                    Serviciile Noastre
                    <hr></hr>
                </h1>
            </div>

            <div className="grid-container">
                {servicesList.map((item, index) => {
                    return gridItemComponent(item, index);
                })}
            </div>
            <div className="all-services-button">
                <h3 style={{ display: "flex" }}>
                    Toate Serviciile
                    <MdOutlineArrowForwardIos style={{ alignSelf: "center" }} />
                </h3>
            </div>
        </div>
    );
}

const servicesList = [
    {
        title: "Securitate și Sănătate în Muncă",
        description:
            "Scapă de grija organizării activității de securitate și sănătate în muncă din interiorul companiei tale. Ne ocupăm noi de pregătirea, instruirea și verificarea lucrătorilor, de elaborarea documentației necesare și alte acțiuni specifice SSM.",
        img: SecuritateSanatateInMunca,
    },
    {
        title: "Situații de Urgență (Prevenirea și Stingerea Incendiilor / Protecție Civilă)",
        description:
            "Firma noastră asigură instructaj introductiv, periodic și specific locului de muncă, astfel încât angajații dvs să fie informați cu privire la măsurile tehnice şi organizatorice de" +
            " desfășurare a activității, în condiții de securitate în S.U. Mai mult, oferim Asistență de Specialitate în cazul controalelor.",
        img: SituatiiUrgenta,
    },
    {
        title: "RSVTI",
        description:
            "Compania noastră este autorizată de ISCIR, să desfășoare activități de supraveghere și" +
            " verificare tehnică a echipamentelor/instalațiilor de ridicat și sub presiune. Punem la dispoziție un număr de" +
            " peste 25 ingineri specialiști în domeniul ISCIR, cu vastă experiență.",
        img: RSVTI,
    },
    {
        title: "Gestiunea Deșeurilor și Managementul Mediului",
        description:
            "Ținând cont de faptul că activitatea economică are impact asupra mediului, orice operator economic, cu atât mai mult cel care, prin activitatea sa, produce diferite tipuri de deșeuri, este obligat să dețină un departament de protecția mediului" +
            " Noi preluăm responsabilitatea gestiunii deșeurilor și vă punem la dispoziție un specialist în managementul acestora.",
        img: Deseuri,
    },
    {
        title: "Coordonarea Șantierelor",
        description:
            "Sunteți beneficiarul unui proiect de construcții și aveți nevoie de un Coordonator SSM pentru" +
            " șantierul Dvs pentru a îndeplini cerințele minime ale HG 300/2006?" +
            "Sunteți o firmă de proiectare și trebuie să intocmiți planul de securitate și sănătate" +
            "pentru proiectele Dvs?",
        img: CoordonareaSantierelor,
    },
    {
        title: "Analiză de Risc la Securitate Fizică",
        description:
            "Identificăm și evaluăm riscurile profesionale la care sunt expuși angajații la locurile de muncă și întocmim planul de prevenire și protecție pe baza acestora." +
            " Scopul evaluării nivelului de risc este de a oferi posibilitatea cunoaşterii situaţiei reale, de la fiecare loc de muncă, din punct de vedere al securităţii şi sănătăţii în muncă, pentru a se lua măsurile de prevenire optime şi realiste.",
        img: AnalizaRiscuri,
    },
];
