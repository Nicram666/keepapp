import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpand] = useState(false);

  function updateNote(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);

    if (name === "title") {
      setNoteContent((prevValues) => {
        return {
          title: value,
          content: prevValues.content,
        };
      });
    } else if (name === "content") {
      setNoteContent((prevValues) => {
        return {
          title: prevValues.title,
          content: value,
        };
      });
    }
  }

  function setNote(event) {
    props.onAdd(noteContent);

    setNoteContent({ title: "", content: "" });
    setExpand(false);
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={updateNote}
            name="title"
            placeholder="Title"
            value={noteContent.title}
          />
        ) : null}

        <textarea
          onClick={expand}
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={noteContent.content}
        />
        <Zoom in={true}>
          <button onClick={setNote}>
            {" "}
            <AddIcon>NPM</AddIcon>{" "}
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
