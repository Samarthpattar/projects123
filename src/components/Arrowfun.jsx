import React from "react";


function Arrowfun(){
    function shoot(){
        alert("Great shoot")
    }

    return(
        <button onClick={shoot}>Take the shoot</button>
    );
   

}
export default Arrowfun