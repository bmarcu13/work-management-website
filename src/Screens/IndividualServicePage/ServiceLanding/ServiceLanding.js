import React from "react";
import oras from "../../../img/oras.jpg";
import cerct from "../../../img/cerc_top.svg";
import cercb from "../../../img/cerc_bottom.svg";
import cercc from "../../../img/cerc_complet.svg";

import "./ServiceLanding.css";

export default function ServiceLanding(props) {
    return (
        <div className="service-page-landing-container">
            <div>
                <div className="svg-bg">
                    <img className="cercc" src={cercc}></img>
                </div>
            </div>
        </div>
    );
}
