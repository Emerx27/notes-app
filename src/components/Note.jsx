function Note({ allNotes, noteEditedId, filterValue, setIsEdited, handleUntitledNotes }) {
    const filteredNotes = allNotes.filter(note => note.title.toLowerCase().includes(filterValue));
    return filteredNotes.map(note => (
        <li className="sidebar__list-note" key={note.id} onClick={() => {
            noteEditedId(note.id)
            setIsEdited(true)
            handleUntitledNotes()
        }}>
            <article className="sidebar__list-note-content">
                <h3 className="sidebar__list-note-title">{note.title}</h3>
                <p className="sidebar__list-note-date">Created: {note.date}</p>
            </article>
        </li>
    ));
}

export default Note