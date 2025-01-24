import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Note from "./Note";

function Sidebar() {
    const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [currentId, setCurrentId] = useState(null);
    const [note, setNote] = useState({
        content: "Write your thoughts here...",
    });
    const [filtered, setFiltered] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [nextId, setNextId] = useState(JSON.parse(localStorage.getItem("nextId")) || 1);
    const [filterValue, setFilterValue] = useState("");

    function updateNoteStates(newState) {
        if (newState.currentId !== undefined) setCurrentId(newState.currentId);
        if (newState.isEdited !== undefined) setIsEdited(newState.isEdited);
        if (newState.filterValue !== undefined) setFilterValue(newState.filterValue);
        if (newState.filtered !== undefined) setFiltered(newState.filtered);
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(allNotes));
    }, [allNotes]);

    useEffect(() => {
        localStorage.setItem("nextId", JSON.stringify(nextId));
    }, [nextId]);

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
            setAllNotes([...allNotes, { ...newNote }]);
            setCurrentId(null);
            const newId = nextId + 1;
            setNextId(newId);
        }
    }

    function noteEditedId(id) {
        setCurrentId(id);
    }

    function fillInput(e) {
        const { name, value } = e.target;
        setAllNotes(prevNotes => {
            const updatedNotes = prevNotes.map(note =>
                note.id === currentId ? { ...note, [name]: value } : note
            );
            return updatedNotes;
        });
    }

    function deleteNote() {
        const actualEditedNote = allNotes.filter(note => note.id !== currentId);;
        setAllNotes(actualEditedNote);
        setCurrentId(null);
    }
    return (
        <>
            {isEdited ? null :
                <Header
                    setFiltered={setFiltered}
                    setFilterValue={setFilterValue}
                    setCurrentId={setCurrentId}
                    isEdited={isEdited} />
            }

            {isEdited ? null :
                <aside>
                    {filtered ? null : <button onClick={createNote}>Create new note</button>}

                    <ul>
                        <Note
                            setIsEdited={setIsEdited}
                            allNotes={allNotes}
                            filterValue={filterValue}
                            noteEditedId={noteEditedId}
                            setCurrentId={setCurrentId}
                        />
                    </ul>
                </aside>
            }
            <Form
                allNotes={allNotes}
                currentId={currentId}
                fillInput={fillInput}
                deleteNote={deleteNote}
                isEdited={isEdited}
                updateNoteStates={updateNoteStates}
                setAllNotes={setAllNotes}
            />
        </>
    )
}

export default Sidebar;