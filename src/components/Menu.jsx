function Menu() {
    return (
        <div className="header__menu">
            <span className="header__menu-icon header__menu-icon--dark material-symbols-outlined">
                light_mode
            </span>
            
            <span className="header__menu-switch"></span>

            <span className="header__menu-icon header__menu-icon--dark material-symbols-outlined">
                dark_mode
            </span>
        </div>
    )
}

export default Menu;