function Header({allNotes, setAllNotes, isFiltered}) {
    function filterNotes(e) {
        const value = e.target.value;
        isFiltered(true);

        if(value.trim() === "") {
            isFiltered(false);
        }

        const filteredNotes = allNotes.filter(note => note.title.toLowerCase().includes(value));
        setAllNotes(filteredNotes);
    }
    return (
        <header>
            <div>
                <h1>Notes</h1>

                <input type="text" placeholder="Search by title..." onChange={filterNotes}/>
            </div>
        </header>
    )
}

export default Header;