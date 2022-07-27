import React,{useState} from "react";

function Fourth(){
    const[count,setCount] = useState(0);
    return(
        <div>
            COUNT IS {count}
            <div>
           < button onClick={()=> setCount(count+1)}>INCREASE COUNT</button>
           < button onClick={()=> setCount(count-1)}>DECREASE COUNT</button>
           < button onClick={()=> setCount(0)}>RESET</button>

            </div>
        </div>
    )
}
export default Fourth;