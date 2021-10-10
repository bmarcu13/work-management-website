import React from "react";
import ClientCard from "../../Components/ClientCard/ClientCard";

import Clients from "../../Components/ClientsArray";

export default function PortfolioPage() {
    return (
        <div className="screen-component">
            {Clients.map((client, index) => {
                return <ClientCard img={client.src}></ClientCard>;
            })}
        </div>
    );
}
