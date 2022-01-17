 

import React , {useState} from "react";
import Header from "./Header";
import Note from  "./Note";
import Footer from "./Footer";
 
import CreateArea from "./CreateArea";

function App() {

  const [notes , setNotes] = useState([]);

  function addNote(newnote){

    setNotes( prevNotes => {
      return [ ...prevNotes , newnote];
    })

  }

  function deleteNote(id){
    setNotes( prevNotes => {
      return (prevNotes.filter( (noteItem , index)=>  {
        return index !== id ;

      })
      );
    })
  }


  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {addNote}
      />

      {
        notes.map( (notesItem , index ) => {
          return (<Note 
           id = {index}
           key = {index}
           title = {notesItem.title}
           content  = {notesItem.content}
           onDelete = {deleteNote}
          />);
        })
      }

      
    
      <Footer />
    </div>
  );
}

export default App;
