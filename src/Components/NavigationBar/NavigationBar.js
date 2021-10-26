import React from "react";
import "./NavigationBar.css";

import { useState } from "react";
import Logo from "../../img/logo-white-inside.png";
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
            {/* <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="white" d="M27.5,-35C41.9,-27.5,64,-27.7,69.6,-20.3C75.2,-12.9,64.3,2.2,54.2,12.7C44.1,23.2,34.8,29.1,25.9,29.7C17,30.2,8.5,25.3,-4,30.8C-16.4,36.3,-32.9,52.1,-40.8,51.2C-48.7,50.4,-48.1,32.9,-53.1,17.3C-58.1,1.7,-68.8,-12.1,-66.9,-22.9C-65,-33.7,-50.4,-41.6,-37.2,-49.5C-23.9,-57.4,-12,-65.4,-2.7,-61.7C6.6,-58,13.2,-42.6,27.5,-35Z" transform="translate(100 100)" />
</svg> */}
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
