function Header({ setFiltered, setFilterValue, setCurrentId, setIsEdited, handleUntitledNotes }) {
    function filterNotes(e) {
        let value = e.target.value.trim().toLowerCase();
        setFiltered(true);
        setFilterValue(value);
        setCurrentId(null);

        if (value === "") {
            setFiltered(false);
            setIsEdited(false);
            handleUntitledNotes();
        }
    }
    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">Notes</h1>
                <input className="header__input" type="text" placeholder="Search by title..." onChange={filterNotes} />
            </div>
        </header>
    )
}

export default Header;