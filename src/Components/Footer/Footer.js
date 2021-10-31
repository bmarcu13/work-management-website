import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import Logo from "../../img/logo-work.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsPersonCircle,  BsLinkedin } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
    return (
        <>
            <div className="footer-with-copyrights">
                <div className="footer-section">
                    <div class="custom-shape-divider-top-1635267772">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M1200 0L0 0 892.25 114.72 1200 0z"
                                class="shape-fill"
                            ></path>
                        </svg>
                    </div>

                    <div className="footer footer-left-container">
                        <img
                            src={Logo}
                            alt="logo"
                            style={{
                                width: "100px",
                                height: "auto",
                                margin: "auto",
                            }}
                        ></img>
                        <br></br>
                        <p style={{ color: "white", fontSize: "18px" }}>
                            Servicii de securitate și sănătate în muncă și de
                            protecție a mediului.
                        </p>
                        <hr
                            style={{
                                height: "1px",
                                width: "100px",
                                background: "orange",
                            }}
                        ></hr>
                        <p style={{ color: "white" }}>
                            {" "}
                            S.C. WORK MANAGEMENT S.R.L.
                        </p>
                        <hr
                            style={{
                                height: "1px",
                                width: "100px",
                                background: "orange",
                            }}
                        ></hr>
                        <a href="https://www.google.com/maps/place/Strada+Regina+Maria+25,+Cluj-Napoca+400000,+Romania/@46.752133,23.627683,17z/data=!4m5!3m4!1s0x47490c53a998b3a7:0x766fc2571b600f51!8m2!3d46.7521325!4d23.6276832?hl=en-US">
                            <p>
                                <FaMapMarkerAlt
                                    className="footer-icon"
                                    size={30}
                                ></FaMapMarkerAlt>
                                B-dul Regina Maria, Nr. 25                                
                            </p>
                        </a>
                    </div>
                    <div className="footer footer-center-container">
                        <h2
                            className="footer-title"
                            style={{ alignContent: "center" }}
                        >
                            Navighează
                        </h2>
                        <hr
                            style={{
                                width: "200px",
                                marginTop: "-5px",
                                background: "orange",
                                marginBottom: "50px",
                            }}
                        ></hr>
                        <ul className="links-list">
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Acasa
                                </li>
                            </Link>
                            <Link
                                to={"/servicii"}
                                style={{ textDecoration: "none" }}
                            >
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Toate Serviciile
                                </li>
                            </Link>
                            <Link
                                to={"/portofoliu"}
                                style={{ textDecoration: "none" }}
                            >
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Portofoliu Clienți
                                </li>
                            </Link>
                            <Link
                                to={"/cerere-oferta"}
                                style={{ textDecoration: "none" }}
                            >
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Cerere Ofertă
                                </li>
                            </Link>
                            <Link
                                to={"/cariere"}
                                style={{ textDecoration: "none" }}
                            >
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Cariere
                                </li>
                            </Link>
                            <Link
                                to={"/contact"}
                                style={{ textDecoration: "none" }}
                            >
                                <li>
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="footer footer-right-container">
                        <h2 className="footer-title">Contact</h2>
                        <hr
                            style={{
                                width: "200px",
                                marginTop: "-5px",
                                backgroundColor: "rgb(255, 173, 80)",
                            }}
                        ></hr>

                        <p>
                            <BsPersonCircle
                                className="footer-icon"
                                size={20}
                            ></BsPersonCircle>{" "}
                            Stefana Tănase<br></br>
                            <a href="tel: 0730.709.723">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                0730.709.723
                            </a>
                            <br></br>
                            <a href="tel: 021/335.01.02">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                021/335.01.02
                            </a>
                            <br></br>
                            <a href="mailto:stefana.tanase@workmanagement.ro">
                                <FiMail className="footer-icon"></FiMail>{" "}
                                stefana.tanase@workmanagement.ro
                            </a>
                            <br></br>
                            <br></br>
                            <BsPersonCircle
                                className="footer-icon"
                                size={20}
                            ></BsPersonCircle>
                            Alina Mihai<br></br>
                            <a href="mailto:alina.mihai@workmanagement.ro">
                                <FiMail className="footer-icon"></FiMail>{" "}
                                alina.mihai@workmanagement.ro
                            </a>
                            <br></br>
                            <br></br>
                            <BsPersonCircle
                                className="footer-icon"
                                size={20}
                            ></BsPersonCircle>{" "}
                            George Chișiu<br></br>
                            <a href="mailto:george.chisiu@workmanagement.ro">
                                <FiMail className="footer-icon"></FiMail>{" "}
                                george.chisiu@workmanagement.ro
                            </a>
                            
                            
                        </p>
                        <div style={{display:'flex', justifyContent: 'center'}}>
                        <a href="https://www.facebook.com/workmanagement.bucuresti">
                            <ImFacebook2
                                className="footer-icon"
                                size={30}
                                style={{margin:'5px 10px'}}
                            ></ImFacebook2>
                        </a>
                        <a href="https://ro.linkedin.com/company/work-management">
                            < BsLinkedin
                                className="footer-icon"
                                size={30}
                                style={{margin:'5px 10px'}}
                            ></BsLinkedin>
                        </a>
                       </div>
                    </div>
                </div>
                <hr
                    style={{
                        height: "1px",
                        width: "90%",
                        border: "none",
                        background: "orange",
                    }}
                ></hr>
                <div className="footer-down">
                    <div className="policy-button">
                        Politica de Securitate a Datelor cu caracter personal
                    </div>
                    <div className="policy-button">
                        Politica privind Prelucrarea Datelor cu caracter
                        personal
                    </div>
                    <div style={{ color: " rgb(168, 162, 162)" }}>
                        Website created by ?
                    </div>
                </div>
            </div>
        </>
    );
}
