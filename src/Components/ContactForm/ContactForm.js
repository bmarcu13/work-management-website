import React from "react";
import "./ContactForm.css";


import {useState} from "react";
import { FaRegUser as IconName } from "react-icons/fa";
import {GrPhone} from "react-icons/gr";
import {SiTheconversation} from "react-icons/si";
import {CgAsterisk} from "react-icons/cg";
import { HiOutlineMail as IconEmail } from "react-icons/hi";





export default function ContactForm() {
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <div className="contact-page">
           <div className="left-container-contact">
               <h3>Solicită o ofertă personalizată, completând formularul de aici.</h3>
               <button className="cerere-oferta-button" >Cerere Oferta </button>
           </div>
            <div className="form-container">
                <form>
                    <h1 id="contact-form-title"> SCRIE-NE! <SiTheconversation size={70} className="message-icon"></SiTheconversation></h1>
                    <p>
                        Vrei să afli mai multe, să ne cunoști sau să faci orice fel de sesizare? Suntem la un mail distanță.
                    </p>
                    <div class="form-group position-relative">
                        <div className="input-wrapper" id="formName">
                            <IconName className="form-icons" />
                            <input required type="text" placeholder="Nume" />
                        </div>
                    </div>
                    <div class="form-group position-relative">
                        <label for="formEmail" class="d-block">
                            <i class="icon" data-feather="mail"></i>
                        </label>
                        <div className="input-wrapper">
                            <IconEmail className="form-icons" />
                            <input
                                type="email"
                                id="formEmail"
                                class="form-control form-control-lg thick"
                                placeholder="E-mail"
                            />
                        </div>
                    <div class="form-group position-relative">
                        <div className="input-wrapper" id="formName">
                            <GrPhone className="form-icons" />
                            <input required type="text" placeholder="Telefon" />
                        </div>
                    </div>
                    </div>
                    <div className="input-wrapper">
                        <textarea
                            id="formMessage"
                            className="message-field"
                            rows="7"
                            placeholder="Mesajul tau"
                        />
                    </div>
                   <p> <input required type="checkbox"  
                            defaultChecked={!checked}  
                            onChange={() => setChecked(!checked)}>
                        </input>Sunt de acord cu <span style={{textDecoration:'underline'}}>Politica de Confidentialitate.</span><CgAsterisk color='red'></CgAsterisk></p>
                    <div class="text-center">
                        <button type="submit" className="button" tabIndex="-1">
                            Trimite
                        </button>
                    </div>
                </form>
                <div id="form-container-background"></div>
            </div>
        </div>
        
           			
            
        </div>
        );
}