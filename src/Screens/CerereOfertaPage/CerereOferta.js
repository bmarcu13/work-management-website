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
                <div className="form-wrapper">
                    <form className="cerere-oferta-form">
                        
                        <p className="title"><MdAlternateEmail size={50} color="grey" style={{marginBottom:'-10px', marginRight:'50px'}}></MdAlternateEmail>Formular Cerere Ofertă </p>
                        <div className="row">
                            <p>
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
                                <p>
                                    Companie
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
                                <p>Funcție</p>
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
                                <p>
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
                                <p>
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
                                <p>
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
                            <p>Conținutul E-mailului</p>
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
                                Politica de Confidentialitate.
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
