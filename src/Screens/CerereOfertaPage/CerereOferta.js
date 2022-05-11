import React, { useState } from "react";
import "./CerereOferta.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";

import axios from "axios";

export default function CerereOferta() {
    const [sent, setSent] = useState("");
    const handleSend = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.target);
        formData.append("type", "offerRequest");

        try {
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API}`,
                headers: { "content-type": "application/json" },
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

    const successMessage = <h3>Mesajul a fost trimis! Mulțumim!</h3>;
    const errorMessage = (
        <h3>
            Ne pare rău, mesajul nu a putut fi trimis. Vă rugăm contactați-ne la
            numărul de telefon (0736) 602 115
        </h3>
    );

    const form = (
        <form className="cerere-oferta-form" onSubmit={handleSend}>
            <p className="title">
                <MdAlternateEmail className="cerere-oferta-form-icon"
                    size={50}                   
                ></MdAlternateEmail>
                Formular Cerere Ofertă{" "}
            </p>

            <div className="row">
                <p >
                    Nume și Prenume
                    <CgAsterisk color="red"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="name"
                    placeholder="Nume și Prenume"
                    name="name"
                    autofocus
                    required
                />
            </div>
            <div className="special-inputs">
                <div className="row">
                    <p >
                        {" "}
                        Companie
                        <CgAsterisk color="red"></CgAsterisk>
                    </p>
                    <input
                        required
                        className="cerere-oferta-input"
                        type="text"
                        name="companyName"
                        placeholder="Companie"
                    />
                </div>
                <div className="row">
                    <p >Funcție</p>
                    <input
                        className="cerere-oferta-input"
                        type="text"
                        name="position"
                        placeholder="Funcție"
                    />
                </div>
            </div>
            <div className="special-inputs">
                <div className="row">
                    <p >
                        Email<CgAsterisk color="red"></CgAsterisk>
                    </p>
                    <input
                        className="cerere-oferta-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div className="row">
                    <p >
                        Telefon<CgAsterisk color="red"></CgAsterisk>
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
                <p >
                    Subiect<CgAsterisk color="red"></CgAsterisk>
                </p>
                <input
                    className="cerere-oferta-input"
                    type="text"
                    placeholder="Subiect"
                    name="messageSubject"
                    required
                />
            </div>
            <div className="row">
                <p >
                    Conținutul E-mailului
                    <CgAsterisk color="red"></CgAsterisk>
                </p>
                <textarea
                    className="cerere-oferta-input mesaj-input"
                    rows="10"
                    placeholder="Scrie-ne aici ce ai nevoie."
                    required
                    name="messageBody"
                />
            </div>
            <p >
                {" "}
                <input required type="checkbox"></input>
                Sunt de acord cu{" "}
                <span><u> Politica de Confidențialitate.</u>
                </span>
                <CgAsterisk color="red"></CgAsterisk>
            </p>
            <button className="cerere-oferta-send-btn">Trimite</button>
        </form>
    );

    return (
        <>
            <div className="cerere-oferta-page">
                <h2>
                    {" "}
                    Solicită o ofertă personalizată și fă primul pas în
                    protejarea echipei tale.
                </h2>
                <div className="form-wrapper">
                    {sent === ""
                        ? form
                        : sent === "success"
                        ? successMessage
                        : errorMessage}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
