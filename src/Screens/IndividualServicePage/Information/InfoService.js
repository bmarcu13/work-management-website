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
        info_title:"",
        information: "a. organizarea activității de securitate și sănătate în muncă, la nivelul angajatorului și la nivelul fiecărui loc de muncă din organizație; "+ '\n'+
        "b. pregătirea și instruirea lucrătorilor:\n"+
        '\t'+"    i. la angajare;\u000A"+
        "\t         ii. la locul de muncă;\u000A"+
        "   iii. periodic;\u000A"+ 
        "c. verificare, prin teste, a cunoștințelor dobândite în domeniul securității și sănătății în muncă;\n"+
        "d. consultanță, privind metode și mijloace de propagandă, referitoare la securitatea și sănătatea în muncă a lucrătorilor;\n"+
        "e. asistență la controalele efectuate de către I.T.M., privind activitatea de securitate și sănătate în muncă, dar și la cercetarea și întocmirea dosarului, în cazul producerii accidentelor de muncă;\n"+
        "f. completarea documentelor de securitate și sănătate în muncă, conform Legii nr. 319/2006;\n"+
        "g. elaborarea de instrucțiuni proprii de securitate și sănătate în muncă, pentru toate locurile de muncă;\n"+
        "h. consultanță privind autorizarea societății din punct de vedere al protecției muncii;\n"+
        "i. elaborarea și completarea documentelor de securitate și sănătate în muncă, conform Legii nr.319/2006 și a documentațiilor privind modul de acordare a echipamentului individual de protecție, a materialelor igenico-sanitare, a alimentației de protecție, în funcție de riscurile și de condițiile de lucru (mediu toxic), stabilite în cadrul societății;\n"+
        "j. elaborarea tematicii pentru toate fazele de instruire și verificarea acesteia la locul de muncă și periodice;\n" +
        "k. asigurarea informării şi instruirii lucrătorilor în domeniul securităţii şi sănătăţii în muncă şi verificarea cunoaşterii şi aplicării de către lucrători a informaţiilor primite;\n"+ 
        "l. elaborarea și actualizarea planului de prevenire și protecție al societății;\n"+
        "m. evidenţa zonelor cu risc prevăzute la art. 101-107, din Legea nr.319/2006 care necesită semnalizare de securitate şi sănătate în muncă, stabilirea tipului de semnalizare necesar şi amplasarea acestuia conform prevederilor Hotărârii Guvernului nr. 971/2006.\n"+ 
        "n. informarea angajatorului, în scris, asupra deficienţelor constatate în timpul controalelor efectuate la locul de muncă şi propunerea de măsuri de prevenire şi protecţie;\n"+ 
        "o. efectuarea cercetării în cazul unui eveniment de muncă.",
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
        information: "a. Instructajul introductiv general:\n"+
        "•sistemul de reglementări din domeniul situațiilor de urgență;\n"+
        "•indicativ, mijloace tehnice în domeniul S.U., din dotarea societății;\n"+
        "•aspecte specifice privind situațiile de urgență.\n"+
        "b. Instructajul specific locului de muncă:\n"+
        "•cauze de incendiu de natura electrică;\n"+
        "•aspecte specifice privind prevenirea incendiilor ;\n"+
        "•măsuri de prim ajutor.\n"+
        "c. Instructajul periodic:\n"+
        "•agenți pentru stingerea incendiilor;\n"+
        "•observarea, anunțarea și intervenția în caz de incendiu;\n"+
        "•cauze de incendiu;\n"+
        "•reguli de ordine interioară;\n"+
        "•principii privind evacuarea persoanelor și autoturismelor;\n"+
        "•elemente specifice privind organizarea pe locuri de munca;\n"+
        "•caracterizarea carburanților, din p.d.v. al pericolului de explozie și incendiu;\n"+
        "•pericole specifice la și de la vecinătăți;\n"+
        "•sistemul de încălzire și măsurile de protecție specifice;\n"+
        "•măsurile specifice de prevenire, pe timpul anotimpului friguros și perioadelor caniculare;\n"+
        "•obligații privind rețelele urbane pentru intervenții;\n"+
        "•reglementarea lucrărilor cu foc deschis;\n"+
        "d. Verificarea periodică a instruirii;\n"+
        "e. Întocmirea documentației specifice, în domeniul situațiilor de urgentă, pentru orice tip de activitate (inclusiv planuri de evacuare bunuri și persoane, planuri de intervenție, planuri de analiză și acoperire a riscurilor, etc);\n"+
        "f. Informarea scrisă a Beneficiarului, cu privire la măsurile tehnice şi organizatorice de desfășurare a activității si a modificărilor legislative, apărute în domeniul S.U;\n"+
        "g. Asistență de specialitate în cazul controalelor autorităților din Inspectoratul pentru Situații de Urgență;\n"+
        "h. Asistență în cazul controalelor autorităților din Inspectoratul pentru Situații de Urgență;",
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
        information: '#style{"fontWeight":"bold"}WORK MANAGEMENT#/ deține personal autorizat pentru întocmirea:\n'+
       " - proiectelor de montaj, reparații, modernizare instalații sub prescripția ISCIR(inclusiv RADTP)\n"+
       " - expertizelor tehnice, pentru evaluarea și determinarea perioadei remanente de viață(inclusiv RADTE)\n\n"+
       
        '#style{"fontWeight":"bold"}AVANTAJELE PRESTĂRII SERVICIULUI OPERATOR RSVTI DE CĂTRE O SOCIETATE EXTERNĂ, AUTORIZATĂ ISCIR, SUNT: #/\n\n'+
        "•eliminarea răspunderii directe a beneficiarului în faţa organelor statului;\n"+
        "•asigurarea beneficiarului de respectarea în totalitate a legalităţii şi a prescripţiilor tehnice în vigoare;\n"+
        "•protejarea beneficiarului de răspunderea penală în cazul producerii unor evenimente;\n"+
        "•asigurarea verificării funcţionării în condiţii de maximă siguranţă a instalaţiilor;\n"+
        "•eliminarea unui număr mare de documente ce trebuie transmise la diverse instituţii ale statului.\n\n"+
        '#style{"fontWeight":"bold"}INSTALAŢII SUB INCIDENŢA ISCIR-RSVTI#/: macarale, elevatoare, moto/electrostivuitoare, nacele, centrale termice, cazane, echipamente sub presiune (>0,5 BAR), cuptoare, compresoare, conducte sub presiune.'
        ,
        information2:'#style{"fontWeight":"bold"}De ce să apelaţi la serviciile noastre de RSVTI? #/ \n\n'+
        "Nu este necesară angajarea cu contract de muncă a persoanei fizice ce îndeplineşte ocupaţia de RSVTI.\n"+
        "Nu sunteţi afectat de fluctuaţia de personal, nu trebuie să asiguraţi pe durata concediului de odihnă său medical înlocuitor cu aceeaşi calificare pentru angajatul responsabil de RSVTI care să preia temporar atribuţiunile acestuia.\n"+
        "Beneficiaţi de costuri mici şi fixe si evitaţi plata taxelor şi asigurărilor sociale aferente contractelor de muncă Operare simplă:\n"+
        "Contract anual şi o singură factură lunară."
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
        information: "Conform Legii 211/2011, toți deținătorii/producătorii de deșeuri persoane juridice, comercianții, precum și operatorii economici autorizați pentru colectare/transport deșeuri au OBLIGAȚIA să "+
        "desemneze o persoană din rândul angajaților proprii care să gestioneze corespunzător deșeurile sau să delege această obligație unei terțe persoane.\n"+
        '#style{"fontWeight":"bold"}DE REȚINUT #/ că persoanele desemnate, trebuie să fie instruite în domeniul gestiunii deșeurilor, inclusiv a deșeurilor periculoase, că urmare a absolvirii unor cursuri de specialitate.\n' +
        "Noi preluăm responsabilitatea gestiunii deșeurilor conform Legii 211/2011 în cadrul companiei dvs. și vă punem la dispoziție un specialist în managementul deșeurilor."
        ,
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
        information: "Vă oferim:\n"+
        "• Servicii de Coordonare SSM prin serviciu extern de prevenire și protecție astfel încât să vă conformați în totalitate cu HG 300/2006 privind cerinţele minime de securitate şi sănătate pe şantierele temporare şi mobile care stipulează că obligativitate, desemnarea unui coordonator de securitate şi elaborarea planului de securitate și sănătate atât în faza de întocmire a proiectului cât și pe perioada execuției lucrărilor.\n"+
        "• Întocmire Plan de Securitate și Sănătate în faza de proiectare\n"+
        "• Întocmire Plan de Securitate și Sănătate în faza de execuție\n"+
        "• Întocmire Plan Propriu de Securitate și Sănătate al Antreprenorului",
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
