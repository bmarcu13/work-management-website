import React, { useState } from "react";
import axios from "axios";

import Field from "./Input/Field";
import "./ContactForm.css";

import { HiOutlineChatAlt } from "react-icons/hi";
import formbg from "../../../../src/img/layered-waves-services.svg";
import successGif from "../../../img/message-sent.gif";

export default function ContactForm(params) {
    const [sent, setSent] = useState("");
    const fields = params.fields;

    const handleSend = async (event) => {
        let formData = new FormData(event.target);
        formData.append("type", "contact");

        event.preventDefault();
        try {
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API}`,
                headers: { "content-type": "application/json" },
                data: formData,
            }).then((res) => {
                console.log(res);
                if (res.data.sent == true) setSent("success");
                else setSent("failed");
            });
        } catch (erorr) {
            console.log(erorr);
            setSent("failed");
        }
    };

    const renderSentSuccess = () => {
        return (
            <div
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0",
                    left: "0",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.7)",
                }}
            >
                <img
                    src={successGif}
                    style={{
                        width: "100px",
                        height: "auto",
                    }}
                ></img>
                <p
                    style={{
                        fontWeight: "700",
                        fontSize: "18px",
                        textAlign: "center",
                    }}
                >
                    Mesajul a fost trimit. Mulțumim!
                </p>
            </div>
        );
    };

    const renderSentFailre = () => {
        return (
            <div
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0",
                    left: "0",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.7)",
                }}
            >
                <p
                    style={{
                        fontWeight: "700",
                        fontSize: "18px",
                        maxWidth: "90%",
                        margin: "0",
                        textAlign: "center",
                    }}
                >
                    Ne pare rău, mesajul nu a putut fi trimis.
                </p>
                <br></br>
                <p
                    style={{
                        fontWeight: "700",
                        fontSize: "18px",
                        maxWidth: "90%",
                        margin: "0",
                        textAlign: "center",
                    }}
                >
                    Vă rugăm contactați-ne la numărul de telefon{" "}
                    <a
                        style={{ textDecoration: "none" }}
                        href="tel:+40736602115"
                    >
                        +40736602115
                    </a>
                </p>
            </div>
        );
    };

    return (
        <div className="formv2-container">
            <form className="formv2" onSubmit={handleSend}>
                {/* <img src={formbg}></img> */}
                <div className="title">
                    <h1>
                        Scrie-ne
                        <HiOutlineChatAlt
                            style={{ marginBottom: "10px" }}
                        ></HiOutlineChatAlt>
                    </h1>
                    <p>
                        Vrei să afli mai multe, să ne cunoști sau să faci o
                        sesizare? Suntem la un mail distanță.
                    </p>
                </div>
                <div className="fields">
                    {fields.map((data) => {
                        return (
                            <Field
                                name={data.description}
                                identifier={data.name}
                                type={data.type}
                            ></Field>
                        );
                    })}
                </div>
                <input
                    type="submit"
                    className="submit-btn"
                    value="Trimite"
                ></input>
            </form>
            {sent === "success"
                ? renderSentSuccess()
                : sent === "failed" && renderSentFailre()}
        </div>
    );
}
