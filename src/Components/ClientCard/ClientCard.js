import React from "react";
import Clients from "../ClientsArray";

import { BsFilePersonFill } from "react-icons/bs";

export default function ClientCard(props) {
    return (
        <div>
            <img src={props.img}></img>
        </div>
    );
};
