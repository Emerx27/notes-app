function Header({ setFiltered, setFilterValue, setCurrentId, setIsEdited, handleUntitledNotes, filterValue }) {
    function filterNotes(e) {
        let value = e.target.value.trim().toLowerCase();
        setFiltered(true);
        setFilterValue(value);
        setCurrentId(null);
        setIsEdited(false);

        if (value === "") {
            setFiltered(false);
            handleUntitledNotes();
        }
    }
    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">Notes</h1>
                <input className="header__input" value={filterValue} type="text" placeholder="Search by title..." onChange={filterNotes} />
            </div>
        </header>
    )
}

export default Header;