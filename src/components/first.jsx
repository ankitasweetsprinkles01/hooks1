import React,{useState} from "react";
 function First(){
    let [Age,setAge] = React.useState(0);
    let increaseAge = () => setAge(Age+1);

    return(
        <div>
            I AM {Age} YEARS OLD!
            <button onClick={increaseAge}>INCREASE</button>
        </div>
    );

 }
 export default First;