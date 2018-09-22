import React, { Component } from 'react'
import './NoteForm.css';

class NoteForm extends Component {

    state = {
        newNoteContent: ""
    }

    handleUserInput = e => {
        this.setState({
            newNoteContent: e.target.value
        })
    }

    writeNote = () => {
        this.props.addNote(this.state.newNoteContent)
        this.setState({
            newNoteContent: ""
        })
    }

    render() {
        return (
            <div className="formWrapper">
                <input className="noteInput"
                    placeholder="Enter your note..." 
                    value={this.state.newNoteContent} 
                    onChange={this.handleUserInput} />

                <button className="noteButton"
                    onClick={this.writeNote}>
                    Add note
                </button>
            </div>
        )
    }
}


export default NoteForm;