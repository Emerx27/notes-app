function Form({allNotes, currentId, fillInput, deleteNote}) {
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

export default Form