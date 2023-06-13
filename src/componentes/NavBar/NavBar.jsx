import CartWidget from "../CartWidget/CartWidget.jsx"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>EXPRESS</h1>

        <nav>
            <ul>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Cual es mi Talle?</li>
                <li>Como Comprar?</li>
                <li>Institucional</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar