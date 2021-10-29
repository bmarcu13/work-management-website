import React from "react";
import "./CerereOferta.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import {MdAlternateEmail} from "react-icons/md";
import cerere_oferta from "../../img/cerere_oferta.jpg";
export default function CerereOferta() {
    const [checked, setChecked] = React.useState(true);
    return (
        <>
            <div className="cerere-oferta-page">
            <h2> Solicită o ofertă personalizată și fă primul pas în protejarea echipei tale.</h2>
                <div className="form-wrapper">
                    <form className="cerere-oferta-form">
                    <p className="title"><MdAlternateEmail size={50} color="rgb(255, 147, 6)" style={{marginBottom:'-10px', marginRight:'50px'}}></MdAlternateEmail>Formular Cerere Ofertă </p>
                  
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
                            <p style={{fontWeight:'bold'}}>                                    Companie
                                    <CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    required
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Companie"
                                    autofocus
                                />
                            </div>
                            <div >
                                 <p style={{fontWeight:'bold'}}>Funcție</p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Funcție"
                                    autofocus
                                />
                            </div>
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
                                    Subiect<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Subiect"
                                    autofocus
                                />
                            </div>
                        <div className="row">
                        <p style={{fontWeight:'bold'}}>Conținutul E-mailului</p>
                            <textarea
                                className="cerere-oferta-input mesaj-input"
                                rows="10"
                                placeholder="Scrie-ne aici ce ai nevoie."
                            />
                        </div>
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
