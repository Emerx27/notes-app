function Header({setFiltered, setFilterValue, setCurrentId, isEdited}) {
    function filterNotes(e) {
        let value = e.target.value.trim().toLowerCase();
        setFiltered(true);
        setFilterValue(value);
        setCurrentId(null);

        if(value === "") {
            setFiltered(false);
        }
    }
    if(!isEdited) {
        return (
            <header>
                <div>
                    <h1>Notes</h1>
    
                    <input type="text" placeholder="Search by title..." onChange={filterNotes}/>
                </div>
            </header>
        )
    } else {
        return null;
    }
}

export default Header;