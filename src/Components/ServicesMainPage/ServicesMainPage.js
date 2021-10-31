import React from "react";
import "./ServicesMainPage.css";

import { TiArrowSortedUp } from "react-icons/ti";

import {
    dropdownItemsLeft,
    dropdownItemsRight,
} from "../../Components/NavigationBarData";

let menuItems = [].concat(dropdownItemsLeft).concat(dropdownItemsRight);

export default function ServicesMainPage() {
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
                        <h2
                            style={{
                                color: "white",
                                margin: "auto",
                                marginBottom: "20px",
                                fontSize: "28px",
                                fontWeight: "bold",
                            }}
                        >
                            Serviciile noastre
                        </h2>
                        <p
                            style={{
                                color: "white",
                                margin: "10px 20px auto",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            WORK MANAGEMENT prestează servicii și consultanță,
                            în urmatoarele domenii:
                        </p>
                    </div>
                    <button
                        className="our-services-btn"
                        style={{
                            marginBottom: "auto",
                            width: "150px",
                            height: "40px",
                            backgroundColor: "orange",
                            borderRadius: "20px",
                            border: "none",
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
    return (
        <div className="card-wrapper" style={cardData.style}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "fit-content",
                }}
            >
                <div
                    style={{
                        width: "calc(30% - 10px)",
                        aspectRatio: "1",
                        position: "relative",
                        marginRight: "10px",
                    }}
                >
                    <img
                        src={cardData.card_icon}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "auto",
                            margin: "auto",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                        }}
                    ></img>
                </div>

                <h3 style={{ width: "70%" }}>{cardData.name}</h3>
            </div>
            <div className="key-words">
                <p
                    className="key-word-card"
                    style={{
                        backgroundColor: "#a49c94",
                        color: "white",
                        marginRight: "10px",
                    }}
                >
                    {cardData.keyword1}
                </p>
                <p
                    className="key-word-card"
                    style={{ marginRight: "10px", backgroundColor: "#c9a4a0" }}
                >
                    {cardData.keyword2}
                </p>
                <p
                    className="key-word-card"
                    style={{
                        marginTop: "2px",
                        marginBottom: "-20px",
                        backgroundColor: "#a891a0",
                    }}
                >
                    {cardData.keyword3}
                </p>
            </div>
        </div>
    );
};
