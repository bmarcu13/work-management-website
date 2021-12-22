import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ServiceLanding from "./ServiceLanding/ServiceLanding";

import "./IndividualServicePage.css";
import Service3Highlights from "./Service3Highlights/Service3Highlights";

import { servicesInfo } from "./Information/InfoService";
import { Stack } from "../../Modules/Stack";

export default function IndividualServicePage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let { serviciu } = useParams();
    let serviceData;
    for (let i = 0; i <= 11; i++) {
        if (serviciu == servicesInfo[i].id) serviceData = servicesInfo[i];
    }
    const information = serviceData.information;

    let stack = new Stack();

    function pf(string) {
        let i = 0;
        while (i < string.length) {
            if (string.charAt(i) === "#" && string.charAt(i + 1) != "/") {
                i++;
                let ft = ""; //Parse formatting Type
                while (string.charAt(i) != " " || string.charAt(i) != "(") {
                    ft += string.charAt(i);
                    i++;
                }
                let params = ""; //Parse parameters, if applicable
                if (string.charAt(i) === "(") {
                    while (string.charAt(i) != ")") {
                        params += string.charAt(i);
                        i++;
                    }
                }

                switch (ft) {
                    case "bold":
                        stack.push({ start: i, type: ft });
                        break;
                    case "color":
                        stack.push({ start: i, type: ft, params: params });
                        break;
                    case "size":
                        stack.push({ start: i, type: ft, params: params });
                        break;
                }
            } else if (
                string.charAt(i) === "#" &&
                string.charAt(i + 1) === "/"
            ) {
                i += 2;
            }
            i++;
        }
    }

    console.log(serviciu);
    return (
        <div>
            <ServiceLanding
                infoHighlights={serviceData.highlights}
                titleService={serviceData.name}
            ></ServiceLanding>
            <div className="text-information">{information}</div>
        </div>
    );
}
