import { GoAlert } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import {RiOrganizationChart} from "react-icons/ri";
import {
    MdAttachMoney,
    MdOutlineMedicalServices,
    MdReport,
    MdFollowTheSigns,
    MdMoreTime,
    MdManageAccounts
} from "react-icons/md";
import { IoPeople, IoApps, IoSchool } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";
import {BsPatchCheckFill, BsSignpostSplitFill, BsFillFileEarmarkTextFill} from "react-icons/bs";
import { GiCustodianHelmet,GiToolbox } from "react-icons/gi";
import {
    AiFillGift,
    AiOutlineFileProtect,
    AiFillSafetyCertificate,
    AiOutlineComment,
    AiOutlineDeliveredProcedure
} from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { FaFireExtinguisher, FaChalkboardTeacher, FaRadiation, FaHandsHelping } from "react-icons/fa";
import { GrUserWorker, GrPlan,  } from "react-icons/gr";

export const servicesInfo = [
    {
        id: "securitate-si-sanatate-in-munca",
        name: "Securitate și sănătate în muncă",
        highlights: [
            {
                icon: (
                    <MdOutlineMedicalServices
                        size={40}
                    ></MdOutlineMedicalServices>
                ),
                name: "Suport",
                text: "Informăm, instruim și verificăm lucrătorii în domeniul ssm.",
            },
            {
                icon: <FaFireExtinguisher size={40}></FaFireExtinguisher>,
                name: "Evită",
                text: "Accidentele de muncă sau îmbolnăvirile profesionale, ",
            },
            {
                icon: <CgFileDocument size={40}></CgFileDocument>,
                name: "Scapă de grija documentelor!",
                text: "Întocmim toată documentația necesară serviciilor de personal.",
            },
        ],
        information: "",
    },
    {
        id: "situatii-de-urgenta",
        name: "Situații de urgență",
        highlights: [
            {
                icon: <AiFillGift size={40}></AiFillGift>,
                name: "Beneficii nelimitate",
                text: "Toate tipurile de instructaje, plus verificarea acestora.",
            },
            {
                icon: <HiInformationCircle size={40}></HiInformationCircle>,
                name: "Ramâi informat",
                text: "Te informam cu privire la modificările legislative, apărute în domeniul S.U.",
            },
            {
                icon: <RiOrganizationChart size={40}></RiOrganizationChart>,
                name: "Suntem aici!",
                text: "Asistență continuă la intocmirea și implementarea planului de măsuri.",
            },
        ],
        information: "",
    },
    {
        id: "rsvti",
        name: "ISCIR-RSVTI",
        highlights: [
            {
                icon: <AiFillSafetyCertificate
                        size={40}
                    ></AiFillSafetyCertificate>,
                name: "Siguranță",
                text: "Asigurăm respectarea în totalitate a legalităţii şi a prescripţiilor tehnice în vigoare",
            },
            {
                icon: <MdAttachMoney size={40}></MdAttachMoney>,
                name: "Atenție!",
                text: "Nerespectarea prevederilor art. 15 se sancționează cu amendă de la 30.000 lei la 40.000 lei",
            },
            {
                icon: <AiOutlineFileProtect size={40}></AiOutlineFileProtect>,
                name: "Esti asigurat",
                text: "Te protejăm de răspunderea penală în cazul producerii unor evenimente.",
            },
        ],
        information: "",
    },
    {
        id: "gestiunea-deseurilor",
        name: "Gestiunea Deșeurilor și Managementul Mediului",
        highlights: [
            {
                icon: <MdManageAccounts size={40}></MdManageAccounts>,
                name: "Profesionalism",
                text: "Vă punem la dispoziție un specialist în managementul deșeurilor.",
            },
            {
                icon: <MdReport size={40}></MdReport>,
                name: "SIM",
                text: "Raportări în aplicația electronică SISTEMUL INTEGRAT DE MEDIU",
            },
            {
                icon: <MdAttachMoney size={40}></MdAttachMoney>,
                name: "EVITATI AMENDA!",
                text: "Lipsa persoanei responsabile cu gestiunea deșeurilor se sancționează cu amendă între 15.000 și 30.000 lei.",
            },
        ],
        information: "",
    },
    {
        id: "coordonarea-santierelor",
        name: "Coordonarea Șantierelor",
        highlights: [
            {
                icon: <RiOrganizationChart color={"#ffffff"} size={40}></RiOrganizationChart>,
                name: "Armonizăm",
                text: "Planurile proprii de securitate şi sănătate ale antreprenorilor cu planul de securitate şi sănătate al şantierului.",
            },
            {
                icon: <GiCustodianHelmet size={40}></GiCustodianHelmet>,
                name: "Oferim",
                text: "Serviciu extern de prevenire și protecție ",
            },
            {
                icon: <AiOutlineComment size={40}></AiOutlineComment>,
                name: "Asigurăm",
                text: "Comunicare permanentă între beneficiar și coordonatorul în materie de securitate şi sănătate.",
            },
        ],
        information: "",
    },
    {
        id: "analiza-de-risc-la-securitate-fizica",
        name: "Analiză de Risc la Securitate Fizică",
        highlights: [
            {
                icon: <GoAlert size={40}></GoAlert>,
                name: "Atenție!",
                text: "Analiza de risc este obligatorie conform Legii 333/2003!",
            },
            {
                icon: <CgFileDocument size={40}></CgFileDocument>,
                name: "Suntem înscriși",
                text: "în Registrul Național al Evaluatorilor de Risc, la Securitate Fizică ",
            },
            {
                icon: <MdAttachMoney size={40}></MdAttachMoney>,
                name: "Contravenții",
                text: "În caz contrar riscați amenzi uriașe! (5000-10000 RON)",
            },
        ],
        information: "",
    },
    {
        id: "formare-profesionala",
        name: "Formare Profesională",
        highlights: [
            {
                icon: <FaChalkboardTeacher size={40} color="white"></FaChalkboardTeacher>,
                name: "Califică-te",
                text: "Cursuri de perfecționare în conformitate cu cerințele ANC",
            },
            {
                icon: <IoSchool size={40}></IoSchool>,
                name: "Certificat de Absolvire",
                text: "Dobândește competențele necesare pentru a deveni cadru tehnic în domeniul PSI.",
            },
            {
                icon: <BsPatchCheckFill size={40}></BsPatchCheckFill>,
                name: "Oferim",
                text: "Curs de specializare/perfecționare stivuitorist",
            },
        ],
        information: "",
    },
    {
        id: "masurarea-zgomotului-si-vibratiilor",
        name: "Măsurarea Zgomotului si Vibrațiilor la locul de muncă",
        highlights: [
            {
                icon: <GiToolbox size={40}></GiToolbox>,
                name: "Calitate",
                text: "Echipamentele coresponzătoare standardelor internaţionale",
            },
            {
                icon: <GoAlert size={40}></GoAlert>,
                name: "Important",
                text: "Vibraţiile afectează sănătatea, de aceea trebuie evaluate.",
            },
            {
                icon: <FaRadiation size={40}></FaRadiation>,
                name: "Prevenim",
                text: "Efectele expunerii pe termen lung si scurt.",
            },
        ],
        information: "",
    },
    {
        id: "e-learning",
        name: "Platformă E-learning",
        highlights: [
            {
                icon: <IoApps size={40}></IoApps>,
                name: "Digitalizare",
                text: "Aplicație PC/IOS/ANDROID",
            },
            {
                icon: <IoIosApps size={40}></IoIosApps>,
                name: "Ai totul la îndemână",
                text: "Cursuri, documente, teste toate într-un singur loc.",
            },
            {
                icon: <IoPeople size={40}></IoPeople>,
                name: "O aplicație pentru întreaga companie",
                text: "Portal destinat angajaților, iar separat, unul pentru responsabilul SSM/ manager.",
            },
        ],
        information: "",
    },
    {
        id: "audit-si-evaluarea-riscurilor",
        name: "Audit si Evaluarea Riscurilor",
        highlights: [
            {
                icon: <FaHandsHelping size={40}></FaHandsHelping>,
                name: "Suport",
                text: "în implemenatarea certificărilor ISO ",
            },
            {
                icon: <RiOrganizationChart size={40}></RiOrganizationChart>,
                name: "Plan de măsuri",
                text: "Veți primi un plan de măsuri tehnice și organizatorice, pentru a vă desfasura activitatea în deplină siguranță.",
            },
            {
                icon: <AiOutlineDeliveredProcedure size={40}></AiOutlineDeliveredProcedure>,
                name: "Asigurăm",
                text: "Procedura de evaluare a riscurilor profesionale.",
            },
        ],
        information: "",
    },
    {
        id: "indicatoare",
        name: "Indicatoare de securitate SSM & SU",
        highlights: [
            {
                icon: <MdFollowTheSigns size={40}></MdFollowTheSigns>,
                name: "Producem",
                text: "Întreaga gamă de indicatoare de securitate.",
            },
            {
                icon: <GoAlert size={40}></GoAlert>,
                name: "Atenție!",
                text: "Afișarea semnalisticii SSM & SU este de importanță majoră.",
            },
            {
                icon: <BsSignpostSplitFill size={40}></BsSignpostSplitFill>,
                name: "Respectă",
                text: "Normele legale de semnalizare și marcare.",
            },
        ],
        information: "",
    },
    {
        id: "resurse-umane",
        name: "Resurse Umane",
        highlights: [
            {
                icon: <CgFileDocument size={40}></CgFileDocument>,
                name: "Documentație",
                text: "Întocmim toată documentația necesară serviciilor de personal",
            },
            {
                icon: <MdMoreTime size={40}></MdMoreTime>,
                name: "Ne ocupăm noi de pontaj!",
                text: "Consultanță în privința întocmirii foilor colective de prezență",
            },
            {
                icon: <BsFillFileEarmarkTextFill size={40}></BsFillFileEarmarkTextFill>,
                name: "ReGES",
                text: "Întocmim Serviciul de Evidență al salariaţilor",
            },
        ],
        information: "",
    },
];
