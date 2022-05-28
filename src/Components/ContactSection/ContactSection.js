import React from "react";
import ContactForm from "../v2/ContactForm/ContactForm";

import "./ContactSection.css";

import { SiTheconversation } from "react-icons/si";
import map from "../../img/romania_judete_tr.png";

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
            <div className="form-contact-section">
                <div className="car-image">
                    <img src={map} alt="masina-work-management"></img>
                </div>
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ContactForm
                        fields={[
                            { description: "Nume", name: "name", type: "text" },
                            {
                                description: "Email",
                                name: "email",
                                type: "email",
                            },
                            {
                                description: "Telefon",
                                name: "phone",
                                type: "tel",
                            },
                            {
                                description: "Mesaj",
                                name: "messageBody",
                                type: "messageField",
                            },
                        ]}
                    ></ContactForm>
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1635751933">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
