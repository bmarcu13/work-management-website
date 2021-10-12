import React from "react";
import "./NavigationBar.css";

import { useState } from "react";
import Logo from "../../img/logo.png";
import { menuItems } from "../NavigationBarData";
import NavigationBarButton from "../MenuButtons/NavigationBarButton";
import SideBarButton from "../MenuButtons/SideBarButton";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

let menuWasToggled = false;

export default function NavigationBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Close the sidebar if the window width changes
    const mq = window.matchMedia("(min-width: 851px)");
    mq.addEventListener("change", (query) => {
        if (query.matches && isDrawerOpen) {
            setIsDrawerOpen(false);
            menuWasToggled = false;
        }
    });

    return (
        <div style={{ position: "fixed", top: "0", width: "100%" }}>
            <div
                className={
                    isDrawerOpen
                        ? "side-menu-wrapper active"
                        : "side-menu-wrapper"
                }
            >
                <div className="side-menu-container">
                    <div className="side-menu-items">
                        {menuItems.map((item, index) => {
                            return SideBarButton({
                                buttonData: item,
                                index: index,
                            });
                        })}
                    </div>
                </div>
            </div>

            <div className="navigation-menu-section">
                <img className="logo" src={Logo} alt="logo"></img>
                <div
                    className={
                        isDrawerOpen
                            ? "navigation-menu-container active"
                            : menuWasToggled
                            ? "navigation-menu-container inactive"
                            : "navigation-menu-container"
                    }
                >
                    <div className="navigation-menu-items">
                        {menuItems.map((item, index) => {
                            return NavigationBarButton({
                                buttonData: item,
                                index: index,
                            });
                        })}
                    </div>
                    <div
                        className="burger-menu-button-container"
                        onClick={() => {
                            setIsDrawerOpen(!isDrawerOpen);
                            menuWasToggled = true;
                        }}
                    >
                        {isDrawerOpen ? (
                            <IoClose size={28} color="white" />
                        ) : (
                            <TiThMenu size={24} color="white" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
