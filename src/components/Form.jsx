function Form({
    allNotes,
    currentId,
    fillInput,
    deleteNote,
    isEdited,
    updateNoteStates,
    handleUntitledNotes
}) {
    function handleStates() {
        updateNoteStates({ currentId: null, isEdited: false, filterValue: "", filtered: false });
    }

    const actualEditedNote = allNotes.filter(note => note.id === currentId);
    return actualEditedNote.map(note => (
        <form className="form" onSubmit={e => e.preventDefault()} key={note.id}>
            <div className="form__content">
            <div className="form__section">
                <input className="form__section-input" type="text" value={note.title} onChange={fillInput} name="title" />

                <textarea className="form__section-text" value={note.content} onChange={fillInput} name="content"></textarea>
            </div>

            <div className="form__buttons">
                <button className="form__buttons-btn form__buttons-btn--delete" type="button" onClick={() => { deleteNote(), handleStates() }}>Delete note</button>
                {isEdited ? <button className="form__buttons-btn form__buttons-btn--save" type="button" onClick={() => { handleStates(), handleUntitledNotes() }}>Save changes</button> : null}
            </div>
            </div>
        </form>
    ))
}

export default Form