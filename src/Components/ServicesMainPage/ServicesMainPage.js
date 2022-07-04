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
                        <div>
                            <h2>Serviciile noastre</h2>
                            <p>
                                WORK MANAGEMENT prestează servicii și
                                consultanță, în urmatoarele domenii:
                            </p>
                        </div>
                        <div>
                            <Link to={"/servicii"} className="link">
                                <button
                                    className="our-services-btn"
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
        return index < 6 && <Card cardData={data} key={index}></Card>;
    });
};

const Card = ({ cardData }) => {
    return (
        <div className="card-wrapper">
            <div className="card-wraper-content">
                <div>
                    <img
                        src={cardData.card_icon}
                        alt="icon-serviciu-pagina-principala"
                        className="icon-serviciu-pagina-principala"
                    ></img>
                </div>

                <h3>{cardData.name}</h3>
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
                <p className="key-word-card">• {cardData.keyword1}</p>
                <p className="key-word-card">• {cardData.keyword2}</p>
                <p className="key-word-card">• {cardData.keyword3}</p>
            </div>
            <Link to={`/servicii/${cardData.id}`} className="link-servicii">
                <div className="read-more-button">
                    <p>
                        <MdOutlineArrowForwardIos className="icon-mai-multe" />
                        Mai multe
                    </p>
                </div>
            </Link>
        </div>
    );
};
