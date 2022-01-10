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
import { IoPeople, IoApps, IoSchool, IoTrailSignSharp } from "react-icons/io5";
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

import evaluarea_riscurilor from '../../../img/evaluarea-riscurilor.png';
import formare_profesionala from '../../../img/formare-profesionala.png';
import zgomote from '../../../img/zgomote.png';
import santiere from '../../../img/santiere.png';
// import ssm from '../../../img/worker_graphics.png';
import e_learning from '../../../img/app-work.png';
import hr from '../../../img/hr.png';
import SU from '../../../img/SU.png';
import ssm from '../../../img/work-safety.jpg';
import protectia_mediului from '../../../img/prot-mediului.jpg';
import signs from '../../../img/signs.png';
import risc from '../../../img/risc.png';
import rsvti from '../../../img/rsvti-sign.png';
// import  from '../../../img/rsvti-sign.png';

///import-uri icons main
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
                text: "Informăm, instruim și verificăm lucrătorii în domeniul SSM.",
            },
            {
                icon: <FaFireExtinguisher size={40}></FaFireExtinguisher>,
                name: "Evită",
                text: "Accidentele de muncă sau îmbolnăvirile profesionale. ",
            },
            {
                icon: <CgFileDocument size={40}></CgFileDocument>,
                name: "Scapă de grija documentelor!",
                text: "Întocmim toată documentația necesară serviciilor de personal.",
            },
        ],
        information: '#style{"fontWeight":"bold", "fontSize": 22}Serviciile noastre SSM includ#/:\n\n'+
        "a. organizarea activității de securitate și sănătate în muncă, la nivelul angajatorului și la nivelul fiecărui loc de muncă din organizație; "+ '\n'+
        'b. #style{"fontWeight":"bold"}pregătirea și instruirea#/ lucrătorilor:\n'+
        ' #style{"marginLeft":"30px"}  i. la angajare;#/\u000A'+
        ' #style{"marginLeft":"30px"} ii. la locul de muncă;#/\u000A'+
        ' #style{"marginLeft":"30px"}  iii. periodic;#/\u000A'+ 
        "c. verificare, prin teste, a cunoștințelor dobândite în domeniul securității și sănătății în muncă;\n"+
        "d. consultanță, privind metode și mijloace de propagandă, referitoare la securitatea și sănătatea în muncă a lucrătorilor;\n"+
        "e. asistență la controalele efectuate de către I.T.M., privind activitatea de securitate și sănătate în muncă, dar și la cercetarea și întocmirea dosarului, în cazul producerii accidentelor de muncă;\n"+
        "f. completarea documentelor de securitate și sănătate în muncă, conform Legii nr. 319/2006;\n"+
        "g. elaborarea de instrucțiuni proprii de securitate și sănătate în muncă, pentru toate locurile de muncă;\n"+
        "h. consultanță privind autorizarea societății din punct de vedere al protecției muncii;\n"+
        'i. #style{"fontWeight":"bold"}elaborarea și completarea documentelor#/ de securitate și sănătate în muncă, conform Legii nr.319/2006 și a documentațiilor privind modul de acordare a echipamentului individual de protecție, a materialelor igenico-sanitare, a alimentației de protecție, în funcție de riscurile și de condițiile de lucru (mediu toxic), stabilite în cadrul societății;\n'+
        "j. elaborarea tematicii pentru toate fazele de instruire și verificarea acesteia la locul de muncă și periodice;\n" +
        "k. asigurarea informării şi instruirii lucrătorilor în domeniul securităţii şi sănătăţii în muncă şi verificarea cunoaşterii şi aplicării de către lucrători a informaţiilor primite;\n"+ 
        'l. elaborarea și actualizarea #style{"fontWeight":"bold"}planului de prevenire și protecție al societății#/;\n'+
        "m. evidenţa zonelor cu risc prevăzute la art. 101-107, din Legea nr.319/2006 care necesită semnalizare de securitate şi sănătate în muncă, stabilirea tipului de semnalizare necesar şi amplasarea acestuia conform prevederilor Hotărârii Guvernului nr. 971/2006.\n"+ 
        "n. informarea angajatorului, în scris, asupra deficienţelor constatate în timpul controalelor efectuate la locul de muncă şi propunerea de măsuri de prevenire şi protecţie;\n"+ 
        "o. efectuarea cercetării în cazul unui eveniment de muncă.",
        image:ssm,
        main_icon:<MdOutlineHealthAndSafety></MdOutlineHealthAndSafety>
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
        information: '#style{"fontWeight":"bold", "fontSize": 22}SITUAȚII DE URGENȚĂ ( PSI și PC)#/\n\n'+
        '#style{"fontWeight":"bold"}Work Management#/ oferă în domeniul prevenirea şi stingerea incendiilor (PSI) consultanţă de specialitate în conformitate cu normele metodologice de aplicare a prevederilor din Legea Nr. 307/2006.\n\n'+
        '#style{"fontWeight":"bold"}a. Instructajul introductiv general:#/\n'+
        '#style{"marginLeft":"25px"}•sistemul de reglementări din domeniul situațiilor de urgență;#/\n'+
        '#style{"marginLeft":"25px"}•indicativ, mijloace tehnice în domeniul S.U., din dotarea societății;#/\n'+
        '#style{"marginLeft":"25px"}•aspecte specifice privind situațiile de urgență.#/\n\n'+
        '#style{"fontWeight":"bold"}b. Instructajul specific locului de muncă:#/\n'+
        '#style{"marginLeft":"25px"}•cauze de incendiu de natura electrică;#/\n'+
        '#style{"marginLeft":"25px"}•aspecte specifice privind prevenirea incendiilor;#/\n'+
        '#style{"marginLeft":"25px"}•măsuri de prim ajutor.#/\n\n'+
        '#style{"fontWeight":"bold"}c. Instructajul periodic:#/\n'+
        '#style{"marginLeft":"25px"}•agenți pentru stingerea incendiilor;#/\n'+
        '#style{"marginLeft":"25px"}•observarea, anunțarea și intervenția în caz de incendiu;#/\n'+
        '#style{"marginLeft":"25px"}•cauze de incendiu;#/\n'+
        '#style{"marginLeft":"25px"}•reguli de ordine interioară;#/\n'+
        '#style{"marginLeft":"25px"}•principii privind evacuarea persoanelor și autoturismelor;#/\n'+
        '#style{"marginLeft":"25px"}•elemente specifice privind organizarea pe locuri de munca;#/\n'+
        '#style{"marginLeft":"25px"}•caracterizarea carburanților, din p.d.v. al pericolului de explozie și incendiu;#/\n'+
        '#style{"marginLeft":"25px"}•pericole specifice la și de la vecinătăți;#/\n'+
        '#style{"marginLeft":"25px"}•sistemul de încălzire și măsurile de protecție specifice;#/\n'+
        '#style{"marginLeft":"25px"}•măsurile specifice de prevenire, pe timpul anotimpului friguros și perioadelor caniculare;#/\n'+
        '#style{"marginLeft":"25px"}•obligații privind rețelele urbane pentru intervenții;#/\n'+
        '#style{"marginLeft":"25px"}•reglementarea lucrărilor cu foc deschis;#/\n\n'+
        "d. Verificarea periodică a instruirii;\n"+
        "e. Întocmirea documentației specifice, în domeniul situațiilor de urgență, pentru orice tip de activitate (inclusiv planuri de evacuare bunuri și persoane, planuri de intervenție, planuri de analiză și acoperire a riscurilor, etc);\n"+
        "f. Informarea scrisă a Beneficiarului, cu privire la măsurile tehnice şi organizatorice de desfășurare a activității și a modificărilor legislative, apărute în domeniul S.U;\n"+
        "g. Asistență de specialitate în cazul controalelor autorităților din Inspectoratul pentru Situații de Urgență;\n"+
        "h. Asistență în cazul controalelor autorităților din Inspectoratul pentru Situații de Urgență;",
        image:SU,
        main_icon:<AiOutlineAlert></AiOutlineAlert>
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
        "Beneficiaţi de costuri mici şi fixe și evitaţi plata taxelor şi asigurărilor sociale aferente contractelor de muncă Operare simplă:\n"+
        "Contract anual şi o singură factură lunară.",
        image:rsvti,
        main_icon:<GiElectricalResistance></GiElectricalResistance>
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
        '#style{"boxShadow":"2px 3px blue", "fontWeight":"bold", "margin":"4px", "color": "blue"}DE REȚINUT #/ că persoanele desemnate, trebuie să fie instruite în domeniul gestiunii deșeurilor, inclusiv a deșeurilor periculoase, că urmare a absolvirii unor cursuri de specialitate.\n' +
        "Noi preluăm responsabilitatea gestiunii deșeurilor conform Legii 211/2011 în cadrul companiei dvs. și vă punem la dispoziție un specialist în managementul deșeurilor.\n\n"+
        '#style{"fontWeight":"bold", "fontSize":22}Externalizare Servicii Protecţia Mediului:#/\n\n'+
        '#style{"marginLeft":"25px"}•Asigurarea îndeplinirii obligaţiilor, prevăzute de Legea 211/2011, cu personal calificat, de specialitate (Specialist managementul deşeurilor, cod COR 325713);#/\n\n'+
        '#style{"marginLeft":"25px"}•Identificarea problemelor şi necesităţilor, pentru conformarea la prevederile legislaţiei de mediu în vigoare:#/\n'+
        '#style{"marginLeft":"25px"}•Asistență în identificarea deşeurilor generate, conform codului deşeurilor (HG 856/2002);#/\n'+
        '#style{"marginLeft":"25px"}•Elaborarea planului de intervenţie în caz de poluări accidentale;#/\n'+
        '#style{"marginLeft":"25px"}•Elaborarea şi menţinerea evidenţei lunare privind gestiunea deşeurilor;#/\n'+
        '#style{"marginLeft":"25px"}•Raportările în aplicaţia electronică SISTEMUL INTEGRAT DE MEDIU (SIM);#/\n'+
        '#style{"marginLeft":"25px"}•Întocmirea şi transmiterea raportărilor lunare/anuale către autoritatea competentă de protecţie a mediului;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmirea lunară a Declaraţiei privind obligaţiile la fondul de mediu.#/\n'+
        '#style{"marginLeft":"25px"}• Menţinerea Autorizaţiei de Mediu, informarea permanentă a măsurilor impuse prin aceeasta; #/\n\n'

       +'#style{"fontWeight":"bold"}Obţinere Autorizaţii / Avize#/\n'+
        '#style{"marginLeft":"25px"}Autorizaţie de mediu;#/\n'+
        '#style{"marginLeft":"25px"} Acord de mediu;#/\n'+
        '#style{"marginLeft":"25px"}Accept de evacuare ape uzate.#/\n'+
        '#style{"fontWeight":"bold"}+Întocmire studii de mediu#/' ,
        
        image:protectia_mediului,
        main_icon:<MdRecycling></MdRecycling>
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
        information: '#style{"fontWeight":"bold", "fontSize": 21}Vă oferim:#/\n\n'+
        "• Servicii de Coordonare SSM prin serviciu extern de prevenire și protecție astfel încât să vă conformați în totalitate cu HG 300/2006 privind cerinţele minime de securitate şi sănătate pe şantierele temporare şi mobile care stipulează că obligativitate, desemnarea unui coordonator de securitate şi elaborarea planului de securitate și sănătate atât în faza de întocmire a proiectului cât și pe perioada execuției lucrărilor.\n"+
        "• Întocmire Plan de Securitate și Sănătate în faza de proiectare\n"+
        "• Întocmire Plan de Securitate și Sănătate în faza de execuție\n"+
        "• Întocmire Plan Propriu de Securitate și Sănătate al Antreprenorului",
        image:santiere,
        main_icon:<FaTools></FaTools>
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
        information: "Obligativitatea analizei de risc, este prevazută, de Legea 333/2003 privind paza obiectivelor, bunurilor, valorilor și protecția persoanelor, pentru care s-au emis în anul 2012 normele de aplicare, prin hotărârea de guvern 301/2012.\n"+
        "Evaluarea de risc, la securitatea fizică, este documentul, prin care, un specialist analizează și stabilește, de ce anume este nevoie, pentru ca paza obiectivelor dumneavoastră, să acopere toate vulnerabilitatile acestuia, în fața hoților.\n"+
        "Toate societățile comerciale, sunt obligate să contracteze, un evaluator de risc, la securitat fizică, care să realizeze analiza de risc. Aceasta urmează să fie efectuată, pentru toate obiectele de activitate active și sediile dumneavoastră.\n\n"+
        'Toate societățile comerciale, sunt obligate să contracteze, un evaluator de risc, la securitate fizică, care să realizeze analiză de risc. Aceasta urmează să fie efectuată, pentru toate obiectele de activitate active și sediile dumneavoastră. \n\n Societatea noastră, este abilitată, să întocmească astfel de evaluări, fiind înscrisă, în #style{"fontWeight":"bold"}Registrul Național al Evaluatorilor de Risc, la Securitate Fizică#/',
        image:risc,
        main_icon:<IoAnalyticsSharp></IoAnalyticsSharp>
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
        information: '#style{"fontWeight":"bold","fontSize":21}WORK MANAGEMENT #/ organizează cursuri de perfecționare în conformitate cu cerințele '+
        "ANC în urma cărora participanții la programul de perfecționare vor susține un examen de "+
        "absolvire și continuând cu primirea certificatului de absolvire în meseria de inspector în "+
        "domeniul securității și sănătății în muncă\n\n"+
        '#style{"fontWeight":"bold","fontSize":21}Competențele dobandite în urma cursului sunt:#/\n'+
        "• Realizarea activităţilor de prevenire şi protecţie\n"+
        "• Realizarea semnalizării de securitate şi/sau de sănătate la locurile de muncă\n"+
        "• Instruirea lucrătorilor în domeniul securităţii şi sănătăţii în muncă\n"+
        "• Informarea lucrătorilor în domeniul securităţii şi sănătăţii în muncă\n"+
        "• Stabilirea mijloacelor materiale şi tehnice necesare securităţii şi sănătăţii în muncă\n"+
        "• Prevenirea accidentelor de muncă şi a îmbolnăvirilor profesionale\n"+
        "• Participarea la cercetarea evenimentelor care produc incapacitate temporară de muncă\n"+
        "• Verificarea respectării prevederilor legale în domeniul securităţii şi sănătăţii în muncă\n"+
        "• Monitorizarea activităţilor de evacuare şi intervenţie în situaţii de urgenţă\n"+
        "• Dezvoltarea profesională\n"+
        "• Planificarea activităţilor proprii",

        information2: 'Organizăm #style{"fontWeight":"bold"}cursuri de specializare/perfecționare stivuitorist #/(COD COR 834403) în conformitate cu cerințele ANC și ISCIR.\n\n'+
        "Toate sarcinile dedicate încărcării, descărcării sau deplasării pe distanțe scurte a unor elemente de dimensiuni și greutăți apreciabile au nevoie de îndemănare, organizare și siguranță."+
        "În acest sens, venim în ajutorul dumneavoastră cu acest curs de specializare/perfecționare stivuitorist. Tematica acestui curs de stivuitorist este în acord cu metodologia în vigoare și respectă cele mai înalte standarde de instruire.",
        image:formare_profesionala,
        main_icon: <MdWorkOutline></MdWorkOutline>
    },
    {
        id: "masurarea-zgomotului-si-vibratiilor",
        name: "Măsurarea Zgomotului și Vibrațiilor la locul de muncă",
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
                text: "Efectele expunerii pe termen lung și scurt.",
            },
        ],
        information: '#style{"fontWeight":"bold", "fontSize": 21}Oferim:#/\n\n'+
        "Servicii de măsurare a zgomotului şi a vibraţiilor transmise omului, în regim abilitat de Ministerul Sănătăţii.\n Echipamentele utilizate pentru măsurători corespund cerinţelor standardelor internaţionale şi răspund întocmai cerinţelor minime de securitate şi sănătate la locul de muncă, respective HG 1876/2005.\n"+
        "Pentru măsurarea vibraţiilor transmise omului este necesară cunoaşterea următoarelor informaţii:\n\n"+
        
        "• Tipul activităţii desfăşurate;\n"+
        "• Tipul vibraţiei transmise omului (mana-brat sau întregul corp);\n"+
        "• Durata expunerii la vibraţii.        De exemplu: muncitor în construcţii, lucrează la picamer (vibraţie tip mana-brat) timp de 4 ore.",
        image:zgomote,
        main_icon:<GiSoundWaves></GiSoundWaves>
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
        information: '#style{"fontWeight":"bold","fontSize":22, "textDecoration":"underline"}APLICAȚIE PC/IOS/ANDROID SSM, SU ȘI RSVTI#/\n\n'+
        "Pentru fiecare angajat, indiferent de statut, pot fi văzute toate acțiunile privind:\n\n"+
        "- Vizualizarea și descărcarea documentelor;\n"+
        "- Statusul privind parcurgerea instructajelor;\n"+
        "- Ultimele versiuni de documente accesate;\n"+
        "- Angajații care au susținut testele și punctajul obținut;\n"+
        "- Angajații care nu au dat testele și data pentru care au fost reprogramați pentru susținerea testelor.",

        information2: "Toate documentele pot fi vizualizate, descărcate și modificate în funcție de cerințele beneficiarului sau de obligațiile legale.\n"+
        "Instructajele pot fi modificate și personalizate oricând, în funcție de tehnologii noi, riscuri noi, norme legislative noi etc."+
        "Testele pot fi modificate în orice moment, în funcție de instructajele parcurse de angajați sau privind noi riscuri apărute, de exemplu riscul de infectare cu SARS-CoV-2. \n\n"+
        "Mai mult, reprezentanții Work Management pot face verificări/checklist-uri privind respectarea normelor SSM, SU, PC, RSVTI și Mediu în sediile/punctele de lucru ale Beneficiarului.\n\n"+
        '#style{"fontWeight":"bold", "color":"red", "display":"center"}TOATE ACESTE FUNCȚII ALE APLICAȚIEI NU SUNT LIMITATIVE, POT FI ADUSE ACTUALIZĂRI PENTRU A RĂSPUNDE TUTUROR NEVOILOR BENEFICIARULUI.#/',
        image:e_learning,
        main_icon:<VscMortarBoard></VscMortarBoard>
    },
    {
        id: "audit-si-evaluarea-riscurilor",
        name: "Audit și Evaluarea Riscurilor",
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
        information: '#style{"fontWeight":"bold", "fontSize":21, "marginLeft": "20px"}AUDIT#/\n\n'+
        'Prin auditul SSM, experții #style{"fontWeight":"bold","textDecoration":"italic"}Work Management#/ vor evalua, modul în care compania dumneavoastră respectă reglementările legale în vigoare, în domeniul în care vă desfășurați activitatea.\n'+
        "În urma auditului, veți primi un plan de măsuri tehnice și organizatorice, pentru ca dumneavoastră să vă desfașurati activitatea, în deplină siguranță.\n\n"+
        "Vom verifica:\n"+
 
        "- existența documentaţiei și conformarea cu activitățile prestate și locurile de muncă existente;\n"+
        "- modul în care angajații dumneavoastră cunosc responsabilităţile în domeniul Securităţii şi Sănătăţii în Muncă;\n"+
        "- respectarea cerinţelor minime referitoare la echipamentele de muncă și a echipamentelor individuale de protecţie;\n"+
        "- respectarea cerinţelor minime privind mediul de muncă;\n"+
        "- modul în care se efectuează manipularea maselor;\n"+
        "- dacă este implementată semnalizarea minimă de securitate;\n"+
        "- modul în care se desfășoară supravegherea sănătăţii lucrătorilor;\n"+
        "- alte aspecte, în funcție de caz și de activitatea dumneavoastră (cerinţelor minime privind şantierele temporare şi mobile, cerinţelor minime privind protecţia maternităţii, etc)\n\n"+

        'Suplimentar, vă putem oferi suport pentru implemenatarea certificării #style{"fontWeight":"bold"} ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, SMSI ISO 27001.#/',
        information2:'#style{"fontWeight":"bold","fontSize":21, "marginLeft": "20px"}EVALUAREA RISCURILOR#/\n\n'+
         'Prin această lucrare, experții Work Management, #style{"fontWeight":"bold"}identifică#/ factorii de risc existenţi în cadrul companiei dumneavoastră şi #style{"fontWeight":"bold"}evaluează#/ dimensiunea acestora, raportandu-se la  importanța și frecvența consecinţelor, asupra securității și sănătății angajaţilor.\n\n'+
        '#style{"fontWeight":"bold"}Evaluarea riscurilor de accidentare și îmbolnăvire profesională#/, are că scop identificarea și punerea în practică a masurilor pentru riscurile identificate în ordinea desccrescatoarea nivelului parțial de risc. Alegerea metodei de evaluare depinde de: tipul activității și al echipamentelor utilizate, numărul de lucrători implicați, condițiile de muncă, caracteristicile particulare ale locului de muncă și riscurile specifice.\n'+
        'Ulterior, se intocmeste #style{"fontWeight":"bold"}Planul de Prevenire și Protecție#/, pe baza riscurilor identificate la locurile de muncă / posturile de lucru, specifice activităților desfășurate și a echipamentelor de muncă utilizate în cadrul societății.\n'+
       ' #style{"fontWeight":"bold"} Procedura de evaluare a riscurilor profesionale#/ poate fi rezumată după cum urmează:\n\n'+
        "- Identificarea pericolului\n"+
        "- Eliminarea pericolului, dacă este rezonabil posibil\n"+
        "- Analizarea pericolului, dacă acesta nu poate fi eliminat și evaluarea riscului\n"+
        "- Luarea de măsuri pentru a limita consecințele\n"+
        "- Supravegherea riscurilor\n"+
        "- Metode și instrumente de evaluare a riscurilor.\n\n"+
        "Evaluarea riscurilor de accidente și îmbolnăviri profesionale se face pentru fiecare loc de muncă (angajați care sunt expuși la același risc având activități similare sau apropiate).",
        image:evaluarea_riscurilor,
        main_icon:<FaUserInjured></FaUserInjured>
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
        information: '#style{"fontWeight":"bold"}Producem și comercializam#/, întreaga gamă de indicatoare de securitate, care sunt prevăzute de normele legale în vigoare.\n'+
        "- Indicatoare de interzicere,\n"+
        "- Indicatoare de obligativitate,\n"+
        "- Indicatoare de avertizare\n"+
        "- Indicatoare de informare\n\n"+
        
        "Afișarea semnalisticii SSM & SU este de o importanță majoră, indiferent de activitatea pe care compania dumneavoastră o desfășoară. (vorbim despre semnalizarea prizelor, stingătoarelor și marcarea ieșirilor de urgență, obligativitatea purtării unui echipament de protecție, etc)\n"+
        'Indicatoarele de semnalizare, sunt o modalitate rapidă de a comunica informații importante angajaților, colaboratorilor și vizitatorilor.\n Odată cu respectarea normelor legale #style{"fontWeight":"bold"} preveniți și accidentele de muncă#/, amplasând indicatoarele corespunzătoare riscurilor din compania dumneavoastră, într-un loc vizibil.',
        image:signs,
        main_icon:<FaSignInAlt></FaSignInAlt>
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
        information:'#style{"fontWeight":"bold", "fontSize": 22}Asigurarea serviciilor de personal#/\n\n'+
        "Work Management oferă în domeniul resurselor umane servicii complete de personal, salarizare, consultanţă şi asistenţă la controalele Instituţiilor de drept:\n"+
        '#style{"marginLeft":"25px"}•Întocmire Contracte individuale de muncă;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire acte adiţionale;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire decizii de încetare, suspendare;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire dosare de personal( Conţinutul acestui dosar se poate modifica în funcţie de noile reglementări legislative);#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire fişe de post;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire Registrul de Evidenţă al salariaţilor;#/\n'+
        '#style{"marginLeft":"25px"}•Gestionarea relaţiei cu autorităţile;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire Regulament Intern.#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire Registrul de Evidenţă al salariaţilor (ReGES);#/\n\n'+
        '#style{"fontWeight":"bold", "fontSize": 22}Asigurarea serviciilor de salarizare#/\n\n'+
        '#style{"marginLeft":"25px"}•Întocmire stat de salariu;#/\n'+
        '#style{"marginLeft":"25px"}•Document justificativ de înregistrare în contabilitate;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire stat individual de salariu (“fluturaşi”);#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire şi depunere declaraţii privind obligaţiile aferente drepturilor salariale şi de personal;#/\n'+
        '#style{"marginLeft":"25px"}•Întocmire adeverinţe de venit(Angajatorii/Plătitorii de venituri din salarii şi asimilate salariilor au obligaţia depunerii fişelor fiscale în format electronic);#/\n',
        information2:'#style{"fontWeight":"bold", "fontSize": 22}Asistenţă la controalele Instituţiilor de drept#/\n\n'+
        '#style{"marginLeft":"25px"}•Ghidarea pe toată perioada controlului, facilitând acest proces şi prin comunicarea directă cu autorităţile în numele dumneavoastră, pentru a fi siguri că inspecţia se desfăşoară într-o manieră corectă, precum şi pentru a limita eventualele amenzi, penalităţi şi dobânzi aferente;#/\n'+
        '#style{"marginLeft":"25px"}•Evaluarea procedurilor în domeniul resurselor umane şi investigarea situaţiei de fapt, pregătind argumentele ce pot fi aduse în favoarea poziţiei adoptate de dumneavoastră;#/\n'+
        '#style{"marginLeft":"25px"}•Estimarea punctelor forte şi punctelor slabe în abordarea dumneavoastră faţă de aspectele procedurilor în cauză, cu scopul de a evalua şansele de reuşită în eventualitatea unui proces cu autorităţile fiscale române.#/\n',
        image:hr,
        main_icon:<VscHorizontalRule></VscHorizontalRule>
    },
];
