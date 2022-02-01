import React, { useState } from "react";
import "./Cariere.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import axios from "axios";
import map from "../../img/romania_judete.png";

export default function CarierePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [position, setPosition] = useState("");
    const [messageBody, setMessageBody] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [sent, setSent] = useState("");

    const handleSend = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("id", "job");
        formData.append("name", name);
        formData.append("position", position);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("messageBody", messageBody);
        formData.append("file", attachment);
        formData.append("fileName", attachment.name);

        try {
            const res = await axios.post(
                "http://localhost:4000/send_email",
                formData
            );
            setSent("success");
        } catch (erorr) {
            console.log(erorr);
            setSent("failed");
        }
    };

    const form = (
        <form className="cariere-form" onSubmit={handleSend}>
            <p className="cariere-form-title">Vino în Echipa WORK!</p>
            <div className="row">
                <p style={{ fontWeight: "bold" }}>
                    Nume și Prenume
                    <CgAsterisk color="red"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="text"
                    placeholder="Nume și Prenume"
                    required
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <div className="special-inputs">
                <div>
                    <p style={{ fontWeight: "bold" }}>
                        Email
                        <CgAsterisk color="red"></CgAsterisk>
                    </p>
                    <input
                        className="cerere-oferta-input"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <p style={{ fontWeight: "bold" }}>
                        Telefon
                        <CgAsterisk color="red"></CgAsterisk>
                    </p>
                    <input
                        className="cerere-oferta-input"
                        type="text"
                        placeholder="Telefon"
                        onChange={(e) => {
                            setTel(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <p style={{ fontWeight: "bold" }}>
                    Poziția pe care doriți să o ocupați
                    <CgAsterisk color="red"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="text"
                    placeholder="Subiect"
                    onChange={(e) => {
                        setPosition(e.target.value);
                    }}
                />
            </div>
            <div className="row">
                <p style={{ fontWeight: "bold" }}>
                    Mesaj
                    <CgAsterisk color="red"></CgAsterisk>
                </p>

                <textarea
                    className="cerere-oferta-input mesaj-input"
                    rows="10"
                    placeholder="Scrie aici motivele pentru care te potrivesti echipei noastre."
                    required
                    onChange={(e) => {
                        setMessageBody(e.target.value);
                    }}
                />
            </div>
            <p className="attach-text">
                <ImAttachment size={25}></ImAttachment>
                Atașați aici CV-ul dvs:
            </p>

            <input
                required
                type="file"
                style={{ alignSelf: "center" }}
                id="avatar"
                name="avatar"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
                onChange={(e) => {
                    setAttachment(e.target.files[0]);
                }}
            ></input>
            <p>
                {" "}
                <input required type="checkbox" required></input>
                Sunt de acord cu{" "}
                <span style={{ textDecoration: "underline" }}>
                    Politica de Confidențialitate.
                </span>
                <CgAsterisk color="red"></CgAsterisk>
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
                    <div
                        style={{
                            backgroundColor: "black",
                            top: "0",
                            position: "absolute",
                            opacity: ".3",
                            height: "350px",
                            width: "100%",
                        }}
                    ></div>
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
                                persoanelor interesate să facă carieră in domeniile SSM, SU, RSVTI si MEDIU.
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
                                câteva cerințe: <span style={{fontWeight:"bold"}}>Curs Inspector S.S.M., Curs Cadru tehnic P.S.I., Autorizaţie Operator RSVTI.</span>
                                permis auto (opţional), cunoştinţe
                                de operare pe calculator (opţional).
                                <br></br>
                                <span style={{ fontWeight: "bold" }}>
                                    Așteptăm CV-ul tău pe email sau completează
                                    formularul de mai jos!
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
