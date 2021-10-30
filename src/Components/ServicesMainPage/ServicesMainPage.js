import React from "react";
import "./ServicesMainPage.css";

import { TiArrowSortedUp } from "react-icons/ti";

import {
    dropdownItemsLeft,
    dropdownItemsRight,
} from "../../Components/NavigationBarData";

let menuItems = [].concat(dropdownItemsLeft).concat(dropdownItemsRight);

export default function ServicesMainPage() {
    return (
        <div className="services-page-container">
            <div className="cards-container">
                <div className="title-section">
                    <TiArrowSortedUp
                        color={"white"}
                        size={60}
                        style={{
                            position: "absolute",
                            right: -26,
                            transform: "rotate(-90deg)",
                            top: "calc(50% - 30px)",
                        }}
                    ></TiArrowSortedUp>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "auto",
                        }}
                    >
                        <h2 style={{ color: "white", margin: "auto" }}>
                            Serviciile noastre
                        </h2>
                        <p
                            style={{
                                color: "white",
                                margin: "10px 20px auto",
                                textAlign: "center",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Eget mauris pharetra et
                            ultrices neque ornare aenean euismod elementum. Amet
                            dictum sit amet justo. Pretium quam vulputate
                            dignissim suspendisse in est.
                        </p>
                    </div>
                    <button className="our-services-btn"
                        style={{
                            marginBottom: "auto",
                            width: "150px",
                            height: "40px",
                            backgroundColor: "orange",
                           
                            borderRadius: "20px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "white",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Toate serviciile
                    </button>
                </div>

                <div className="card-section">
                    <CardGrid></CardGrid>
                </div>
            </div>
        </div>
    );
}

const CardGrid = () => {
    return dropdownItemsLeft.map((data, index) => {
        return <Card cardData={data}></Card>;
    });
};

const Card = ({ cardData }) => {
    return (<div className="card-wrapper" style={cardData.style}>
        <div style={{display:'flex', flexDirection:'row'}}> 
            <img src={cardData.card_icon} style={{width:'70px', marginTop:'10px'}}></img>
            <h3 style={{marginLeft:'10px',height:'50px' }}>{cardData.name}</h3> 
        </div>
         <div className="key-words">
             <div className="key-word-card" style={{backgroundColor:'#a49c94', color:'white'}}>{cardData.keyword1}</div>
             <div className="key-word-card" 
                style={{marginLeft:'10px', backgroundColor:'#c9a4a0'}}>{cardData.keyword2}</div>
         </div>
         <div className="key-word-card" style={{marginLeft:'10px', marginTop:'2px', marginBottom:'-20px', backgroundColor:'#a891a0', width:'fit-content'}}>{cardData.keyword3}</div>
        </div>);
        
};


