import React from "react";
import "./ServicesMainPage.css";

import protectiaMunciiPsiImg from "../../img/services/protectia-muncii-psi.jpg";

import {
    MdOutlineHorizontalRule,
    MdOutlineArrowForwardIos,
} from "react-icons/md";

import SecuritateSanatateInMunca from "../../img/services/protectia-muncii-psi.jpg";
import CoordonareaSantierelor from "../../img/services/coordonarea-santierelor.png";
import SituatiiUrgenta from "../../img/services/situatii-urgenta.jpg";
import Deseuri from "../../img/services/deseuri.jpg";
import RSVTI from "../../img/services/rsvti.jpg";
import AnalizaRiscuri from "../../img/services/analiza-riscuri.jpg";

import DividerPhoto from "../../img/landing-page-services-divider-photo.jpg";

export default function ServicesMainPage() {
    return (
        <div className="services">
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
                    return gridItemComponent(item);
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

const gridItemComponent = (item) => {
    return (
        <div className="grid-item-container">
            <div className="img-container">
                <img src={item.img}></img>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p
                className="read-more-button"
                style={{ fontWeight: "900", transition: ".2s" }}
            >
                Mai multe
                <MdOutlineHorizontalRule
                    style={{ paddingLeft: "5px", verticalAlign: "middle" }}
                />
            </p>
        </div>
    );
};

const servicesList = [
    {
        title: "Securitate si Sanatate in Munca",
        description: "",
        img: SecuritateSanatateInMunca,
    },
    {
        title: "Situatii de Urgenta (Prevenirea si Stingerea Incendiilor / Protectie Civila)",
        description: "",
        img: SituatiiUrgenta,
    },
    {
        title: "RSVTI",
        description:
            "Compania noastra este autorizată de ISCIR, să desfășoare activități de supraveghere și" +
            "verificare tehnică a echipamentelor/instalațiilor de ridicat și sub presiune și deține un număr de" +
            "peste 25 ingineri specialiști în domeniul ISCIR, cu multă experiență.",
        img: RSVTI,
    },
    {
        title: "Gestiunea Deseurilor si Managementul Mediului",
        description:
            "Ținând cont de faptul că activitatea economică are impact asupra mediului, orice operator economic, cu atât mai mult cel care, prin activitatea sa, produce diferite tipuri de deșeuri, este obligat să dețină un departament de protecția mediului" +
            " Noi preluăm responsabilitatea gestiunii deșeurilor și vă punem la dispoziție un specialist în managementul deșeurilor.",
        img: Deseuri,
    },
    {
        title: "Coordonarea Santierelor",
        description:
            "Sunteti beneficiarul unui proiect de constructii si aveti nevoie de un Coordonator SSM pentru" +
            "santierul Dvs pentru a indeplini cerintele minime ale HG 300/2006?" +
            "Sunteti o firma de proiectare si aveti nevoie de intocmirea planului de securitate si sanatate" +
            "pentru proiectele Dvs?",
        img: CoordonareaSantierelor,
    },
    {
        title: "Analiza de Risc la Securitate Fizica",
        description:
            "Identificam si evaluam riscurile profesionale la care sunt expusi angajatii la locurile de munca si intocmim planul de prevenire si protectie pe baza acestora." +
            "Scopul evaluării nivelului de risc este de a oferi posibilitatea cunoaşterii situaţiei reale, de la fiecare loc de muncă, din punct de vedere al securităţii şi sănătăţii în muncă, pentru a se lua măsurile de prevenire optime şi realiste.",
        img: AnalizaRiscuri,
    },
];
