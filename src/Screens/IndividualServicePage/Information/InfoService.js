import {GoAlert} from "react-icons/go";
import {CgFileDocument} from "react-icons/cg";
import {MdAttachMoney, MdOutlineMedicalServices, MdReport} from "react-icons/md";
import {IoIosApps, IosApps, IoPeople} from "react-icons/io";
import {GiCustodianHelmet, GiPlan} from "react-icons/gi";
import {AiFillGift, AiOutlineFileProtect, AiFillSafetyCertificate} from "react-icons/ai";
import {HiInformationCircle} from "react-icons/hi";
import {FaFireExtinguisher} from "react-icons/fa";
import {GrUserWorker} from "react-icons/gr";

export  const servicesInfo= {
    ssm: {
      url: "",
      name:"Securitate și sănătate în muncă" ,
      highlights: [{
        icon: <MdOutlineMedicalServices></MdOutlineMedicalServices>,
        name: "Suport",
        text: "Informăm, instruim și verificăm lucrătorii în domeniul ssm.",
      },
      {
        icon: <FaFireExtinguisher></FaFireExtinguisher>,
        name: "Evită",
        text: "Accidentele de muncă sau îmbolnăvirile profesionale, "
      }, 
      {
        icon: <CgFileDocument></CgFileDocument>,
        name: "Scapă de grija documentelor!",
        text: "Întocmim toată documentația necesară serviciilor de personal."
      }],
      information: ""
    },
    su: {
        url: "",
        name:"Situații de urgență" ,
        highlights: [{
          icon: <AiFillGift></AiFillGift>,
          name: "Beneficii nelimitate",
          text: "Toate tipurile de instructaje, plus verificarea acestora.",
        },
        {
          icon: <HiInformationCircle></HiInformationCircle>,
          name: "Ramâi informat",
          text: "Te informam cu privire la modificările legislative, apărute în domeniul S.U."
        }, 
        {
          icon: <GiPlan></GiPlan>,
          name: "Suntem aici!",
          text: "Asistență continuă la intocmirea și implementarea planului de măsuri."
        }],
        information: ""
    },
    rsvti: {
        url: "",
        name:"ISCIR-RSVTI" ,
        highlights: [{
          icon: <AiFillSafetyCertificate></AiFillSafetyCertificate>,
          name: "Siguranță",
          text: "Asigurăm respectarea în totalitate a legalităţii şi a prescripţiilor tehnice în vigoare",
        },
        {
          icon: <MdAttachMoney></MdAttachMoney>,
          name: "Atenție!",
          text: "Nerespectarea prevederilor art. 15 se sancționează cu amendă de la 30.000 lei la 40.000 lei"
        }, 
        {
          icon: <AiOutlineFileProtect></AiOutlineFileProtect>,
          name: "Esti asigurat",
          text: "Te protejăm de răspunderea penală în cazul producerii unor evenimente."
        }],
        information: ""
    },
    mediu: {
        url: "",
        name:"Gestiunea Deșeurilor și Managementul Mediului" ,
        highlights: [{
          icon: <GrUserWorker></GrUserWorker>,
          name: "",
          text: "Vă punem la dispoziție un specialist în managementul deșeurilor.",
        },
        {
          icon: <MdReport></MdReport>,
          name: "SIM",
          text: "Raportări în aplicația electronică SISTEMUL INTEGRAT DE MEDIU"
        }, 
        {
          icon: <MdAttachMoney></MdAttachMoney>,
          name: "EVITATI AMENDA!",
          text: "Lipsa persoanei responsabile cu gestiunea deșeurilor se sancționează cu amendă între 15.000 și 30.000 lei."
        }],
        information: ""
    },
    santiere: {
        url: "",
        name:"Coordonarea Șantierelor" ,
        highlights: [{
          icon: <GiPlan></GiPlan>,
          name: "Armonizăm",
          text: "Planurile proprii de securitate şi sănătate ale antreprenorilor cu planul de securitate şi sănătate al şantierului.",
        },
        {
          icon: <GiCustodianHelmet></GiCustodianHelmet>,
          name: "Oferim",
          text: "Serviciu extern de prevenire și protecție "
        }, 
        {
          icon: "",
          name: "Asigurăm",
          text: "Comunicare permanentă între beneficiar și coordonatorul în materie de securitate şi sănătate."
        }],
        information: ""
    },
    securitate_fizica: {
        url: "",
        name:"Analiză de Risc la Securitate Fizică" ,
        highlights: [{
          icon: <GoAlert></GoAlert>,
          name: "Atenție!",
          text: "Analiza de risc este obligatorie conform Legii 333/2003!",
        },
        {
          icon: <CgFileDocument></CgFileDocument>,
          name: "Suntem înscriși",
          text: "în Registrul Național al Evaluatorilor de Risc, la Securitate Fizică "
        }, 
        {
          icon: <MdAttachMoney></MdAttachMoney>,
          name: "",
          text: "În caz contrar riscați amenzi uriașe! (5000-10000 RON)"
        }],
        information: ""
    },
    formare_profesionala: {
        url: "",
        name:"Formare Profesională" ,
        highlights: [{
          icon: "",
          name: "Califică-te",
          text: "Cursuri de perfecționare în conformitate cu cerințele ANC",
        },
        {
          icon: "",
          name: "Certificat de Absolvire",
          text: "Dobândește competențele necesare pentru a deveni cadru tehnic în domeniul PSI."
        }, 
        {
          icon: "",
          name: "Oferim",
          text: "Curs de specializare/perfecționare stivuitorist"
        }],
        information: ""
    },
    zgomot: {
        url: "",
        name:"Măsurarea Zgomotului si Vibrațiilor la locul de muncă" ,
        highlights: [{
          icon: "",
          name: "Calitate",
          text: "Echipamentele coresponzătoare standardelor internaţionale",
        },
        {
          icon: <GoAlert></GoAlert>,
          name: "Important",
          text: "Vibraţiile afectează sănătatea, de aceea trebuie evaluate."
        }, 
        {
          icon: "",
          name: "Prevenim",
          text: "Efectele expunerii pe termen lung si scurt."
        }],
        information: ""
    },
    e_learning: {
        url: "",
        name:"Platformă E-learning" ,
        highlights: [{
          icon: <IosApps></IosApps>,
          name: "Digitalizare",
          text: "Aplicație PC/IOS/ANDROID",
        },
        {
          icon: <IoIosApps></IoIosApps>,
          name: "Ai totul la îndemână",
          text: "Cursuri, documente, teste toate într-un singur loc."
        }, 
        {
          icon: <IoPeople></IoPeople>,
          name: "O aplicație pentru întreaga companie",
          text: "Portal destinat angajaților, iar separat, unul pentru responsabilul SSM/ manager."
        }],
        information: ""
    },
    audit: {
        url: "",
        name:"Audit si Evaluarea Riscurilor" ,
        highlights: [{
          icon: "",
          name: "Suport",
          text: "în implemenatarea certificărilor ISO ",
        },
        {
          icon: <GiPlan></GiPlan>,
          name: "Plan de măsuri",
          text: "Veți primi un plan de măsuri tehnice și organizatorice, pentru a vă desfasura activitatea în deplină siguranță."
        }, 
        {
          icon: "",
          name: "Asigurăm",
          text: "Procedura de evaluare a riscurilor profesionale"
        }],
        information: ""
    },
    indicatoare: {
        url: "",
        name:"Indicatoare de securitate SSM & SU" ,
        highlights: [{
          icon: "",
          name: "Producem",
          text: "Întreaga gamă de indicatoare de securitate",
        },
        {
          icon: <GoAlert></GoAlert>,
          name: "Atenție!",
          text: "Afișarea semnalisticii SSM & SU este de importanță majoră,"
        }, 
        {
          icon: "",
          name: "",
          text: ""
        }],
        information: ""
    },
    resurse_umane: {
        url: "",
        name:"Resurse Umane" ,
        highlights: [{
          icon: <CgFileDocument></CgFileDocument>,
          name: "Documentație",
          text: "Întocmim toată documentația necesară serviciilor de personal",
        },
        {
          icon: "",
          name: "Ne ocupăm noi de pontaj!",
          text: "Consultanță în privința întocmirii foilor colective de prezență"
        }, 
        {
          icon: "",
          name: "",
          text: ""
        }],
        information: ""
    },
  }