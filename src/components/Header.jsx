function Header({ setFiltered, setFilterValue, setCurrentId }) {
    function filterNotes(e) {
        let value = e.target.value.trim().toLowerCase();
        setFiltered(true);
        setFilterValue(value);
        setCurrentId(null);

        if (value === "") {
            setFiltered(false);
        }
    }
    return (
        <header>
            <div>
                <h1>Notes</h1>

                <input type="text" placeholder="Search by title..." onChange={filterNotes} />
            </div>
        </header>
    )
}

export default Header;