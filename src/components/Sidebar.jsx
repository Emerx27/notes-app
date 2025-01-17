import { useState } from "react";

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [note, setNote] = useState({
        id: 1,
        title: "Title",
        tags: [],
        content: "Write your thoughts here..."
    });

    function createNote() {
        const newNote = { ...note, id: note.id + 1};
        setAllNotes([...allNotes, newNote]);
    }
    
    return (
        <aside>
            <button onClick={createNote}>Create new note</button>
        </aside>
    )
}

export default Sidebar;