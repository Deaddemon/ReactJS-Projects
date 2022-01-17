import React  from "react";

function ToDoItem(props){
 

    


    return (<div onClick = {() =>  {
        props.onChecked(props.id);
    }}>
        <li>{props.text}</li>
        </div>)


}

export default ToDoItem;


// for line- through
// function ToDoItem(props){
 

//     const [isDone, setisDone] = useState(false)
//     function handleClick(){

//         setisDone( prevValue => {
//             return (!prevValue)
//         })

//     }


//     return (<div onClick = {handleClick}>
//         <li style= { {textDecoration: isDone 
//             && "line-through "}}>{props.text}</li>
//         </div>)


// }
