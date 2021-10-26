import React from "react";
import "./Footer.css";
import Logo from "../../img/logo.png";
import {FaMapMarkerAlt, FaFacebookSquare} from "react-icons/fa";
import {FiMail, FiPhoneCall} from "react-icons/fi";
import {IoIosArrowForward} from "react-icons/io";

export default function Footer() {
    return (
        <>
        <div className="footer-with-copyrights">
        <div className="footer-section">
        <div class="custom-shape-divider-top-1634560944">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

            <div className="footer footer-left-container">
                <img src={Logo} alt="logo"></img><br></br>
                <p>Servicii de securitate și sănătate în muncă și de protecție a mediului.</p>
                <hr></hr>
                <p> S.C. WORK MANAGEMENT S.R.L.</p>
                <hr></hr>
                <a href="https://www.facebook.com/workmanagement.bucuresti"><FaFacebookSquare className="footer-icon" size={40} ></FaFacebookSquare></a>
            </div>
            <div className="footer footer-center-container">
                <h2 className="footer-title">Navighează</h2>
                <ul className="links-list">
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                    <li><IoIosArrowForward></IoIosArrowForward></li>
                </ul>
                
            </div >
            <div className="footer footer-right-container">
                <h2 className="footer-title">Contact</h2>
              
               <a href="https://www.google.com/maps/place/Strada+Regina+Maria+25,+Cluj-Napoca+400000,+Romania/@46.752133,23.627683,17z/data=!4m5!3m4!1s0x47490c53a998b3a7:0x766fc2571b600f51!8m2!3d46.7521325!4d23.6276832?hl=en-US"> 
                    <p><FaMapMarkerAlt size={30}></FaMapMarkerAlt>B-dul Regina Maria, Nr. 25, Etaj 1,
                    <br></br>Camerele 6-9, Sector 4, Bucureşti</p>
               </a>
                <p>
   Stefana Tanase<br></br>
      <a href="tel: 0730.709.723"><FiPhoneCall></FiPhoneCall> 0730.709.723</a><br></br>
      <a href="tel: 021/335.01.02"><FiPhoneCall></FiPhoneCall> 021/335.01.02</a><br></br>
      <FiMail></FiMail>  <a href="mailto:stefana.tanase@workmanagement.ro"> stefana.tanase@workmanagement.ro</a><br></br>
   George Chisiu<br></br>
      <FiMail></FiMail> <a href="mailto:george.chisiu@workmanagement.ro">   george.chisiu@workmanagement.ro</a><br></br>
   Sandu Martinescu<br></br>
   <FiMail></FiMail><a href="mailto:sandu.martinescu@workmanagement.ro"> sandu.martinescu@workmanagement.ro</a>
                </p>
            
            </div>
        </div>
        <hr style={{height: '1px',
                    width:'90%',
                    border : 'none',
                    background: 'black'}}></hr>
        <div className="footer-down">
            <div className="policy-button">Politica de Securitate a Datelor cu caracter personal</div>
            <div className="policy-button">Politica privind Prelucrarea Datelor cu caracter personal</div>
            <div>Website created by  Copyright © ?</div>
        </div>
    </div>
        </>
        );
}