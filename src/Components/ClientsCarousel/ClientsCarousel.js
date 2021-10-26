import React from "react";
import "./ClientsCarousel.css";
import Clients from "../ClientsArray";
export default function ClientsCarousel(props) {
   
    return (
        <div className="carousel-section">
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