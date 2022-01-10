import React from "react";
import ClientCard from "../../Components/ClientCard/ClientCard";

import "./PortfolioPage.css";
import Clients from "../../Components/ClientsArray";
import Scroll from "../../Components/Scroll";

import headerBanner from "../../img/our-clients-banner.png";
import Footer from "../../Components/Footer/Footer";

export default function PortfolioPage() {
    return (
        <div className="screen-component">
            <div className="portfolio-header">
                <div
                    style={{
                        backgroundColor: "black",
                        top: "0",
                        position: "absolute",
                        opacity: ".4",
                        height: "350px",
                        width: "100%",
                    }}
                ></div>
                <h2> Portofoliu Clienți</h2>

                <div class="custom-shape-divider-bottom-1634577933">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* <Scroll> */}
            <div className="portofolio-list-outside">
                <div className="clients_grid">
                    {Clients.map((client, index) => {
                        return (
                            <ClientCard
                                className="client_div"
                                img={client.src}
                            ></ClientCard>
                        );
                    })}
                </div>
            </div>
            {/* </Scroll> */}
            <Footer></Footer>
        </div>
    );
}
