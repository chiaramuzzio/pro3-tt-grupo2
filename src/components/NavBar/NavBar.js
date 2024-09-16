import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav className="menu">
                <Link to="/" className="cinepedia">
                    <h1 className='cinepedia'>CINEPEDIA</h1>
                </Link>
                <Link to="/favoritos" className="navegador">Favoritos</Link>
                <Link to="/generos" className="navegador">Géneros</Link>
            </nav>
        </>
    );
}

export default NavBar