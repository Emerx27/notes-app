import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Menu() {
    const {toggleDarkMode, isDarkMode} = useContext(DarkModeContext);

    return (
        <div className="header__menu">
            <div className="header__menu-content">
                <span className="header__menu-icon header__menu-icon--dark material-symbols-outlined">
                    light_mode
                </span>

                <span onClick={toggleDarkMode} className={`header__menu-switch ${isDarkMode ? "header__menu-switch--dark" : "header__menu-switch--light"}`}></span>

                <span className="header__menu-icon header__menu-icon--dark material-symbols-outlined">
                    dark_mode
                </span>
            </div>
        </div>
    )
}

export default Menu;