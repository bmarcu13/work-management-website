import React from "react";

import "./ContactPage.css";

import {
    BsFillHouseFill,
    BsPinMapFill,
    BsFillFileEarmarkCodeFill,
} from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { AiOutlineFieldNumber } from "react-icons/ai";

import headerBanner from "../../img/contact-bckgr.jpg";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

import StefanaTanase from "../../img/stefana_tanase.jpg";
import NicoletaRosu from "../../img/nicoleta_rosu.jpg";
import AlinaMihai from "../../img/alina_mihai.jpg";

export default function ContactPage() {
    return (
        <div className="screen-component">
            <div className="portfolio-header">
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src={headerBanner}
                />
                <div
                    style={{
                        backgroundColor: "black",
                        top: "0",
                        position: "absolute",
                        opacity: ".4",
                        height: "350px",
                        width: "100%",
                    }}
                ></div>
                <h2> Contact</h2>
                <div class="custom-shape-divider-bottom-1634577933">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="contact-first-container">
                <div className="mapouter">
                    <div
                        class="gmap_canvas"
                        style={{
                            background: "none!important",
                            height: "100%",
                            width: "70%",
                            marginRight: "auto",
                            marginLeft: "auto",
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
                </div>
                <div className="contact-infos">
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
                        Sediul social: B-dul Regina Maria, Nr. 25
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
            </div>
            <h1
                style={{
                    textAlign: "center",
                    marginTop: "90px",
                    marginBottom: "40px",
                }}
            >
                Colegii noștri sunt aici să raspundă întrebărilor tale!
            </h1>
            <div className="team-section">
                <div className="team-member">
                    <div className="our-team">
                        <div className="pic">
                            <img src={StefanaTanase}></img>
                        </div>
                        <div class="team-content">
                            <h3 className="name">Ștefana Tănase</h3>
                            <h4 className="post">Departament Ofertare</h4>
                            <span className="post"></span>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="tel: 0730.709.723">
                                    <FiPhoneCall></FiPhoneCall>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:stefana.tanase@workmanagement.ro">
                                    <FiMail></FiMail>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="team-member">
                    <div className="our-team">
                        <div className="pic">
                            <img src={NicoletaRosu}></img>
                        </div>
                        <div className="team-content">
                            <h3 className="name">Roșu Nicoleta </h3>
                            <h4 className="post">
                                Contactează-mă în cazul în care ai nevoie de
                                consultanță tehnică!
                            </h4>
                        </div>
                        <ul class="social">
                            <li>
                                <a href="tel: 0736602115">
                                    <FiPhoneCall></FiPhoneCall>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#" ><FiMail></FiMail></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="team-member">
                    <div className="our-team">
                        <div className="pic">
                            <img src={AlinaMihai}></img>
                        </div>
                        <div className="team-content">
                            <h3 className="name">Mihai Alina</h3>
                            <h4 className="post">Departament Ofertare</h4>
                            <span className="post"></span>
                        </div>
                        <ul className="social">
                            {/* <li>
                                <a href="#" ><FiPhoneCall></FiPhoneCall></a>
                            </li> */}
                            <li>
                                <a href="mailto:alina.mihai@workmanagement.ro">
                                    <FiMail></FiMail>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
}
const TeamArray = [
    {
        name: "",
        photo: "",
        description: "",
        phone: "",
    },
];
