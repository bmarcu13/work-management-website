import React from "react";
import "./ContactForm.css";

import { useState } from "react";
import { FaRegUser as IconName } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { SiTheconversation } from "react-icons/si";
import { CgAsterisk } from "react-icons/cg";
import { HiOutlineMail as IconEmail } from "react-icons/hi";

export default function ContactForm() {
    const [checked, setChecked] = React.useState(true);
    return (
        <div class="contact__container">
            <form class="contact__form">
                <p>Name</p>
                <input class="contact__form-input" type="name" />

                <p>Email</p>
                <input class="contact__form-input" type="email" />

                <p>Phone</p>
                <input class="contact__form-input" type="phone" />

                <p>Message</p>
                <textarea class="contact__form-textarea" type="text"></textarea>

                <input type="submit" value="Send message" />
            </form>
        </div>
    );
}
