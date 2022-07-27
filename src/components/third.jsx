import React,{useState} from "react";

function Third(){
    let[state,setState] = React.useState({
      Age:21,
      Siblings:0  
    });
    let {Age,Siblings} = state;

    let changeHealth = (val) => {
        setState({
            Age:Age+1,
            Siblings:Siblings+1
        });
    };

    return(
        <div>
              I AM {Age} YEARS OLD!I HAVE {Siblings}  NO OF SIBLINGS!
            <button onClick={changeHealth}>CHANGE HEALTH</button>
        </div>
    )
}
export default Third;