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
        updateNoteStates({ currentId: null, isEdited: false, filterValue: "", filtered: false });
    }

    function handleTitle() {
        setAllNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === currentId && note.title === ""
                    ? { ...note, title: `Untitled ${currentId}` }
                    : note
            )
        );
    }

    const actualEditedNote = allNotes.filter(note => note.id === currentId);
    return actualEditedNote.map(note => (
        <form className="form" onSubmit={e => e.preventDefault()} key={note.id}>
            <div className="form__content">
                <input className="form__content-input" type="text" value={note.title} onChange={fillInput} name="title" />

                <textarea className="form__content-text" value={note.content} onChange={fillInput} name="content"></textarea>
            </div>

            <div className="form__buttons">
                <button className="form__buttons-delete" type="button" onClick={() => { deleteNote(), handleStates() }}>Delete note</button>
                {isEdited ? <button className="form__buttons-save" type="button" onClick={() => { handleStates(), handleTitle() }}>Save changes</button> : null}
            </div>
        </form>
    ))
}

export default Form