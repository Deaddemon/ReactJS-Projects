import React from "react";

function App(){

    const [name , setName ] = useState("");
    function handleChange(event){
        setName(event.target.value);
    }
    return (
        <div>
            <h1>hello {name}</h1>
            <input 
            onChange={handleChange}
            type = "text"
            placeholder="what's your name?"
            value = {name}
            />
        </div>
    )
}