import React from "react";
import "./ContactForm.css";

import { useState } from "react";

import axios from "axios";

import { BsArrowReturnRight } from "react-icons/bs";

export default function ContactForm() {
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [messageBody, setMessageBody] = useState("");

    const handleSend = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/send_email", {
                id: "contact",
                content: {
                    name: name,
                    email: email,
                    tel: tel,
                    messageBody: messageBody,
                },
            });
        } catch (erorr) {
            console.log(erorr);
        }
    };

    return (
        <div class="contact__container">
            <form class="contact__form" onSubmit={handleSend}>
                <p>Nume</p>
                <input
                    class="contact__form-input"
                    type="name"
                    required
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <p>Email</p>
                <input
                    class="contact__form-input"
                    type="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

                <p>Telefon</p>
                <input
                    class="contact__form-input"
                    type="phone"
                    onChange={(e) => {
                        setTel(e.target.value);
                    }}
                />

                <p>Mesaj</p>
                <textarea
                    class="contact__form-textarea"
                    type="text"
                    required
                    onChange={(e) => {
                        setMessageBody(e.target.value);
                    }}
                ></textarea>

                <button type="submit">
                    <p style={{ marginRight: "10px", fontSize: "16px" }}>
                        Trimite
                    </p>
                    <BsArrowReturnRight size={16} />
                </button>
            </form>
        </div>
    );
}
