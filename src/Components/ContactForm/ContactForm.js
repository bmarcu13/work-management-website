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
    const [sent,setSent]=useState("");

    const handleSend = async (event) => {
        let formData = new FormData();
        formData.append("id", "contact");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("messageBody", messageBody);

        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/send_email", formData);
            setSent("success");
        } catch (erorr) {
            console.log(erorr);
            setSent("failed");
        }
    };

    const form = (<form class="contact__form" onSubmit={handleSend}>
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
</form>);

        const successMessage = ( <h3>Mesajul a fost trimis! Mulțumim!</h3>);
        const errorMessage = ( <h3>Ne pare rău, mesajul nu a putut fi trimis. Vă rugăm contactați-ne la numărul de telefon (0736) 602 115</h3>);
    return (
        
        <div class="contact__container">
            {
                sent === "" ? form : sent === "success" ? successMessage : errorMessage
            }
            
        </div>
    );
}
