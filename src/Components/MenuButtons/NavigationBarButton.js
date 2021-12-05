import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./MenuButtons.css";
import { dropdownItemsLeft, dropdownItemsRight } from "../NavigationBarData";

export default function NavigationBarButton({ buttonData, index }) {
    let { path, url } = useRouteMatch();
    return (
        <Link to={buttonData.path} style={{ textDecoration: "none" }}>
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

function renderDropdown(buttonData) {
    if (buttonData.hasDropdown) {
        return (
            <div className="dropdown-wrapper" style={{ flex: "1" }}>
                <div className="dropdown-separator"></div>
                <div className="dropdown-container">
                    <div className="dropdown-container-left">
                        {dropdownItemsLeft.map((item, index) => {
                            return (
                                <Link
                    to={`${url}/${item.url}`}
                    style={{ textDecoration: "none", marginTop: "auto" }}
                >
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
                                <Link
                                    to="/placeholder"
                                    style={{ textDecoration: "none" }}
                                >
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
