import React from "react";
 
//insideapp.jsx

const [headingText, setheadingText] = useState("hello");
const [MouseOver, setMouseOver] = useState(false);

function handleClick(){
      setheadingText("submitted");

}

function handleMouseOver(){
    setMouseOver(true);



}
function handleMouseOut(){
    setMouseOver(false);
}
function App(){
    return(
        <div>
        
        <h1>{headingText}</h1>
        <input type = "text" placeholder="what's your name"/>
        <button 
        style ={ {backgroundColor: MouseOver ? "black" : "white"}}
        onClick={handleClick} 
        onMouseOver={ handleMouseOver }
        onMouseOut = { handleMouseOut}
        >submit</button>

    </div>
    );

     
}

export default App;