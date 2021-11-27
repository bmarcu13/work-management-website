import React from "react";
import ContactForm from "../ContactForm/ContactForm";

import "./ContactSection.css";

import { SiTheconversation } from "react-icons/si";
import car from "../../img/blob_car.png";


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
                    <img src={car}></img>
                </div>
                <div className="wrapper">
                    <div className="title">
                        <h1 id="contact-form-title">
                            {" "}
                            SCRIE-NE!{" "}
                            <SiTheconversation
                                size={36}
                                style={{ verticalAlign: "top" }}
                            ></SiTheconversation>
                        </h1>
                        <p style={{ fontSize: "20px" }}>
                            Vrei să afli mai multe, să ne cunoști sau să faci o
                            sesizare? Suntem la un mail distanță.
                        </p>
                    </div>
                    <ContactForm></ContactForm>
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

const LeftSide = () => {
    return <div classname="left-side-wrapper">ceva</div>;
};
