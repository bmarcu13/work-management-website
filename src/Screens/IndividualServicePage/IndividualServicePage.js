import React from "react";

import "./IndividualServicePage.css";

export default function IndividualServicePage(props) {
    return (
        <div style={{ width: "100%", height: "100%", background: "red" }}>
            {props.match.params.serviciu}
        </div>
    );
}
