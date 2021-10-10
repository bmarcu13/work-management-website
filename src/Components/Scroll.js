import React from "react";

const Scroll = (props) =>{
    return(
        <div className="scroll" style={{overflowY:'scroll', height:'500px', border:'1px solid grey'}}>
            {props.children}
        </div>
    );
};
export default Scroll;