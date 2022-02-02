import React, { useState } from "react";
import "./CerereOferta.css";
import Footer from "../../Components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";

import axios from "axios";

export default function CerereOferta() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [messageBody, setMessageBody] = useState("");
    const [messageSubject, setMessageSubject] = useState("");
    const [post, setPost] = useState("");
    const [companyName, setCompanyName] = useState("");

    const handleSend = async (event) => {
        const formData = {
            type: "offerRequest",
            name: name,
            email: email,
            tel: tel,
            position: post,
            companyName: companyName,
            messageSubject: messageSubject,
            messageBody: messageBody,
        };

        event.preventDefault();
        try {
            // axios({
            //     method: "post",
            //     url: `${process.env.REACT_APP_API}`,
            //     headers: { "content-type": "application/json" },
            //     data: formData,
            // }).then((res) => {
            //     console.log(res);
            //     setSent("success");
            // });
        } catch (erorr) {
            console.log(erorr);
            // setSent("failed");
        }
    };

    return (
        <>
            <div className="cerere-oferta-page">
                <h2>
                    {" "}
                    Solicită o ofertă personalizată și fă primul pas în
                    protejarea echipei tale.
                </h2>
                <div className="form-wrapper">
                    <form className="cerere-oferta-form" onSubmit={handleSend}>
                        <p className="title">
                            <MdAlternateEmail
                                size={50}
                                color="rgb(255, 147, 6)"
                                style={{
                                    marginBottom: "-10px",
                                    marginRight: "50px",
                                }}
                            ></MdAlternateEmail>
                            Formular Cerere Ofertă{" "}
                        </p>

                        <div className="row">
                            <p style={{ fontWeight: "bold" }}>
                                Nume și Prenume
                                <CgAsterisk color="red"></CgAsterisk>
                            </p>
                            <input
                                className="cerere-oferta-input"
                                type="text"
                                placeholder="Nume și Prenume"
                                autofocus
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="special-inputs">
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>
                                    {" "}
                                    Companie
                                    <CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    required
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Companie"
                                    autofocus
                                    onChange={(e) => {
                                        setCompanyName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>Funcție</p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Funcție"
                                    autofocus
                                    onChange={(e) => {
                                        setPost(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="special-inputs">
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>
                                    Email<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Email"
                                    autofocus
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="row">
                                <p style={{ fontWeight: "bold" }}>
                                    Telefon<CgAsterisk color="red"></CgAsterisk>
                                </p>
                                <input
                                    className="cerere-oferta-input"
                                    type="text"
                                    placeholder="Telefon"
                                    autofocus
                                    onChange={(e) => {
                                        setTel(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <p style={{ fontWeight: "bold" }}>
                                Subiect<CgAsterisk color="red"></CgAsterisk>
                            </p>
                            <input
                                className="cerere-oferta-input"
                                type="text"
                                placeholder="Subiect"
                                autofocus
                                required
                                onChange={(e) => {
                                    setMessageSubject(e.target.value);
                                }}
                            />
                        </div>
                        <div className="row">
                            <p style={{ fontWeight: "bold" }}>
                                Conținutul E-mailului
                                <CgAsterisk color="red"></CgAsterisk>
                            </p>
                            <textarea
                                className="cerere-oferta-input mesaj-input"
                                rows="10"
                                placeholder="Scrie-ne aici ce ai nevoie."
                                required
                                onChange={(e) => {
                                    setMessageBody(e.target.value);
                                }}
                            />
                        </div>
                        <p>
                            {" "}
                            <input required type="checkbox"></input>
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
