function Form({
    allNotes, 
    currentId, 
    fillInput, 
    deleteNote, 
    isEdited,
    updateNoteStates
    }) {
    function handleStates() {
        updateNoteStates({ currentId: null, isEdited: false, filterValue: "", filtered: false});
    }

    const actualEditedNote = allNotes.filter(note => note.id === currentId);
    return actualEditedNote.map(note => (
        <form onSubmit={e => e.preventDefault()} key={note.id}>
            <div>
                <input type="text" value={note.title} onChange={fillInput} name="title" />

                <textarea value={note.content} onChange={fillInput} name="content"></textarea>
            </div>

            <button onClick={() => {deleteNote(), handleStates()}}>Delete note</button>
            {isEdited ? <button onClick={handleStates}>Save changes</button>  : null}
        </form>
    ))
}

export default Form