import React from "react";
import "./Cariere.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import {MdAlternateEmail} from "react-icons/md";

export default function CarierePage() {
    const [checked, setChecked] = React.useState(true);
    return (
        <>
         <div className="cariera-page">
            
<div class="team-beliefs">
	
	<div class="item-title">
		Cateva lucruri despre echipa noastra.
	</div>
	
	<div class="item-content">
        <div class="single-belief">
			<div class="belief-title">Ce vei gasi in echipa Work</div>
			<div class="belief-content">Work Management ofera mediul ideal de dezvoltare persoanelor interesate sa faca cariera in domeniulprotectia muncii, prevenirea si stingerea incendiilor (p.s.i.) evaluarea riscurilor si RSVTI.</div>
		</div>
		<div class="single-belief">
			<div class="belief-title">Putin despre viitorul tau job</div>
			<div class="belief-content">Vei beneficia de un program flexibil: part time, full time sau colaborare externă. Oferim de asemenea recompensare satisfăcătoare a muncii;</div>
		</div>
		
		<div class="single-belief">
			<div class="belief-title">Ca si echipa</div>
			<div class="belief-content">Suntem un colectiv profesionist şi dinamic. Ne focusam mereu spre nevoile clientilor nostri si dispunem de logistică la un nivel înalt de performanţă.</div>
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
                                    Pozitia pe care doriti sa o ocupati<CgAsterisk color="red"></CgAsterisk>
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
                                placeholder="Scrisoare de intentie."
                            />
                        </div>
                        <label for="avatar">Ataseaza aici CV-ul tau:</label><br></br>
                        <input type="file"
                                id="avatar" name="avatar"
                                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
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
                        <button className="cerere-oferta-send-btn">
                           
                            Trimite
                        </button>
                    </form>
                </div>
         </div>
            <Footer></Footer>
        </>
    );
}
