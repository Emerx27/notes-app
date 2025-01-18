import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Note from "./Note";

function Sidebar() {
    const [allNotes, setAllNotes] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [note, setNote] = useState({
        content: "Write your thoughts here...",
    });
    const [filteredNotes, setFilteredNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [filtered, isFiltered] = useState(false);
    const [nextId, setNextId] = useState(JSON.parse(localStorage.getItem("nextId")) || 1);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(filteredNotes));
        localStorage.setItem("notesOr", JSON.stringify(allNotes));
    }, [filteredNotes, allNotes]);

    useEffect(() => {
        localStorage.setItem("nextId", JSON.stringify(nextId));
    }, [createNote]);

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
        if (!filtered) {
            setFilteredNotes(prev => {
                const addNotes = [...prev, newNote];
                setAllNotes(addNotes);
                return addNotes;
            });
            setCurrentId(nextId);
            const newId = nextId + 1;
            setNextId(newId);
        }
    }

    function noteEditedId(id) {
        setCurrentId(id);
    }

    function fillInput(e) {
        const { name, value } = e.target;
        setFilteredNotes(prevNotes => {
            const updatedNotes = prevNotes.map(note =>
                note.id === currentId ? { ...note, [name]: value } : note
            );
            setAllNotes(updatedNotes);
            return updatedNotes;
        });
    }

    function deleteNote() {
        const actualEditedNote = filteredNotes.filter(note => note.id !== currentId);
        setFilteredNotes(actualEditedNote);
        setAllNotes(actualEditedNote);
        setCurrentId(null);
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
                    <Note
                        filteredNotes={filteredNotes}
                        noteEditedId={noteEditedId}
                    />
                </ul>

                <Form
                    filteredNotes={filteredNotes}
                    currentId={currentId}
                    fillInput={fillInput}
                    deleteNote={deleteNote}
                />
            </aside>
        </>
    )
}

export default Sidebar;