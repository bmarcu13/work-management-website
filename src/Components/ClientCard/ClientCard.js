import React from "react";
import Clients from "../ClientsArray";
import "./ClientCard.css";


export default function ClientCard(props) {
    return (
        <div className="client_card">
            <img className= "client_image" src={props.img} alt={props.alt}></img>
        </div>
    );
}
