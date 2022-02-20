import React from "react";

import "./ContactPage.css";

import {
    BsFillHouseFill,
    BsPinMapFill,
    BsFillFileEarmarkCodeFill,
} from "react-icons/bs";
import { AiOutlineFieldNumber } from "react-icons/ai";

import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

import StefanaTanase from "../../img/stefana_tanase.jpg";
import NicoletaRosu from "../../img/nicoleta_rosu.jpg";
import AlinaMihai from "../../img/alina_mihai.jpg";
import ContactForm from "../../Components/v2/ContactForm/ContactForm";
import TeamMemberCard from "../../Components/v2/TeamMemberCard/TeamMemberCard";
import { CgSmileNone } from "react-icons/cg";

export default function ContactPage() {
    const teamMembers = [
        {
            name: "Ștefana Tănase",
            alt: "angajat-departament-ofertare",
            photo: StefanaTanase,
            position: "Departament ofertare",
            tel: "+40736602115",
            email: "stefana.tanase@workmanagement.ro",
        },
        {
            name: "Alina Mihai",
            alt: "angajat-departament-ofertare",
            photo: AlinaMihai,
            position: "Departament ofertare",
            tel: "+40728138235",
            email: "alina.mihai@workmanagement.ro",
        },
        {
            name: "Nicoleta Roșu",
            alt: "angajat-departament-consultanta-tehnica",
            photo: NicoletaRosu,
            position: "Departament consultanță",
            tel: "0730.709.723",
            email: "nicoleta.rosu@workmanagement.ro",
        },
    ];

    const mapComponent = () => {
        return (
            <div
                class="gmap_canvas"
                style={{
                    background: "none!important",
                    height: "350px",
                    width: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    border: "none",
                    overflow: "hidden",
                }}
            >
                <iframe
                    style={{
                        width: "100%",
                        height: "100%",
                        frameborder: "0",
                        scrolling: "no",
                    }}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Bdul%20Regina%20Maria,nr%2025,%20%20Sector%204,%20Bucuresti&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </div>
        );
    };

    return (
        <div className="contact-page">
            <div className="header">
                <div className="first">
                    <div className="title">
                        <h1>
                            Colegele noastre sunt aici să raspundă întrebărilor
                            tale!
                        </h1>
                    </div>
                    <div className="team">
                        {teamMembers.map((info) => {
                            return (
                                <TeamMemberCard
                                    name={info.name}
                                    alt={info.alt}
                                    photo={info.photo}
                                    position={info.position}
                                    tel={info.tel}
                                    email={info.email}
                                ></TeamMemberCard>
                            );
                        })}
                    </div>
                </div>
                <div className="second">
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
            <div className="aditional-info">
                <p>
                    <BsFillHouseFill
                        size={25}
                        style={{
                            margin: "0px 7px ",
                            color: "rgb(0, 61, 153)",
                        }}
                    ></BsFillHouseFill>
                    Denumire: S.C. WORK MANAGEMENT S.R.L.
                </p>
                <p>
                    <BsPinMapFill
                        size={25}
                        style={{
                            margin: "0px 7px ",
                            color: "rgb(0, 61, 153)",
                        }}
                    ></BsPinMapFill>
                    Sediul social: B-dul Regina Maria, Nr. 25, Sector 4,
                    București
                </p>
                <p>
                    <AiOutlineFieldNumber
                        size={25}
                        style={{
                            margin: "0px 7px ",
                            color: "rgb(0, 61, 153)",
                        }}
                    ></AiOutlineFieldNumber>
                    Nr. Reg. Com: J40 / 127 / 2007
                </p>
                <p>
                    <BsFillFileEarmarkCodeFill
                        size={25}
                        style={{
                            margin: "0px 7px ",
                            color: "rgb(0, 90, 153)",
                        }}
                    ></BsFillFileEarmarkCodeFill>
                    Cod fiscal: RO20363205
                </p>
            </div>
            <div className="map-conatier">{mapComponent()}</div>
            <Footer></Footer>
        </div>
    );
}
