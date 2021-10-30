import React from "react";
import "./ContactForm.css";

import { BsArrowReturnRight } from "react-icons/bs";

export default function ContactForm() {
    const [checked, setChecked] = React.useState(true);
    return (
        <div class="contact__container">
            <form class="contact__form">
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
