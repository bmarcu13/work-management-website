import React from "react";

import "./ServicesPage.css";

import {
    dropdownItemsLeft,
    dropdownItemsRight,
} from "../../Components/NavigationBarData";

import { TiArrowSortedUp } from "react-icons/ti";

let menuItems = [].concat(dropdownItemsLeft).concat(dropdownItemsRight);

const showDropdown = (index) => {
    const id = "gridItem" + index;

    const clickeditem = document.getElementById(id);
    const boundingRect = clickeditem.getBoundingClientRect();

    const arrow = clickeditem.children[1];
    const dropdown = clickeditem.children[2];

    if (dropdown.style.height == "0px") {
        console.log("O IUBESC PE DANA");

        arrow.style.height = "50px";
        dropdown.style.height = "200px";
        dropdown.style.opacity = "1";
        arrow.style.opacity = "1";
    } else {
        dropdown.style.height = "0px";
        arrow.style.opacity = "0";
        dropdown.style.opacity = "0";
        arrow.style.left = Math.abs(boundingRect.width / 2 - 25) + "px";
        dropdown.style.height = "0px";
    }

    console.log(dropdown);
};

export default function ServicesPage() {
    return (
        <div className="services-page-container">
            <div className="grid-wrapper">
                <GridItems></GridItems>
            </div>
        </div>
    );
}

const GridItems = () => {
    return menuItems.map((item, index) => {
        return <ListItem itemData={item} index={index}></ListItem>;
    });
};

const ListItem = ({ itemData, index }) => {
    const id = "gridItem" + index;

    return (
        <div id={id} className="grid-element-wrapper">
            <div
                style={{ width: "100%" }}
                onClick={() => showDropdown(index)}
                className="card-container"
            >
                SA MOARA DANA IN PUSCARIE DE NU MERGI SA MOARA DANA IN PUSCARIE
                DE NU MERGI SA MOARA DANA IN PUSCARIE DE NU MERGI SA MOARA DANA
                IN PUSCARIE DE NU MERGI SA MOARA DANA IN PUSCARIE DE NU MERGI
            </div>
            <TiArrowSortedUp className="dropdown-arrow" size={50} />
            <div className="dropdown"></div>
        </div>
    );
};
