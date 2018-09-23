import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { config } from './Config/config';
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/functions";

class App extends Component {

  state = {
    // notes: [
    //   { id: 1, noteContent: "Note 1"},
    //   { id: 2, noteContent: "Note 2"},
    //   { id: 3, noteContent: "Note 3"}
    // ]
    notes: []
  }

  addNote = note => {
    if ( note.length ) {
      const newNoteId = this.state.notes.length+1
      const newNote = {
        id: newNoteId,
        noteContent: note
      }
      this.setState({ 
        notes: [...this.state.notes, newNote]
      })
    }
  }

  componentDidMount() {

    const fire = firebase.initializeApp(config);
    console.log("fire: ",fire)

    let fireDBRef = fire.database().ref().child("notes");
    console.log("fireDBRef: ",fireDBRef)

  }

  render() {
    return (
      <div className="App">

        <div className="notesHeader">
          <h1>React & Firebase Todo List</h1>
        </div>

        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note key={note.id} noteId={note.id} noteContent={note.noteContent} />
              )
            })
          }
        </div>

        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
          
      </div>
    );
  }
}

export default App;
