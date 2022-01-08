import React from "react";
import "./NavigationBar.css";

import { useState, useEffect } from "react";
import Logo from "../../img/logo-white-inside.png";
import { menuItems } from "../NavigationBarData";
import NavigationBarButton from "../MenuButtons/NavigationBarButton";
import SideBarButton from "../MenuButtons/SideBarButton";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

let menuWasToggled = false;

export default function NavigationBar() {
    const [showLogo, setShowButton] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.pageYOffset < 300) {
            setShowButton(true);
        } else if (window.pageYOffset > 300) {
            setShowButton(false);
        }
    });

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.pageYOffset < 300) {
    //             setShowButton(true);
    //         } else {
    //             setShowButton(false);
    //         }
    //         console.log(window.pageYOffset);
    //     });
    // }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

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
                {/* {showLogo && ( */}
                <img
                    className="logo"
                    src={Logo}
                    alt="logo"
                    onClick={scrollToTop}
                    style={{ visibility: showLogo ? "visible" : "hidden" }}
                ></img>
                {/* )} */}
                {/* )} */}

                <div
                    className={
                        isDrawerOpen
                            ? "navigation-menu-container active"
                            : menuWasToggled
                            ? "navigation-menu-container inactive"
                            : "navigation-menu-container"
                    }
                >
                    <div className="navigation-menu-items" onClick={scrollToTop}>
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
