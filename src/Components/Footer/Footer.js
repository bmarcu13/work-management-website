import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import Logo from "../../img/logo-work.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsPersonCircle, BsLinkedin } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="footer-with-copyrights">
                <div className="footer-section">
                    <div className="footer footer-left-container">
                        <img
                            src={Logo}
                            alt="logo"
                        ></img>
                        <br></br>
                        <p className="description-footer" >
                            Servicii de securitate și sănătate în muncă (SSM),
                            SU, RSVTI și MEDIU.
                        </p>
                        <hr className="hr-footer"
                        ></hr>
                        <h3>
                            {" "}
                            S.C. WORK MANAGEMENT S.R.L.
                        </h3>
                        <hr className="hr-footer"
                        ></hr>
                        <a href="https://www.google.com/maps/place/Strada+Regina+Maria+25,+Cluj-Napoca+400000,+Romania/@46.752133,23.627683,17z/data=!4m5!3m4!1s0x47490c53a998b3a7:0x766fc2571b600f51!8m2!3d46.7521325!4d23.6276832?hl=en-US">
                            <p>
                                <FaMapMarkerAlt
                                    className="footer-icon"
                                    size={30}
                                ></FaMapMarkerAlt>
                                B-dul Regina Maria, Nr. 25, Sector 4, București
                            </p>
                        </a>
                    </div>
                    <div className="footer footer-center-container">
                        <h2
                            className="footer-title"
                        >
                            Navighează
                        </h2>
                        <hr className="hr-links-footer"
                           
                        ></hr>
                        <ul className="links-list">
                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/"}
                                    className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Acasă
                                </Link>
                            </li>
                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/servicii"}
                                    className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Toate Serviciile
                                </Link>
                            </li>

                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/portofoliu"}
                                    className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Portofoliu Clienți
                                </Link>
                            </li>

                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/cerere-oferta"}
                                    className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Cerere Ofertă
                                </Link>
                            </li>

                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/cariere"}
                                   className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Cariere
                                </Link>
                            </li>

                            <li onClick={scrollToTop}>
                                <Link
                                    to={"/contact"}
                                    className="link"
                                >
                                    <IoIosArrowForward className="footer-icon"></IoIosArrowForward>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer footer-right-container">
                        <h2
                            className="footer-title"
                        >
                            Contact
                        </h2>
                        <hr className="footer-section-line"
                        ></hr>

                        <p>
                            <BsPersonCircle
                                className="footer-icon"
                                size={20}
                            ></BsPersonCircle>{" "}
                            Ștefana Tănase<br></br>
                            <a href="tel: 0730.709.723">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                (0730) 709 723
                            </a>
                            <br></br>
                            <a href="tel: 021/335.01.02">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                (0213) 350 102
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
                            <a href="tel: 0728138235">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                (0728) 138 235
                            </a>
                            <br></br>
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
                            Nicoleta Roșu<br></br>
                            <a href="tel: 0736602115">
                                <FiPhoneCall className="footer-icon"></FiPhoneCall>{" "}
                                (0736) 602 115
                            </a>
                            <br></br>
                            <a href="mailto:nicoleta.rosu@workmanagement.ro">
                                <FiMail className="footer-icon"></FiMail>{" "}
                                nicoleta.rosu@workmanagement.ro
                            </a>
                        </p>
                        <div className="social-media-section"
                        >
                            <a href="https://www.facebook.com/workmanagement.bucuresti">
                                <ImFacebook2
                                    className="footer-icon"
                                    size={30}
                                  
                                ></ImFacebook2>
                            </a>
                            <a href="https://ro.linkedin.com/company/work-management">
                                <BsLinkedin
                                    className="footer-icon"
                                    size={30}
                                    
                                ></BsLinkedin>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="hr-line-footer"
               ></hr>
                <div className="footer-down">
                    <Link
                        to={"/securiatea-datelor"}
                        className="link"
                    >
                        <div className="policy-button" onClick={scrollToTop}>
                            Politica de Securitate a Datelor cu caracter
                            personal
                        </div>
                    </Link>
                    <Link
                        to={"/protectia-datelor"}
                        className="link"
                    >
                        <div className="policy-button" onClick={scrollToTop}>
                            Politica privind Protecția Datelor cu caracter
                            personal
                        </div>
                    </Link>
                    <div className="policy-button">
                        Website created by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/bogdan-marcu-0799131a7/"
                        >
                            Bogdan Marcu
                        </a>{" "}
                        &amp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/c%C4%83t%C4%83lina-petru%C8%99-4826a2232/"
                        > Cătălina Petruș
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
