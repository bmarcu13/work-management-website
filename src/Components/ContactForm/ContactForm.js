import React from "react";
import "./ContactForm.css";

import { useState } from "react";

import axios from "axios";

import { BsArrowReturnRight } from "react-icons/bs";

export default function ContactForm() {
    const [checked, setChecked] = useState(true);
    const [text, setText] = useState("");

    const handleSend = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/send_email", { text });
        } catch (erorr) {
            console.log(erorr);
        }
    };

    return (
        <div class="contact__container">
            <form class="contact__form" onSubmit={handleSend}>
                <p>Nume</p>
                <input class="contact__form-input" type="name" required />

                <p>Email</p>
                <input class="contact__form-input" type="email" required />

                <p>Telefon</p>
                <input class="contact__form-input" type="phone" />

                <p>Mesaj</p>
                <textarea
                    class="contact__form-textarea"
                    type="text"
                    required
                    onChange={(e) => {
                        setText(e.target.value);
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
