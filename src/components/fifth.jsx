import React,{useEffect, useState} from "react";
 function Five(){
    const[age,setAge] = useState(0);
    let increaseAge = ()=> setAge(age+1)
    useEffect(()=>{
        document.title = `YOU ARE ${age} YEARS OLD`;
    })

    return(
        <div>
            <p>REFER TO THE BROWSER TITLE TO SEE THE AGE</p>
            <button onClick={increaseAge}>INCREASE AGE</button>
        </div>
    )
 }
 export default Five;