import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./MenuButtons.css";
import { dropdownItemsLeft, dropdownItemsRight } from "../NavigationBarData";

export default function NavigationBarButton({ buttonData, index }) {
    let location = useLocation();
    let goTo = "";
    if (location.pathname.indexOf("/servicii/") == -1) {
        goTo = "servicii/";
    }

    function renderDropdown(buttonData) {
        if (buttonData.hasDropdown) {
            return (
                <div className="dropdown-wrapper">
                    <div className="dropdown-separator"></div>
                    <div className="dropdown-container">
                        <div className="dropdown-container-left">
                            {dropdownItemsLeft.map((item, index) => {
                                return (
                                    <Link to={`${goTo}${item.id}`}>
                                        <p>
                                            {item.icon} {item.name}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="dropdown-container-right">
                            {dropdownItemsRight.map((item, index) => {
                                return (
                                    <Link to={`${goTo}${item.id}`}>
                                        <p>
                                            {item.icon} {item.name}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        } else {
            return;
        }
    }

    return (
        <Link className="nav-bar-button-link" to={buttonData.path}>
            <div
                className="navigation-bar-button"
                style={
                    index == 0
                        ? {
                              borderTopLeftRadius: "30px",
                              borderBottomLeftRadius: "30px",
                          }
                        : {}
                }
            >
                <h3>{buttonData.name}</h3>
                {renderDropdown(buttonData)}
            </div>
        </Link>
    );
}
