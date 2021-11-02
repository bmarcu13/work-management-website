import React from "react";
import "./Cariere.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import {MdAlternateEmail} from "react-icons/md";
import {ImAttachment} from "react-icons/im";

export default function CarierePage() {
    const [checked, setChecked] = React.useState(true);
    return (
        <>
         <div className="cariera-page">
            
<div class="team-beliefs">
	
	<div class="item-title">
		Câteva lucruri despre echipa noastră.
	</div>
	
	<div class="item-content">
        <div class="single-belief">
			<div class="belief-title">Ce vei gasi în echipa Work</div>
			<div class="belief-content">Work Management oferă mediul ideal de dezvoltare persoanelor interesate să facă carieră în domeniul protecției muncii, prevenirea și stingerea incendiilor (p.s.i.) evaluarea riscurilor sau RSVTI.</div>
		</div>
		<div class="single-belief">
			<div class="belief-title">Puțin despre viitorul tău job</div>
			<div class="belief-content">Vei beneficia de un program flexibil: part time, full time sau colaborare externă. Oferim, de asemenea, recompensare satisfăcătoare a muncii.</div>
		</div>
		
		<div class="single-belief">
			<div class="belief-title">Ca si echipa</div>
			<div class="belief-content">Suntem un colectiv profesionist şi dinamic. Ne concentrăm mereu pe nevoile clienților noștri și dispunem de logistică la un nivel înalt de performanţă.</div>
		</div>
		
		
	</div>
		
</div>

            <div className="form-wrapper">
                    <form className="cariere-form">
                    <p className="cariere-form-title">Vino in Echipa WORK</p>
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
         </div>
            <Footer></Footer>
        </>
    );
}
