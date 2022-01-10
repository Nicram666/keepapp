import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {

function handleDeleteButton() {
  props.handleDelete(props.index)
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteButton} > <DeleteForeverIcon/> </button>
    </div>
  );
}


export default Note;
