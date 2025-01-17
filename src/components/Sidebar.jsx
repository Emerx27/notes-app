import { useState } from "react";
let nextId = 1;

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [currentId, setCurrentId] = useState(null)
    const [note, setNote] = useState({
        content: "Write your thoughts here...",
    });

    function createNote() {
        const title = `Note ${nextId}`;
        const day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        const year = new Date().getFullYear();
        const date = `${day} / ${month} / ${year}`;
        const newNote = { ...note, title, id: nextId, date};
        setAllNotes([...allNotes, newNote]);
        setCurrentId(nextId);
        nextId++;
    }

    function renderTask() {
        return allNotes.map(note => (
            <li key={note.id}>
                <article onClick={() => noteEditedId(note.id)}>
                    <h3>{note.title}</h3>
                    <p>Created: {note.date}</p>
                </article>
            </li>
        ));
    }

    function noteEditedId(id) {
        setCurrentId(id);
    }

    function editNote() {
        const actualEditedNote = allNotes.filter(note => note.id === currentId);
        return actualEditedNote.map(note => (
            <form key={note.id}>
                <div>
                    <input type="text" value={note.title} onChange={fillInput} name="title" />

                    <textarea value={note.content} onChange={fillInput} name="content"></textarea>
                </div>

                <button onClick={deleteNote}>Delete note</button>
            </form>
        ))
    }

    function fillInput(e) {
        const { name, value } = e.target;
        setAllNotes(prevNotes => prevNotes.map(note =>
            note.id === currentId ? { ...note, [name]: value } : note
        ));
    }

    function deleteNote() {
        const actualEditedNote = allNotes.filter(note => note.id !== currentId);
        setAllNotes(actualEditedNote);
    }
    return (
        <aside>
            <button onClick={createNote}>Create new note</button>

            <ul>
                {renderTask()}
            </ul>

            {editNote()}
        </aside>
    )
}

export default Sidebar;