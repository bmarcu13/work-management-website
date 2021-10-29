import React from "react";

import "./ServicesPage.css";

import {
    dropdownItemsLeft,
    dropdownItemsRight,
} from "../../Components/NavigationBarData";

import { TiArrowSortedUp } from "react-icons/ti";

let menuItems = [].concat(dropdownItemsLeft).concat(dropdownItemsRight);

export default function ServicesPage() {
    return (
        <div className="services-page-container">
            <div className="cards-container">
                <div className="title-section">
                    <TiArrowSortedUp
                        color={"white"}
                        size={60}
                        style={{
                            position: "absolute",
                            right: -26,
                            transform: "rotate(-90deg)",
                            top: "calc(50% - 30px)",
                        }}
                    ></TiArrowSortedUp>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "auto",
                        }}
                    >
                        <h2 style={{ color: "white", margin: "auto" }}>
                            Serviciile noastre
                        </h2>
                        <p
                            style={{
                                color: "white",
                                margin: "10px 20px auto",
                                textAlign: "center",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Eget mauris pharetra et
                            ultrices neque ornare aenean euismod elementum. Amet
                            dictum sit amet justo. Pretium quam vulputate
                            dignissim suspendisse in est.
                        </p>
                    </div>
                    <button
                        style={{
                            marginBottom: "auto",
                            width: "150px",
                            height: "40px",
                            backgroundColor: "orange",
                            border: "none",
                            borderRadius: "20px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "white",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Toate serviciile
                    </button>
                </div>

                <div className="card-section">
                    <CardGrid></CardGrid>
                </div>
            </div>
        </div>
    );
}

const CardGrid = () => {
    return dropdownItemsLeft.map((data, index) => {
        return <Card cardData={data}></Card>;
    });
};

const Card = ({ cardData }) => {
    return <div className="card-wrapper">DANA!</div>;
};
