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
                  <NavLink to="/categoria/2"> Hombre </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3"> Mujer </NavLink>
                </li>
                
                <li>
                  Cual es mi Talle?
                </li>
                
                <li>
                  Como Comprar?
                </li>
                
                <li>
                  Institucional
                </li>
                
                <li>
                  Contacto
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar