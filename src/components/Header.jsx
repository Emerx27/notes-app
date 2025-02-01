import { useContext, useState } from "react";
import Menu from "./Menu";
import { ScreenContext } from "../contexts/ScreenContext";

function Header({ setFiltered, setFilterValue, setCurrentId, setIsEdited, handleUntitledNotes, filterValue }) {
    const [isMenuOpened, setMenuIsOpened] = useState(false);
    const screenSize = useContext(ScreenContext);

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
                <div className="header__head">
                    <h1 className="header__title">Notes</h1>
                    {screenSize < 768 ? <span onClick={() => setMenuIsOpened(prev => !prev)} className="header__btn material-symbols-outlined">
                        more_vert
                    </span> : null}
                </div>

                <div className="header__div">
                    <input className="header__input" value={filterValue} type="text" placeholder="Search by title..." onChange={filterNotes} />

                    {screenSize > 768 ? <span onClick={() => setMenuIsOpened(prev => !prev)} className="header__btn material-symbols-outlined">
                        more_vert
                    </span> : null}
                    {isMenuOpened && <Menu />}
                </div>
            </div>
        </header>
    )
}

export default Header;