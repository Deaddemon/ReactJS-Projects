import React , {useState} from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";


var count=0;

function App()
{

    // const state = React.useState(0);

    const  [count , setCount] = useState(0);


//     function increase(){
//     // count++;
//     set
 

// }
return(

    <div className = "container">
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}> + </button>
    </div>

)

}
export default App;


function App2(){

    setInterval(updateTime); //without clicking it will show or we can say render time
    let time= new Date().toLocaleTimeString();

    const[ tim , setTim] = useState(time);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTim(newTime);
    }



    return (

        <div className = "container">
            <h1>{time}</h1>
            <button onClick={updateTime}> + </button>
        </div>
    
    )

}
 
