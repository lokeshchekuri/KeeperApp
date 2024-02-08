import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        });
        props.onAdd(note);
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
