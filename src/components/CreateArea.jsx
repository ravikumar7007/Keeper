import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }
  function handleClick(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function handleExand() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        {expand ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onChange={handleChange}
          onClick={handleExand}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={expand}>
          <Fab color="primary" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
