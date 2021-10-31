import React from "react";

import "./ContactPage.css";

import {
    BsFillHouseFill,
    BsPinMapFill,
    BsFillFileEarmarkCodeFill,
} from "react-icons/bs";
import { AiOutlineFieldNumber } from "react-icons/ai";

import headerBanner from "../../img/contact-bckgr.jpg";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

export default function ContactPage() {
    return (
        <div className="screen-component">
            <div className="portfolio-header">
                <img  style={{height:'500px',width:'100%',marginTop:'-20px'}}src={headerBanner} />
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
                <div
                    className="mapouter"
                   
                >
                    <div
                        class="gmap_canvas"
                        style={{
                            background: "none!important",
                            height: "100%",
                            width: "90%",
                            marginTop: "30px",
                            marginLeft: "40px",
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
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
}
