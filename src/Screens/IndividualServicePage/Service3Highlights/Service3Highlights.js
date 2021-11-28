import React from "react";
import {GrArchlinux} from "react-icons/gr";
import "./Service3Highlights.css";

export default function Service3Highlights(props) {
    return (
        <div className="highlights-component">
            <div className="highlight">
                <div className="highlight-icon"><GrArchlinux size={40} ></GrArchlinux></div>
                <div className="highlight-text">
                    <h3 className="highlight-title">CRIS</h3>
                    <p> tralalal</p>
                </div>
            </div>
            <div className="highlight">
                <div className="highlight-icon"><GrArchlinux size={40} ></GrArchlinux></div>
                <div className="highlight-text">
                    <h3 className="highlight-title">CATA</h3>
                    <p>tralalla</p>
                </div>
            </div>
            <div className="highlight"> 
                <div className="highlight-icon"><GrArchlinux size={40} ></GrArchlinux></div>
                <div className="highlight-text">
                    <h3 className="highlight-title">BOGDAN</h3>
                    <p>tralalallallalalalalallallalallalalllalalalallallalallalall</p>
                </div>
            </div>
        </div>
    );
}
