import React from "react";
import "./TeamMemberCard.css";

import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function TeamMemberCard({
    name,
    alt,
    photo,
    position,
    tel,
    email,
}) {
    return (
        <div className="team-member-card-v2">
            <div className="photo">
                <img src={photo} alt={alt}></img>
            </div>
            <div className="info">
                <p style={{ fontWeight: "600", fontSize: "18px" }}>{name}</p>
                <p>{position}</p>
                <hr></hr>
                <div className="contact">
                    <a href={`tel:${tel}`}>
                        <FiPhoneCall
                            className="contact-icon"
                            size={24}
                        ></FiPhoneCall>
                    </a>
                    <a href={`mailto:${email}`}>
                        <FiMail size={24} className="contact-icon"></FiMail>
                    </a>
                </div>
            </div>
        </div>
    );
}
