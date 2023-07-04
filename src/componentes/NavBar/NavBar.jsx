import CartWidget from "../CartWidget/CartWidget.jsx"
import {Link, NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>EXPRESS</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/2" > Hombre </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3"> Mujer </NavLink>
                </li>
                
                <li>
                <NavLink to="/"> Cual es mi Talle? </NavLink>
                </li>
                
                <li>
                <NavLink to="/"> Como Comprar? </NavLink>
                </li>
                
                <li>
                <NavLink to="/"> Institucional </NavLink>
                </li>
                
                <li>
                  <NavLink to="/"> Contacto </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar