import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(props) {

  const [arrOfNotes, setArrayOfNotes] = useState([])

function addNote(note) {
setArrayOfNotes((prevValues => {
  return ([...prevValues, note])
}))
console.log(arrOfNotes)
}

function deleteNote(noteNum) {
  setArrayOfNotes(arrOfNotes.filter((element, index)=> {
    return ( index !== noteNum)
  }))
}



  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
      {arrOfNotes.map((note,index) => {
        return <Note
        key={index}
        index={index}
        title={note.title}
        content={note.content}
        handleDelete={deleteNote}
        />
      })}
  
      <Footer />
    </div>
  );
}

export default App;
