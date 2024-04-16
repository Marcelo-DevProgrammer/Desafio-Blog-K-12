import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Certifique-se de criar este arquivo CSS com os estilos fornecidos

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">Blog K-12</div>
      <div className="navbar__right">
        <Link to="/" className="navbar__link">
          <button className="navbar__button">Posts</button>
        </Link>
        <Link to="/login" className="navbar__link">
          <button className="navbar__button navbar__button--login">Login</button>
        </Link>
        <Link to="/singin" className="navbar__link">
          <button className="navbar__button navbar__button--signup">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
