function Note({filteredNotes, noteEditedId}) {
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