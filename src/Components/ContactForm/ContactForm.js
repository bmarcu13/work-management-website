import React, { useState } from "react";
import axios from "axios";

import "./ContactForm.css";
import { BsArrowReturnRight } from "react-icons/bs";

export default function ContactForm() {
    const [sent, setSent] = useState("");

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
                setSent("success");
            });
        } catch (erorr) {
            console.log(erorr);
            setSent("failed");
        }
    };

    const form = (
        <form class="contact__form" onSubmit={handleSend}>
            <p>Nume</p>
            <input
                class="contact__form-input"
                type="name"
                name="name"
                required
            />

            <p>Email</p>
            <input
                class="contact__form-input"
                type="email"
                name="email"
                required
            />

            <p>Telefon</p>
            <input class="contact__form-input" type="phone" name="phone" />

            <p>Mesaj</p>
            <textarea
                class="contact__form-textarea"
                type="text"
                name="messageBody"
                required
            ></textarea>

            <button type="submit">
                <p style={{ marginRight: "10px", fontSize: "16px" }}>Trimite</p>
                <BsArrowReturnRight size={16} />
            </button>
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
        <div className="contact__container">
            {sent === ""
                ? form
                : sent === "success"
                ? successMessage
                : errorMessage}
        </div>
    );
}
