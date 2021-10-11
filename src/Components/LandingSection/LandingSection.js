import React from "react";
import "./LandingSection.css";

import arrow from "../../img/arrow.png";

export default function LandingSection() {
    return (
        <div className="landing-section-container">
            <div className="left-panel"></div>
            <div className="right-panel">
                <svg
                    className="svg-path"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 460 410"
                >
                    <path
                        id="Unnamed"
                        fill="none"
                        stroke="black"
                        stroke-width="1"
                        d="M 454.00,204.00
                        C 454.00,204.00 254.00,4.00 254.00,4.00
                          254.00,4.00 4.00,4.00 4.00,4.00
                          4.00,4.00 204.00,204.00 204.00,204.00
                          204.00,204.00 4.00,404.00 4.00,404.00
                          4.00,404.00 254.00,404.00 254.00,404.00
                          254.00,404.00 454.00,204.00 454.00,204.00 Z"
                    />
                </svg>
                <svg
                    className="svg-path"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 460 410"
                    style={{ marginLeft: "-50px" }}
                >
                    <path
                        id="Unnamed"
                        fill="none"
                        stroke="black"
                        stroke-width="1"
                        d="M 454.00,204.00
                        C 454.00,204.00 254.00,4.00 254.00,4.00
                          254.00,4.00 4.00,4.00 4.00,4.00
                          4.00,4.00 204.00,204.00 204.00,204.00
                          204.00,204.00 4.00,404.00 4.00,404.00
                          4.00,404.00 254.00,404.00 254.00,404.00
                          254.00,404.00 454.00,204.00 454.00,204.00 Z"
                    />
                </svg>
            </div>
        </div>
    );
}
