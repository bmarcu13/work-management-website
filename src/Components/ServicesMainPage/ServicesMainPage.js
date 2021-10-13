import React from "react";
import "./ServicesMainPage.css";

import protectiaMunciiPsiImg from "../../img/services/protectia-muncii-psi.jpg";

import { MdOutlineHorizontalRule } from "react-icons/md";

export default function ServicesMainPage() {
    return (
        <div className="services">
            <h2 style={{}}>Serviciile noastre</h2>
            <div className="grid-container">
                {servicesList.map((item, index) => {
                    return gridItemComponent(item);
                })}
            </div>
        </div>
    );
}

const gridItemComponent = (item) => {
    return (
        <div className="grid-item-container">
            <div className="img-container">
                <img src={protectiaMunciiPsiImg}></img>
            </div>
            <h3>Service name placeholder</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                gravida, urna quis pulvinar lacinia, nulla leo molestie orci,
                eget pellentesque lacus dolor nec odio. Sed vulputate enim
                tellus, suscipit tempor dolor interdum vel. Fusce semper
                dignissim augue, sit amet ultrices ex sollicitudin nec. Donec
                convallis feugiat massa, a auctor massa sagittis ut.
            </p>
            <p
                className="read-more-button"
                style={{ fontWeight: "900", transition: ".2s" }}
            >
                Mai multe
                <MdOutlineHorizontalRule
                    style={{ paddingLeft: "5px", verticalAlign: "middle" }}
                />
            </p>
        </div>
    );
};

const servicesList = [
    {
        title: "Securitate si Sanatate in Munca",
        description: "",
        img: {},
    },
    {
        title: "Situatii de Urgenta (Prevenirea si Stingerea Incendiilor / Protectie Civila)",
        description: "",
        img: {},
    },
    {
        title: "RSVTI",
        description: "",
        img: {},
    },
    {
        title: "Gestiunea Deseurilor si Managementul Mediului",
        description: "",
        img: {},
    },
    {
        title: "Coordonarea Santierelor",
        description: "",
        img: {},
    },
    {
        title: "Analiza de Risc la Securitate Fizica",
        description: "",
        img: {},
    },
];
