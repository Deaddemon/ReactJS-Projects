import React ,{useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

      
    
    const [items, setitems] = useState([]);

    
    
    
    function addItem(inputText){
        setitems( (prevItems) => {
            return [...prevItems , inputText];
        });

      
                
    }

    function deleteItem(id){
        setitems( prevItems => {
           return prevItems.filter(
               (item , index) => {
                   return index!==id ;
               }
           )
        })
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd = {addItem}
      />
      <div>
        <ul>
        
        { items.map( (todo , index) => 
             ( <ToDoItem  
                key = {index}
                id={index}
              text = {todo}
              onChecked={deleteItem}
              
              />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

// uuid