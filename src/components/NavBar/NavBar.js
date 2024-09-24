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
                <Link to="/favorites" className="navegador">Favoritos</Link>
                <Link to="/see-more/category/populares" className="navegador">Populares</Link>
                <Link to="/see-more/category/estrenos" className="navegador">Estrenos</Link>
            </nav>
        </>
    );
}

export default NavBar