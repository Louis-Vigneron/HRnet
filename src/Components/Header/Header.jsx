import logo from '../../Assets/HRnet.png'
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo de HRnet" />

            <nav className="header__nav">
                <NavLink to="/" className={({ isActive }) => {
                    return "header__nav__link header__nav__link" + (isActive ? "--line" : "")
                }}>
                    Create Employee</NavLink>
                <NavLink to="/employees" className={({ isActive }) => {
                    return "header__nav__link header__nav__link" + (isActive ? "--line" : "")
                }}>
                    Current Employees</NavLink>
            </nav>
        </header>
    )
}