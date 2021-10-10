import React from "react";
import ClientCard from "../../Components/ClientCard/ClientCard";

import "./PortfolioPage.css";
import Clients from "../../Components/ClientsArray";
import Scroll from "../../Components/Scroll";

export default function PortfolioPage() {
    return (
        <div className="screen-component">
            <h2 className="portofolio-title"> Portofoliu</h2>
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
        </div>
    );
}
