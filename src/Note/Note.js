import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

class Note extends Component {
    
    state = {
        message: "hi, this is a message",
        noteContent: this.props.noteContent,
        noteId: this.props.noteId
    }

    render() {
        console.log(this.state)
        const {noteContent} = this.state; 

        return (
            <div className="note fade-in">
                <p className="noteContent">{ noteContent} </p>
            </div>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string,
}

export default Note;
