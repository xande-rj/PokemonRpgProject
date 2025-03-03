import { useState } from 'react';
import { Link } from 'react-router'; // Use react-router-dom se estiver usando essa versão
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="navbar">
      <div className="navbar-header">
        
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <Link to="/">Berries</Link>
        <Link to="/nature">Nature</Link>
        <Link to="/pokebolas">Pokebolas</Link>
        <Link to="/meditens">Med Itens</Link>
        <Link to="/holditens">Hold Itens</Link>
        <Link to="/classes">Classes</Link>
  
      </div>
    </nav>
  );
};

export default Navbar;
