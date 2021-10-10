import { GiElectricalResistance } from "react-icons/gi";
import { FaUserInjured, FaSignInAlt, FaTools } from "react-icons/fa";
import { VscMortarBoard, VscHorizontalRule } from "react-icons/vsc";
import { IoAnalyticsSharp } from "react-icons/io5";

import { AiOutlineAlert } from "react-icons/ai";
import {
    MdOutlineHealthAndSafety,
    MdRecycling,
    MdWorkOutline,
} from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";

export const menuItems = [
    {
        name: "Acasă",
        hasDropdown: false,
        path: "/",
    },
    {
        name: "Servicii",
        hasDropdown: true,
        path: "servicii",
    },
    {
        name: "Portofoliu Clienti",
        hasDropdown: false,
        path: "portofoliu",
    },
    {
        name: "Cerere oferta",
        hasDropdown: false,
        path: "cerere-oferta",
    },
    {
        name: "Cariere",
        hasDropdown: false,
        path: "cariere",
    },
    {
        name: "Contact",
        hasDropdown: false,
        path: "contact",
    },
];

export const dropdownItemsLeft = [
    {
        name: "Securitate și sănătate în muncă",
        icon: <MdOutlineHealthAndSafety className="icon" />,
    },
    {
        name: "(SU) Situații de urgență",
        icon: <AiOutlineAlert className="icon" />,
    },
    {
        name: "RSVTI",
        icon: <GiElectricalResistance className="icon" />,
    },
    {
        name: "Managementul mediului și gestiunea deșeurilor",
        icon: <MdRecycling className="icon" />,
    },
    {
        name: "Audit și Evaluarea riscurilor de accidentare și îmbolnăvire profesională",
        icon: <FaUserInjured className="icon" />,
    },
    {
        name: "Coordonarea șantierelor",
        icon: <FaTools className="icon" />,
    },
];

export const dropdownItemsRight = [
    {
        name: "Formare profesională",
        icon: <MdWorkOutline className="icon" />,
    },
    {
        name: "Indicatoare de securitate SSM și SU",
        icon: <FaSignInAlt className="icon" />,
    },
    {
        name: "Platformă E-Learning",
        icon: <VscMortarBoard className="icon" />,
    },
    {
        name: "Măsurarea Zgomotului si Vibrațiilor la Locul de Muncă",
        icon: <GiSoundWaves className="icon" />,
    },
    {
        name: "Resurse Umane (HR)",
        icon: <VscHorizontalRule className="icon" />,
    },
    {
        name: "Analiză de Risc la Securitate fizică",
        icon: <IoAnalyticsSharp className="icon" />,
    },
];
