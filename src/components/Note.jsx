import React from "react";

function Note(props) {
  function handleDelete() {
    props.handleDelete(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
