import React, { useState } from "react";
import "./Cariere.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import axios from "axios";
import map from "../../img/webp/romania_judete.webp";

export default function CarierePage() {
    const [sent, setSent] = useState("");

    const handleSend = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.target);
        formData.append("type", "job");

        for (let [a, b] of formData.entries()) {
            console.log(a, b);
        }

        try {
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API}`,
                headers: { "content-type": "multipart/form-data" },
                data: formData,
            }).then((res) => {
                console.log(res);
                setSent("success");
            });
        } catch (erorr) {
            console.log(erorr);
            setSent("failed");
        }
    };

    const form = (
        <form className="cariere-form" onSubmit={handleSend}>
            <p className="cariere-form-title">Vino în Echipa WORK!</p>
            <div className="row">
                <p>
                    <b>Nume și Prenume</b>
                    <CgAsterisk className="asterisk"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="name"
                    placeholder="Nume și Prenume"
                    required
                    name="name"
                />
            </div>
            <div className="special-inputs">
                <div>
                    <p>
                        <b>Email</b>
                        <CgAsterisk className="asterisk"></CgAsterisk>
                    </p>
                    <input
                        className="cerere-oferta-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div>
                    <p>
                        <b>Telefon</b>
                        <CgAsterisk className="asterisk"></CgAsterisk>
                    </p>
                    <input
                        className="cerere-oferta-input"
                        type="phone"
                        placeholder="Telefon"
                        name="phone"
                    />
                </div>
            </div>
            <div className="row">
                <p>
                    <b>Poziția pe care doriți să o ocupați </b>
                    <CgAsterisk className="asterisk"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="text"
                    placeholder="Subiect"
                    name="position"
                />
            </div>
            <div className="row">
                <p>
                    <b>Mesaj</b>
                    <CgAsterisk className="asterisk"></CgAsterisk>
                </p>

                <textarea
                    className="cerere-oferta-input mesaj-input"
                    rows="10"
                    placeholder="Scrie aici motivele pentru care te potrivesti echipei noastre."
                    required
                    name="messageBody"
                />
            </div>
            <p className="attach-text">
                <ImAttachment size={25}></ImAttachment>
                Atașați aici CV-ul dvs:
            </p>

            <input
                required
                type="file"
                name="cv"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
            ></input>

            <p>
                {" "}
                <input required type="checkbox"></input>
                Sunt de acord cu{" "}
                <span>
                    <u>Politica de Confidențialitate.</u>
                </span>
                <CgAsterisk className="asterisk"></CgAsterisk>
            </p>
            <button className="trimite-btn">Trimite</button>
        </form>
    );

    const successMessage = <h3>Mesajul a fost trimis! Mulțumim!</h3>;
    const errorMessage = (
        <h3>
            Ne pare rău, mesajul nu a putut fi trimis. Vă rugăm contactați-ne la
            numărul de telefon (0736) 602 115
        </h3>
    );

    return (
        <>
            <div className="cariera-page">
                <div className="careers-header">
                    <div></div>
                    <h2 className="title-cariere">
                        {" "}
                        Alătură-te echipei "WORK Management"
                    </h2>
                    <div className="custom-shape-divider-bottom-1634577933">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="team-beliefs">
                    <div className="item-title">
                        Câteva lucruri despre echipa noastră.
                    </div>

                    <div className="item-content">
                        <div className="single-belief">
                            <div className="belief-title">
                                Ce vei găsi în echipa "Work"
                            </div>
                            <div className="belief-content">
                                Work Management oferă mediul ideal de dezvoltare
                                persoanelor interesate să facă carieră in
                                domeniile SSM, SU, RSVTI si MEDIU.
                            </div>
                        </div>
                        <div className="single-belief">
                            <div className="belief-title">
                                Puțin despre viitorul tău job
                            </div>
                            <div className="belief-content">
                                Vei beneficia de un program flexibil: part time
                                sau full time. Oferim, de asemenea, recompensare
                                satisfăcătoare a muncii. Suntem un colectiv
                                profesionist şi dinamic. Ne concentrăm mereu pe
                                nevoile clienților noștri și dispunem de
                                logistică la un nivel înalt de performanţă.
                            </div>
                        </div>

                        <div className="single-belief">
                            <div className="belief-title">
                                Condițiile care trebuie îndeplinite
                            </div>
                            <div className="belief-content">
                                Te potrivești într-un astfel de mediu? Mai avem
                                câteva cerințe:{" "}
                                <span>
                                    <b>
                                        Curs Inspector S.S.M., Curs Cadru tehnic
                                        P.S.I., Autorizaţie Operator RSVTI.
                                    </b>
                                </span>
                                permis auto (opţional), cunoştinţe de operare pe
                                calculator (opţional).
                                <br></br>
                                <span>
                                    <b>
                                        Așteptăm CV-ul tău pe email sau
                                        completează formularul de mai jos!
                                    </b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="careers-second-layer">
                    <div className="map_and_form">
                        <div className="form-wrapper">
                            {sent === ""
                                ? form
                                : sent === "success"
                                ? successMessage
                                : errorMessage}
                        </div>
                        <img
                            src={map}
                            className="country-map"
                            alt="harta-ro"
                        ></img>
                    </div>
                    <div className="job-search">
                        <h2>VEZI POSTURILE DISPONIBILE DIN TOATĂ ȚARA!</h2>
                        <JobsGrid></JobsGrid>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
const JobsGrid = () => {
    if (jobsData.length == 0)
        return <h3>Momentan nu exista posturi libere.</h3>;
    else
        return jobsData.map((data, index) => {
            return <JobCard JobCardData={data} key={index}></JobCard>;
        });
};

const JobCard = ({ JobCardData }) => {
    return (
        <div className="job-card-wrapper">
            <div className="job-title">
                <h3>{JobCardData.position}</h3>
                <p>
                    <FiMapPin></FiMapPin>
                    {JobCardData.city}
                </p>
            </div>
            <div className="job-description">
                <h4>Descrierea jobului:</h4>
                <p>{JobCardData.job_description}</p>
                <h4>Candidatul ideal:</h4>
                <p>{JobCardData.expectations}</p>
            </div>
        </div>
    );
};

const jobsData = [
    {
        position: "INSPECTOR SSM, CTPSI, RSVTI, RESPONSABIL MEDIU - 5 poziții",
        city: "București, Galați, Iași, Sibiu, Târgu-Mureș",
        expectations:
            "- responsabil;\n" +
            "- ambițios;\n" +
            "- comunicativ;\n" +
            "- ordonat și organizat;\n\n" +
            "De asemenea, trebuie sa:\n" +
            "- fii absolvent de studii superioare (studiile tehnice - constituie un avantaj) ;\n" +
            "- să dețină cunoștințe de operare PC - Word, Excel, Power Point;\n" +
            "- deții diplome de: inspector SSM, CT PSI (OP RSVTI, Responsabil gestiunea deseurilor - constituie un avantaj)",
        job_description:
            "Tipul jobului: Full Time, Part Time\n" +
            "Atribuții și responsabilități:\n" +
            " Deplasarea la sediile clienților, pentru:\n" +
            "- instruirea introductiv generală a angajaților în domeniile securității și sănătății în muncă și al situațiilor de urgență;\n" +
            "- consultanță pe probleme SSM, SU, RSVTI și MEDIU, privind reglementarile legale în domeniu (efectuarea controalelor interne la sediile clienților, diverse evidențe cerute de către clienți; actualizare documentații, etc);\n" +
            "- planificarea și organizarea activităților de securitate și sănătate în muncă, situații de urgență, RSVTI și mediu;\n" +
            "- supravegherea și verificarea tehnică a instalațiilor ce intră sub incidența legislației ISCIR;\n\n" +
            "Alte activități:\n" +
            "- disponibilitate pentru situații neprevazute (controale din partea autorităților, evenimente de muncă, etc);\n" +
            "- planificarea și organizarea portofoliului de clienți, din zona arondată (lunar, trimestrial);",
    },
    {
        position: "Asistent Manager - sediu",
        city: "București",
        expectations:
            "- responsabil;\n" +
            "- ambițios;\n" +
            "- comunicativ;\n" +
            "- ordonat și organizat;\n" +
            "- absolvent de studii medii sau superioare;\n" +
            "- să dețină cunoștințe de operare PC - Word, Excel, Power Point;\n" +
            "- să aibă capacitatea de a se integra în echipa Work Management;\n",
        job_description:
            "Atribuții și responsabilități:\n" +
            "- primirea clienților;\n" +
            "- suport pentru colegii din companie, care desfășoară activități de teren;\n" +
            "- redactarea și elaborarea anumitor documente, în domeniile SSM, SU și RSVTI;\n" +
            "- organizarea și derularea activitatilor zilnice;\n" +
            "- menținerea legăturii cu colegii din țară, furnizorii și clienții Work Management;\n" +
            "- utilizarea echipamentelor de birou (fax, xerox, imprimantă, scanner)\n",
    },
    {
        position: "Inspector SSM, CTPSI, RSVTI, Responsabil Mediu",
        city: "Cluj-Napoca",
        expectations:
            "- responsabil;\n" +
            "- ambițios;\n" +
            "- cu spirit de echipă;\n" +
            "- comunicativ;\n" +
            "- disponibil pentru deplăsari;\n" +
            "- serios;\n" +
            "- punctual;\n",
        job_description:
            "Deplasarea la sediile clienților, pentru:\n\n" +
            "- instruirea introductiv generală a angajaților în domeniile securității și sănătății în muncă și al situațiilor de urgență;\n" +
            "- consultanță pe probleme SSM, SU, RSVTI și MEDIU, privind reglementările legale în domeniu (efectuarea controalelor interne la sediile clienților, diverse evidențe cerute de către clienți; actualizare documentații, etc);\n" +
            "- planificarea și organizarea activităților de securitate și sănătate în muncă, situații de urgență, RSVTI și mediu;\n" +
            "- supravegherea și verificarea tehnică a instalațiilor ce intră sub incidența legislației ISCIR;\n" +
            "- alte activități conexe, ce reies din aceste domenii.\n\n" +
            "Alte activități:\n\n" +
            "- planificarea și organizarea portofoliului de clienți, din zona arondată (lunar, trimestrial);\n" +
            "- disponibilitate pentru situații neprevăzute (controale din partea autorităților, evenimente de muncă, etc);\n" +
            "- colaborarea cu departamentele interne ale Work Management;",
    },
];
