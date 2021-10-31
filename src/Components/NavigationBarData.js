import { GiElectricalResistance } from "react-icons/gi";
import { FaUserInjured, FaSignInAlt, FaTools } from "react-icons/fa";
import { VscMortarBoard, VscHorizontalRule } from "react-icons/vsc";
import { IoAnalyticsSharp } from "react-icons/io5";
import FireEstinguisher from '../img/services/icon-securitate.png';
import Securitate from '../img/services/icon_securitate.png';
import SSM from '../img/services/icon-ssm.png';
import Audit from '../img/services/icon_audit.png';
import Deseuri from '../img/services/icon_deseuri.png';
import Santiere from '../img/services/icon_santiere.png';

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
        card_icon: FireEstinguisher,
        keyword1:"Consultanță",
        keyword2:"Documentație",
        keyword3:"Echipament de Protecție",
        style: {
            backgroundColor: '#cce0db',
    
        }
    },
    {
        name: "(SU) Situații de urgență",
        icon: <AiOutlineAlert className="icon" />,
        card_icon: SSM,
        keyword1:"Instructaj",
        keyword2:"Verificare periodică",
        keyword3:"Modificări legislative",
        style: {
            backgroundColor: '#c0adc5',
    
        }
    },
    {
        name: "ISCIR-RSVTI",
        icon: <GiElectricalResistance className="icon" />,
        card_icon: Securitate,
        keyword1:"Verificare Tehnică",
        keyword2:"Instalații ",
        keyword3:"Autorizație",
        style: {
            backgroundColor: '#ADD8E6',
    
        }

    },
    {
        name: "Managementul mediului și gestiunea deșeurilor",
        icon: <MdRecycling className="icon" />,
        card_icon: Deseuri,
        keyword1:"Specialist",
        keyword2:"Studii de Mediu",
        keyword3:"Autorizație de Mediu",
        style: {
            backgroundColor: '#CCCCFF',
    
        }
    },
    {
        name: "Audit și Evaluarea riscurilor de accidentare și îmbolnăvire profesională",
        icon: <FaUserInjured className="icon" />,
        card_icon: Audit,
        keyword1:"Factori de Risc",
        keyword2:"Măsuri",
        keyword3:"Evitarea Accidentelor",
        style: {
            backgroundColor: '#AFDBF5',
    
        }
    },
    {
        name: "Coordonarea șantierelor",
        icon: <FaTools className="icon" />,
        card_icon: Santiere,
        keyword1:"Prevenire",
        keyword2:"Coordonator",
        keyword3:"Plan de securitate",
        style: {
            backgroundColor: '#B0C4DE',
    
        }
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
