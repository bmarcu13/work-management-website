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
        <div className="team-member">
            <div className="our-team">
                <div className="pic">
                    <img src={photo} alt={alt}></img>
                </div>
                <div class="team-content">
                    <h3 className="name">{name}</h3>
                    <h4 className="post">{position}</h4>
                    <span className="post"></span>
                </div>
                <ul className="social">
                    <li>
                        <a href={`tel:${tel}`}>
                            <FiPhoneCall></FiPhoneCall>
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${email}`}>
                            <FiMail></FiMail>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
