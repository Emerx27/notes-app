function Form({
    allNotes, 
    currentId, 
    fillInput, 
    deleteNote, 
    isEdited,
    updateNoteStates,
    setAllNotes
    }) {
    function handleStates() {
        updateNoteStates({ currentId: null, isEdited: false, filterValue: "", filtered: false});
    }

    function handleTitle() {
        setAllNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === currentId && note.title === ""
                    ? { ...note, title: `Untitled Note ${currentId}` }
                    : note
            )
        );
    }

    const actualEditedNote = allNotes.filter(note => note.id === currentId);
    return actualEditedNote.map(note => (
        <form onSubmit={e => e.preventDefault()} key={note.id}>
            <div>
                <input type="text" value={note.title} onChange={fillInput} name="title" />

                <textarea value={note.content} onChange={fillInput} name="content"></textarea>
            </div>

            <button type="button" onClick={() => {deleteNote(), handleStates()}}>Delete note</button>
            {isEdited ? <button type="button" onClick={() => {handleStates(), handleTitle()}}>Save changes</button>  : null}
        </form>
    ))
}

export default Form