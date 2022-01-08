import React from "react";
import "./ServicesMainPage.css";

import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import {
    dropdownItemsLeft,
    dropdownItemsRight,
} from "../../Components/NavigationBarData";
import { Link } from "react-router-dom";

let menuItems = [].concat(dropdownItemsLeft).concat(dropdownItemsRight);

export default function ServicesMainPage() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
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
                                WORK MANAGEMENT prestează servicii și
                                consultanță, în urmatoarele domenii:
                            </p>
                        </div>
                        <div>
                            <Link
                                to={"/servicii"}
                                style={{ textDecoration: "none" }}
                            >
                                <button
                                    className="our-services-btn"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        marginBottom: "30px",
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
                                    onClick={scrollToTop}
                                >
                                    Toate serviciile
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="card-section">
                        <CardGrid></CardGrid>
                    </div>
                </div>
            </div>
        </>
    );
}

const CardGrid = () => {
    return dropdownItemsLeft.map((data, index) => {
        return <Card cardData={data}></Card>;
    });
};

const Card = ({ cardData }) => {
    return (
        <div className="card-wrapper">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

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

                <h3
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0px",
                    }}
                >
                    {cardData.name}
                </h3>
            </div>
            <div
                className="cvcv"
                // style={{
                //     width: "60px",
                //     backgroundColor: "#ee9b14",
                //     border: "none",
                //     height: "3px",
                //     margin: "20px auto",
                //     transition: ".2s",
                // }}
            ></div>
            <div className="key-words">
                <p
                    className="key-word-card"
                    style={{
                        backgroundColor: "#00416A",
                        color: "white",
                        marginRight: "6px",
                        marginBottom: "5px",
                    }}
                >
                    • {cardData.keyword1}
                </p>
                <p
                    className="key-word-card"
                    style={{
                        marginRight: "5px",
                        color: "white",
                        backgroundColor: "#00416A",
                        marginBottom: "5px",
                    }}
                >
                    • {cardData.keyword2}
                </p>
                <p
                    className="key-word-card"
                    style={{
                        color: "white",
                        backgroundColor: "#00416A",
                    }}
                >
                    • {cardData.keyword3}
                </p>
            </div>
            <Link
                to={`/servicii/${cardData.id}`}
                style={{ textDecoration: "none", marginTop: "auto" }}
            >
                <div className="read-more-button" style={{ fontWeight: "900" }}>
                    <p>
                        <MdOutlineArrowForwardIos
                            style={{
                                paddingRight: "5px",
                                verticalAlign: "middle",
                                marginBottom: "3px",
                            }}
                        />
                        Mai multe
                    </p>
                </div>
            </Link>
        </div>
    );
};
