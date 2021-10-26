import React from "react";
import "./ClientsCarousel.css";
import Clients from "../ClientsArray";

export default function ClientsCarousel(props) {
    return (
        <div className="carousel-section">
            <TitleBg />
            <div className="slider">
                <div className="slide-track">
                    {Clients.map((client, index) => {
                        return (
                            <div className="slide">
                                <img
                                    className="client-photo"
                                    src={client.src}
                                    alt={client.name}
                                ></img>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const TitleBg = () => {
    return (
        <div style={{}}>
            <h1 style={{ marginBottom: "10px", color: "#2b2b2b" }}>
                Clienții noștri
            </h1>
            <hr
                style={{
                    border: "2px solid #003d99",
                    borderRadius: "3px",
                    marginLeft: "25px",
                    marginRight: "25px",
                    marginBottom: "20px",
                }}
            ></hr>
        </div>
    );
};
