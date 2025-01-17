import { useState } from "react";
let nextId = 1;

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [note, setNote] = useState({
        id: 1,
        title: "Title",
        tags: [],
        content: "Write your thoughts here..."
    });

    function createNote() {
        const newNote = { ...note, id: nextId};
        setAllNotes([...allNotes, newNote]);
        nextId++;
    }
    
    return (
        <aside>
            <button onClick={createNote}>Create new note</button>
        </aside>
    )
}

export default Sidebar;