import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import { notes } from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
