import React from "react";
import './App.css'
import { nanoid } from "nanoid"
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data"
import Split from "react-split"


function App() {

  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])
  const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "")

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  function createNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {
    // we put recently update to the top
    setNotes(oldNotes => {
      const newNotes = []
      for (let i = 0; i < oldNotes.length; i++) {
        if (oldNotes[i].id === currentNoteId) {
          newNotes.unshift({ ...oldNotes[i], body: text })
        } else {
          newNotes.push(oldNotes[i])
        }
      }

      return newNotes
    })

  }

  function findCurrentNote() {
    return notes.find(note => { return note.id === currentNoteId }) || notes[0]
  }



  return (
    <main>
      {
        notes.length > 0 ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNote}
            />
            {
              currentNoteId && notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>No notes</h1>
            <button className="first-note"
              onClick={createNote}>
              Create new note
            </button>
          </div>
      }
    </main>
  )
}

export default App;
