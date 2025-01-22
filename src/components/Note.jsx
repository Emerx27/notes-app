function Note({allNotes, noteEditedId, filterValue}) {
    const filteredNotes = allNotes.filter(note => note.title.toLowerCase().includes(filterValue));
    return filteredNotes.map(note => (
        <li key={note.id}>
            <article onClick={() => noteEditedId(note.id)}>
                <h3>{note.title}</h3>
                <p>Created: {note.date}</p>
            </article>
        </li>
    ));
}

export default Note