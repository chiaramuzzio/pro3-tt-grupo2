import React, { Component } from 'react';
import Peli from "../Peli/Peli"
import {Link} from "react-router-dom"
import "./PeliGrid.css";
import Favorito from "../../modules/favorito";


class PeliGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            favoritos: Favorito.buscar()
        };
    }

    render() {
        const {todas, titulo, peliculas, boton} = this.props

        return (
            <>
                <article className="categoria">
                    <div className="divTitulo">
                        <h3 className='titulo'>{titulo}</h3>  
                        {boton? <Link className="buttonTodas" to={todas}>Ver Todas</Link>: ""}
                    </div>
                    <div className="portadaGrid">
                        {peliculas.map((pelicula, idx) => (  
                            <Peli key={idx} pelicula={pelicula} />
                        ))}
                    </div>  
                </article>
            </>
        );
    }
}

export default PeliGrid;