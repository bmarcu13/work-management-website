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

import cascuta from "../img/service-icons/casca-f.png";
import atentie from "../img/service-icons/atentie-f.png";
import hidrant from "../img/service-icons/hidrant-f.png";
import macara from "../img/service-icons/macara-f.png";
import reciclare from "../img/service-icons/reciclare-f.png";
import vestuta from "../img/service-icons/vestuta-f.png";

export const menuItems = [
    {
        name: "Acasă",
        hasDropdown: false,
        path: "/",
    },
    {
        name: "Servicii",
        hasDropdown: true,
        path: "/servicii",
    },
    {
        name: "Portofoliu Clienți",
        hasDropdown: false,
        path: "/portofoliu",
    },
    {
        name: "Cerere ofertă",
        hasDropdown: false,
        path: "/cerere-oferta",
    },
    {
        name: "Cariere",
        hasDropdown: false,
        path: "/cariere",
    },
    {
        name: "Contact",
        hasDropdown: false,
        path: "/contact",
    },
];

export const dropdownItemsLeft = [
    {
        id: "securitate-si-sanatate-in-munca",
        name: "Securitate și sănătate în muncă",
        icon: <MdOutlineHealthAndSafety className="icon" />,
        card_icon: cascuta,
        keyword1: "Consultanță",
        keyword2: "Documentație",
        keyword3: "Echipament de Protecție",
        style: {
            backgroundColor: "#cce0db",
        },
    },
    {
        id: "situatii-de-urgenta",
        name: "(SU) Situații de urgență",
        icon: <AiOutlineAlert className="icon" />,
        card_icon: hidrant,
        keyword1: "Instructaj",
        keyword2: "Verificare",
        keyword3: "Modificări legislative",
        style: {
            backgroundColor: "#c0adc5",
        },
    },
    {
        id: "rsvti",
        name: "ISCIR-RSVTI",
        icon: <GiElectricalResistance className="icon" />,
        card_icon: vestuta,
        keyword1: "Verificare Tehnică",
        keyword2: "Instalații ",
        keyword3: "Autorizație",
        style: {
            backgroundColor: "#ADD8E6",
        },
    },
    {
        id: "gestiunea-deseurilor",
        name: "Managementul mediului și gestiunea deșeurilor",
        icon: <MdRecycling className="icon" />,
        card_icon: reciclare,
        keyword1: "Specialist",
        keyword2: "Studii de Mediu",
        keyword3: "Autorizație de Mediu",
        style: {
            backgroundColor: "#CCCCFF",
        },
    },
    {
        id: "audit-si-evaluarea-riscurilor",
        name: "Audit și Evaluarea riscurilor de accidentare și îmbolnăvire profesională",
        icon: <FaUserInjured className="icon" />,
        card_icon: atentie,
        keyword1: "Factori de Risc",
        keyword2: "Măsuri",
        keyword3: "Evitarea Accidentelor",
        style: {
            backgroundColor: "#AFDBF5",
        },
    },
    {
        id: "coordonarea-santierelor",
        name: "Coordonarea șantierelor",
        icon: <FaTools className="icon" />,
        card_icon: macara,
        keyword1: "Prevenire",
        keyword2: "Coordonator",
        keyword3: "Plan de securitate",
        style: {
            backgroundColor: "#B0C4DE",
        },
    },
];

export const dropdownItemsRight = [
    {
        id: "formare-profesionala",
        name: "Formare profesională",
        icon: <MdWorkOutline className="icon" />,
    },
    {
        id: "indicatoare",
        name: "Indicatoare de securitate SSM și SU",
        icon: <FaSignInAlt className="icon" />,
    },
    {
        id: "audit-si-evaluarea-riscurilor",
        id: "e-learning",
        name: "Platformă E-Learning",
        icon: <VscMortarBoard className="icon" />,
    },
    {
        id: "masurarea-zgomotului-si-vibratiilor",
        name: "Măsurarea Zgomotului si Vibrațiilor la Locul de Muncă",
        icon: <GiSoundWaves className="icon" />,
    },
    {
        id: "resurse-umane",
        name: "Resurse Umane (HR)",
        icon: <VscHorizontalRule className="icon" />,
    },
    {
        id: "analiza-de-risc-la-securitate-fizica",
        name: "Analiză de Risc la Securitate fizică",
        icon: <IoAnalyticsSharp className="icon" />,
    },
];
