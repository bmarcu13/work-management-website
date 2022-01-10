import React from "react";
import "./Cariere.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import {MdAlternateEmail} from "react-icons/md";
import {ImAttachment} from "react-icons/im";
import {FiMapPin} from "react-icons/fi";
import Map from "./Map.js"

import careerHeader from "../../img/team-header.png";

export default function CarierePage() {
    const [checked, setChecked] = React.useState(true);
    return (
        <>
         <div className="cariera-page">
         <div className="portfolio-header">
                <img src={careerHeader} />
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
                <h2 className="title-cariere"> Alătură-te echipei "WORK Management"</h2>
                <div class="custom-shape-divider-bottom-1634577933">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>      
<div class="team-beliefs">
	
	<div class="item-title">
		Câteva lucruri despre echipa noastră.
	</div>
	
	<div class="item-content">
        <div class="single-belief">
			<div class="belief-title">Ce vei găsi în echipa "Work"</div>
			<div class="belief-content">Work Management oferă mediul ideal de dezvoltare persoanelor interesate să facă carieră în domeniul protecției muncii, prevenirea și stingerea incendiilor (p.s.i.) evaluarea riscurilor sau RSVTI.</div>
		</div>
		<div class="single-belief">
			<div class="belief-title">Puțin despre viitorul tău job</div>
			<div class="belief-content">Vei beneficia de un program flexibil: part time sau full time. Oferim, de asemenea, recompensare satisfăcătoare a muncii. Suntem un colectiv profesionist şi dinamic. Ne concentrăm mereu pe nevoile clienților noștri și dispunem de logistică la un nivel înalt de performanţă.</div>
		</div>
		
		<div class="single-belief">
			<div class="belief-title">Condițiile care trebuie îndeplinite</div>
			<div class="belief-content">Te potrivești într-un astfel de mediu? Mai avem câteva cerințe: Abilitare S.S.M., autorizare pe linie de P.S.I., autorizaţie RSVTI, experienţă în domeniu, permis auto (opţional), cunoştinţe de operare pe calculator (opţional).
<br></br><span style={{fontWeight:'bold'}}>Așteptăm CV-ul tău pe email sau completează formularul de mai jos!</span></div>
		</div>
		
		
	</div>
		
</div>
            <div className="careers-second-layer">
<div className="map_and_form">
            <div className="form-wrapper">
                    <form className="cariere-form">
                    <p className="cariere-form-title">Vino în Echipa WORK!</p>
                        <div className="row">
                            <p style={{fontWeight:'bold'}}>
                                Nume și Prenume
                                <CgAsterisk color="red"></CgAsterisk>
                            </p>
                            <input
                                className="cerere-oferta-input"
                                type="text"
                                placeholder="Nume și Prenume"
                                autofocus
                            />
                        </div>
                        <div className="special-inputs">
                            <div>
                            <p style={{fontWeight:'bold'}}>
                                    Email<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Email"
                                    autofocus
                                />
                            </div>
                            <div>
                            <p style={{fontWeight:'bold'}}>
                                    Telefon<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Telefon"
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="row">
                                <p style={{fontWeight:'bold'}}>
                                    Poziția pe care doriți să o ocupați<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Subiect"
                                    autofocus
                                />
                        </div>
                        <div className="row">
                        <p style={{fontWeight:'bold'}}>Mesaj</p>
                            <textarea
                                className="cerere-oferta-input mesaj-input"
                                rows="10"
                                placeholder="Scrie aici motivele pentru care te potrivesti echipei noastre."
                            />
                        </div>
                        <p className="attach-text"><ImAttachment size={25}></ImAttachment>Atașați aici CV-ul dvs:</p>
                    
                        <input type="file" style={{alignSelf:'center'}}
                                id="avatar" name="avatar"
                                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf">
                        </input>
                        <p>
                            {" "}
                            <input
                                required
                                type="checkbox"
                                defaultChecked={!checked}
                                onChange={() => setChecked(!checked)}
                            ></input>
                            Sunt de acord cu{" "}
                            <span style={{ textDecoration: "underline" }}>
                                Politica de Confidențialitate.
                            </span>
                            <CgAsterisk color="red"></CgAsterisk>
                        </p>
                        <button className="trimite-btn">
                           
                            Trimite
                        </button>
                    </form>
                </div>
               <Map></Map>
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
    if(jobsData.length==0)
        return <h3>Momentan nu exista posturi libere.</h3>
    else
    return jobsData.map((data, index) => {
            return <JobCard JobCardData={data}></JobCard>;
    });
};


const JobCard = ({ JobCardData }) => {
    return (
        <div className="job-card-wrapper">
            <div className="job-title">
                <h3>{JobCardData.position}</h3>
                <p><FiMapPin></FiMapPin>{JobCardData.city}</p>
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
        position:"Asistent Manager - sediu",
        city:"București",
        expectations:"- responsabil;\n"+
        "- ambițios;\n"+
        "- comunicativ;\n"+
        "- ordonat și organizat;\n"+
        "- absolvent de studii medii sau superioare;\n"+
        "- să dețină cunoștințe de operare PC - Word, Excel, Power Point;\n"+
        "- să aibă capacitatea de a se integra în echipa Work Management;\n",
        job_description:"Atribuții și responsabilități:\n"+
        "- primirea clienților;\n"+
        "- suport pentru colegii din companie, care desfășoară activități de teren;\n"+
        "- redactarea și elaborarea anumitor documente, în domeniile SSM, SU și RSVTI;\n"+
        "- organizarea și derularea activitatilor zilnice;\n"+
        "- menținerea legăturii cu colegii din țară, furnizorii și clienții Work Management;\n"+
        "- utilizarea echipamentelor de birou (fax, xerox, imprimantă, scanner)\n"
    },
    {
        position:"INSPECTOR",
        city:"Bucuresti",
        expectations:"- responsabil;\n"+
        "- ambițios;\n"+
        "- cu spirit de echipă;\n"+
        "- comunicativ;\n"+
        "- disponibil pentru deplăsari;\n"+
        "- serios;\n"+
        "- punctual;\n",
        job_description:"Deplasarea la sediile clienților, pentru:\n\n"+
        "- instruirea introductiv generală a angajaților în domeniile securității și sănătății în muncă și al situațiilor de urgență;\n"+
        "- consultanță pe probleme SSM, SU, RSVTI și MEDIU, privind reglementările legale în domeniu (efectuarea controalelor interne la sediile clienților, diverse evidențe cerute de către clienți; actualizare documentații, etc);\n"+
        "- planificarea și organizarea activităților de securitate și sănătate în muncă, situații de urgență, RSVTI și mediu;\n"+
        "- supravegherea și verificarea tehnică a instalațiilor ce intră sub incidența legislației ISCIR;\n"+
        "- alte activități conexe, ce reies din aceste domenii.\n\n"+
        "Alte activități:\n\n"+
        "- planificarea și organizarea portofoliului de clienți, din zona arondată (lunar, trimestrial);\n"+
        "- disponibilitate pentru situații neprevăzute (controale din partea autorităților, evenimente de muncă, etc);\n"+
        "- colaborarea cu departamentele interne ale Work Management;",
    },

]