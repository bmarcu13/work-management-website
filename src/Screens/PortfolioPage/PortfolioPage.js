import React, { useState, useEffect } from "react";
import ClientCard from "../../Components/ClientCard/ClientCard";

import "./PortfolioPage.css";
import Clients from "../../Components/ClientsArray";
import Scroll from "../../Components/Scroll";

import headerWaves from "../../../src/img/layered-waves-services.svg";

import headerBanner from "../../img/our-clients-banner.png";
import Footer from "../../Components/Footer/Footer";

export default function PortfolioPage() {
    const [headerClasses, setHeaderClasses] = useState("header");
    const [cardClasses, setCardClasses] = useState("client-card");

    let prevY = 0;
    let headerState = null;
    let cardsState = null;

    const HEADER_STATE_HIDDEN = "HEADER_STATE_HIDDEN";
    const HEADER_STATE_SHOWN = "HEADER_STATE_SHOWN";
    const CARDS_STATE_FLOATING = "CARDS_STATE_FLOATING";
    const CARDS_STATE_FLAT = "CARDS_STATE_FLAT";

    function handleScrollAnimation() {
        console.log(prevY);
        if (prevY < window.scrollY) {
            //Scrolling down

            if (window.scrollY >= 100 && headerState == HEADER_STATE_SHOWN) {
                animateHeader("down");
                headerState = HEADER_STATE_HIDDEN;
            }
            if (window.scrollY >= 20 && cardsState == CARDS_STATE_FLAT) {
                animateCards("down");
                cardsState = CARDS_STATE_FLOATING;
            }
            prevY = window.scrollY;
        } else if (prevY > window.scrollY) {
            //Scrolling up

            if (window.scrollY < 100 && headerState == HEADER_STATE_HIDDEN) {
                animateHeader("up");
                headerState = HEADER_STATE_SHOWN;
            }
            if (window.scrollY < 20 && cardsState == CARDS_STATE_FLOATING) {
                animateCards("up");
                cardsState = CARDS_STATE_FLAT;
            }
            prevY = window.scrollY;
        }
    }

    function animateCards(type) {
        if (type == "down") {
            setCardClasses("client-card addCardPerspective");
        } else {
            setCardClasses("client-card removeCardPerspective");
        }
    }

    function animateHeader(type) {
        if (type == "down") {
            setHeaderClasses("header scrollDownAnim");
        } else {
            setHeaderClasses("header scrollUpAnim");
        }
    }

    function calibrateAnimTriggers() {
        if (window.scrollY >= 150) {
            headerState = HEADER_STATE_HIDDEN;
            cardsState = CARDS_STATE_FLOATING;
        } else {
            headerState = HEADER_STATE_SHOWN;
            cardsState = CARDS_STATE_FLAT;
        }
    }

    useEffect(() => {
        calibrateAnimTriggers();
        window.onscroll = handleScrollAnimation;
    });

    return (
        <div className="portofolio-page">
            <div className={headerClasses}>
                <img src={headerWaves}></img>
                <h1>Clienții noștri</h1>
            </div>

            <div className="grid-container">
                {Clients.map((client, index) => {
                    return (
                        <ClientCard
                            className="client_div"
                            img={client.src}
                            key={index}
                            class={cardClasses}
                        ></ClientCard>
                    );
                })}
            </div>

            <Footer></Footer>
        </div>
    );
}
