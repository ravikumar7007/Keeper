import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleDelete() {
    props.handleDelete(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
