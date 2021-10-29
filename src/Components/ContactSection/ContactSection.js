import React from "react";
import ContactForm from "../ContactForm/ContactForm";

import "./ContactSection.css";

export default function ContactSection() {
    return (
        <div className="contact-section">
            <div class="custom-shape-divider-top-1635533765">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>

            <div className="wrapper">
                <div className="top">
                    <div className="left-side-wrapper">ceva</div>
                    <ContactForm></ContactForm>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
}

const LeftSide = () => {
    return <div classname="left-side-wrapper">ceva</div>;
};
