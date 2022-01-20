import React from "react";
import { useState } from "react";

import { dropdownItemsLeft, dropdownItemsRight } from "../NavigationBarData";

import { Link } from "react-router-dom";

import "./MenuButtons.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SideBarButtons({ buttonData, index, callback }) {
    const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
   };

    function renderDropdown(hasDropdown) {
        if (hasDropdown) {
            return (
                <div
                    className={
                        isDropdownExpanded
                            ? "dropdown-container active"
                            : "dropdown-container"
                    }
                >
                    {dropdownItemsLeft.map((item, index) => {
                        return (
                            <div className="dropdown-item" key={index}>
                                <p
                                    style={
                                        index == 0 ? { marginTop: "0px" } : {}
                                    }
                                >
                                    {item.icon}
                                    {item.name}
                                </p>
                            </div>
                        );
                    })}
                    {dropdownItemsRight.map((item, index) => {
                        return (
                            <div className="dropdown-item" key={index}>
                                <p
                                    style={
                                        index == 0 ? { marginTop: "0px" } : {}
                                    }
                                >
                                    {item.icon}
                                    {item.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    return (
        <Link
            to={buttonData.path}
            style={{ textDecoration: "none" }}
            onClick={()=> {callback();
            scrollToTop();
        }
        }
            key={index}
        >
            <div
                className={
                    isDropdownExpanded && buttonData.hasDropdown
                        ? "sidebar-button active"
                        : "sidebar-button"
                }
            >
                <div
                    className="button-data"
                    // onClick={() => {
                    //     setIsDropdownExpanded(!isDropdownExpanded);
                    // }}
                >
                    {/* {renderButtonLayout(buttonData)} */}
                    <h3
                        style={
                            // buttonData.hasDropdown
                            //     ? { paddingLeft: "0px", marginLeft: "-5px" }
                            //     : {}
                            {}
                        }
                    >
                        {buttonData.name}
                    </h3>
                </div>
                {/* {renderDropdown(buttonData.hasDropdown)} */}
            </div>
        </Link>
    );
}

function renderButtonLayout(buttonData) {
    if (buttonData.hasDropdown) {
        return (
            <h3
                style={{
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "-10px",
                }}
            >
                <RiArrowDropDownLine size={30} />
            </h3>
        );
    }
}

// function renderDropdown(hasDropdown) {
//     if (hasDropdown) {
//         return (
//             <div className="dropdown-container">
//                 {dropdownItemsLeft.map((item, index) => {
//                     return (
//                         <p style={index == 0 ? { marginTop: "0px" } : {}}>
//                             {item.name}
//                         </p>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
