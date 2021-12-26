import React from "react";

import { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";

import "./ServicesPage.css";

import { MdOutlineArrowForwardIos } from "react-icons/md";

import SecuritateSanatateInMunca from "../../img/services/protectia-muncii-psi.jpg";
import CoordonareaSantierelor from "../../img/services/coordonarea-santierelor.png";
import SituatiiUrgenta from "../../img/services/situatii-urgenta.jpg";
import Deseuri from "../../img/services/deseuri.jpg";
import RSVTI from "../../img/services/rsvti.jpg";
import AnalizaRiscuri from "../../img/services/analiza-riscuri.jpg";
import ELearning from "../../img/services/e-learning.jpg";
import Vibratii from "../../img/services/vibratii.png";
import Indicatoare from "../../img/services/indicatoare-ssm.jpg";
import ResurseUmane from "../../img/services/resurse-umane.jpg";
import Audit from "../../img/services/audit.jpg";
import FormareProfesionala from "../../img/services/formare-profesionala.png";
import DividerPhoto from "../../img/landing-page-services-divider-photo.jpg";
import Footer from "../../Components/Footer/Footer";
import IndividualServicePage from "../IndividualServicePage/IndividualServicePage";

let scrolled = false;

export default function ServicesPage() {
    const [animationClass, setAnimationClass] = useState("grid-item-container");

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let observer = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
            setAnimationClass("grid-item-container fadeInDownCustom");
        } else {
        }
    });

    useEffect(() => {
        observer.observe(document.querySelector(".grid-item-container"));
        // window.scrollTo(0, 0);
    });

    let { path, url } = useRouteMatch();

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
                <Link
                    to={`${url}/${item.url}`}
                    style={{ textDecoration: "none", marginTop: "auto" }}
                >
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
                </Link>
            </div>
        );
    };

    return (
        <>
            <div className="services">
                <div
                    className="bg"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "calc(100% - 300px)",
                        // backgroundColor: "white",
                        // opacity: ".5",
                        top: "300px",
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
                            height: "300px",
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
            </div>
            <Footer></Footer>
        </>
    );
}

export const servicesList = [
    {
        url: "securitate-si-sanatate-in-munca",
        title: "Securitate și Sănătate în Muncă",
        description:
            "Scapă de grija organizării activității de securitate și sănătate în muncă din interiorul companiei tale. Ne ocupăm noi de pregătirea, instruirea și verificarea lucrătorilor, de elaborarea documentației necesare și alte acțiuni specifice SSM.",
        img: SecuritateSanatateInMunca,
    },
    {
        url: "situatii-de-urgenta",
        title: "Situații de Urgență (Prevenirea și Stingerea Incendiilor / Protecție Civilă)",
        description:
            "Firma noastră asigură instructaj introductiv, periodic și specific locului de muncă, astfel încât angajații dvs să fie informați cu privire la măsurile tehnice şi organizatorice de" +
            " desfășurare a activității, în condiții de securitate în S.U. Mai mult, oferim Asistență de Specialitate în cazul controalelor.",
        img: SituatiiUrgenta,
    },
    {
        url: "rsvti",
        title: "RSVTI",
        description:
            "Compania noastră este autorizată de ISCIR, să desfășoare activități de supraveghere și" +
            " verificare tehnică a echipamentelor/instalațiilor de ridicat și sub presiune. Punem la dispoziție un număr de" +
            " peste 25 ingineri specialiști în domeniul ISCIR, cu vastă experiență.",
        img: RSVTI,
    },
    {
        url: "gestiunea-deseurilor",
        title: "Gestiunea Deșeurilor și Managementul Mediului",
        description:
            "Ținând cont de faptul că activitatea economică are impact asupra mediului, orice operator economic, cu atât mai mult cel care, prin activitatea sa, produce diferite tipuri de deșeuri, este obligat să dețină un departament de protecția mediului" +
            " Noi preluăm responsabilitatea gestiunii deșeurilor și vă punem la dispoziție un specialist în managementul acestora.",
        img: Deseuri,
    },
    {
        url: "coordonarea-santierelor",
        title: "Coordonarea Șantierelor",
        description:
            "Sunteți beneficiarul unui proiect de construcții și aveți nevoie de un Coordonator SSM pentru" +
            " șantierul Dvs pentru a îndeplini cerințele minime ale HG 300/2006?" +
            "Sunteți o firmă de proiectare și trebuie să intocmiți planul de securitate și sănătate" +
            "pentru proiectele Dvs?",
        img: CoordonareaSantierelor,
    },
    {
        url: "analiza-de-risc-la-securitate-fizica",
        title: "Analiză de Risc la Securitate Fizică",
        description:
            "Siguranta companiei  (unitatii) dumneavoastra se realizaeaza prin efectuarea unei analize de risc la securitate fizica," +
            "in baza careia se vor stabili cerintele, masurile si mecanismele de securitate pentru sistemul ce urmeaza a fi imlementat, de ordin tehnic, tehnologic si operational." +
            " Societatea noastra, este abilitata, sa intocmeasca astfel de evaluari, fiind inscrisa, in Registrul National al Evaluatorilor de Risc, la Securitate Fizica.",
        img: AnalizaRiscuri,
    },
    {
        url: "formare-profesionala",
        title: "Formare Profesională",
        description:
            "Vin-o la cursurile organizate de noi în vederea perfecționării în conformitate cu cerințele ANC." +
            " În urma finalizării cursului, poți obține certificatul de absolvire în meseria de inspector în domeniul securității și sănătății în muncă.",

        img: FormareProfesionala,
    },
    {
        url: "masurarea-zgomotului-si-vibratiilor",
        title: "Măsurarea Zgomotului si Vibrațiilor la locul de muncă",
        description:
            "Oferim servicii de măsurare a zgomotului şi a vibraţiilor transmise omului, în regim abilitat de Ministerul Sănătăţii. Echipamentele utilizate pentru măsurători corespund cerinţelor standardelor internaţionale şi răspund întocmai cerinţelor minime de securitate şi sănătate la locul de muncă.",
        img: Vibratii,
    },
    {
        url: "e-learning",
        title: "Platformă E-learning ",
        description:
            "Beneficiază de aplicația “Work” pentru PC/IOS/Android. Poți vizualiza, descărca și modifica documentele, dar și monitoriza statusul privind parcurgerea instructajelor și tesătrilor de către angajații tăi. Reprezentanții Work Management pot face verificări/checklist-uri privind respectarea normelor SSM, SU, PC, RSVTI și Mediu în sediile/punctele de lucru ale Beneficiarului.",
        img: ELearning,
    },
    {
        url: "audit-si-evaluarea-riscurilor",
        title: "Audit si Evaluarea Riscurilor",
        description:
            "Identificăm și evaluăm riscurile profesionale la care sunt expuși angajații la locurile de muncă și întocmim planul de prevenire și protecție pe baza acestora." +
            " Scopul evaluării nivelului de risc este de a oferi posibilitatea cunoaşterii situaţiei reale, de la fiecare loc de muncă, din punct de vedere al securităţii şi sănătăţii în muncă, pentru a se lua măsurile de prevenire optime şi realiste.",
        img: Audit,
    },
    {
        url: "indicatoare",
        title: " Indicatoare de securitate SSM & SU",
        description:
            " Producem și comercializăm, întreaga gamă de indicatoare de securitate," +
            " care sunt prevăzute de normele legale în vigoare. Acestea sunt foarte importante, fiind o modalitate rapidă de a comunica" +
            " informații importante angajaților, colaboratorilor și vizitatorilor.",
        img: Indicatoare,
    },
    {
        url: "resurse-umane",
        title: "Resurse Umane",
        description:
            "Resursa umană este cea cea mai importantă dintre toate resursele existente într-o companie. Work Management oferă în domeniul resurselor umane servicii complete de personal, salarizare, consultanţă şi asistenţă la controalele Instituţiilor de drept.",
        img: ResurseUmane,
    },
];
