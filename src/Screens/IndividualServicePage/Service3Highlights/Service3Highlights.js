import React from "react";
import "./Service3Highlights.css";

export default function Service3Highlights(props) {
    const info = props.data;
    console.log(info);

    return (
        <div className="highlights-component">
            <div className="highlight">
                <div className="highlight-icon">{info[0].icon}</div>
                <div className="highlight-text">
                    <h3 className="highlight-title">{info[0].name}</h3>
                    <p> {info[0].text}</p>
                </div>
            </div>
            <div className="highlight">
                <div className="highlight-icon">{info[1].icon}</div>
                <div className="highlight-text">
                    <h3 className="highlight-title">{info[1].name}</h3>
                    <p>{info[1].text}</p>
                </div>
            </div>
            <div className="highlight">
                <div className="highlight-icon">{info[2].icon}</div>
                <div className="highlight-text">
                    <h3 className="highlight-title">{info[2].name}</h3>
                    <p>{info[2].text}</p>
                </div>
            </div>
        </div>
    );
}
