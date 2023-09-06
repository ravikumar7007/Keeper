import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes([...notes, note]);
  }
  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, ind) => (
        <Note
          key={ind}
          id={ind}
          title={note.title}
          content={note.content}
          handleDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
