import { useState } from "react";
import Header from "./Header";
let nextId = 1;

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [note, setNote] = useState({
        content: "Write your thoughts here...",
    });
    const [filteredNotes, setFilteredNotes] = useState(allNotes);
    const [filtered, isFiltered] = useState(false);

    function createNote() {
        const title = `Note ${nextId}`;
        const day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        const year = new Date().getFullYear();
        const date = `${day} / ${month} / ${year}`;
        const newNote = { ...note, title, id: nextId, date };
        if(!filtered) {
            setFilteredNotes(prev => {
                const addNotes = [...prev, newNote];
                setAllNotes(addNotes);
                return addNotes;
            });
            setCurrentId(nextId);
            nextId++;
        }
    }

    function renderTask() {
        return filteredNotes.map(note => (
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
        const actualEditedNote = filteredNotes.filter(note => note.id === currentId);
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
        setFilteredNotes(prevNotes => prevNotes.map(note =>
            note.id === currentId ? { ...note, [name]: value } : note
        ));

        console.log(allNotes)
    }

    function deleteNote() {
        const actualEditedNote = filteredNotes.filter(note => note.id !== currentId);
        setFilteredNotes(actualEditedNote);
        setAllNotes(actualEditedNote);
    }
    return (
        <>
            <Header 
                allNotes={allNotes}
                setAllNotes={setFilteredNotes}
                isFiltered={isFiltered}
            />
            <aside>
                <button onClick={createNote}>Create new note</button>

                <ul>
                    {renderTask()}
                </ul>

                {editNote()}
            </aside>
        </>
    )
}

export default Sidebar;