import { useState } from "react";
let nextId = 1;

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [note, setNote] = useState({
        id: 1,
        title: "Title",
        tags: ["Thoughts"],
        content: "Write your thoughts here...",
    });

    function createNote() {
        const day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        if(month < 10) {
            month = `0${month}`;
        }
        const year = new Date().getFullYear();
        const date = `${day} / ${month} / ${year}`;
        const newNote = { ...note, id: nextId, date};
        setAllNotes([...allNotes, newNote]);
        nextId++;
    }

    function renderTask() {
        return allNotes.map(note => (
            <li key={note.id}>
                <article>
                    <h3>{note.title}</h3>
                    {note.tags.map(tag => <p key={note.id}>{tag}</p>)}
                    <p>Created: {note.date}</p>
                </article>
            </li>
        ));
    }

    return (
        <aside>
            <button onClick={createNote}>Create new note</button>

            <ul>
                {renderTask()}
            </ul>
        </aside>
    )
}

export default Sidebar;