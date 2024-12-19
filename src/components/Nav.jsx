import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/nav.css'
function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav className="navbar">
                <div className="navbar-container">
                    <h1 className="navbar-logo">Proyecto agtech L47</h1>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? '✕' : '☰'}
                    </div>
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/SobreNosotros" className="nav-links">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contactos" className="nav-links">Contacto</Link>
                        </li>
                    </ul>
                </div>
    </nav>
  )
}

export default Nav