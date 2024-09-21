import React, { Component } from "react";
import "./Peli.css";
import { Link } from 'react-router-dom';

class Peli extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verDescripcion: false,
        };

    }

    handleverDescripcion = () => {
        this.setState({
            verDescripcion: !this.state.verDescripcion
        });
        
    }

    render() {
        const { id, title, overview, poster_path } = this.props.pelicula;

        return (
            <>
                <div className="portada">
                    <div className="pelicula">
                        <Link to={`./movie-detail/id/${id}`} className="addPic">
                            <img id="fotopeli" className="fotos" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        </Link>
                        <div className="titfav">
                            <Link to={`./movie-detail/id/${id}`} className="addPic">
                                <h4 id={id} className="capturarId">{title}</h4>
                            </Link>
                        </div>

                        <article className={this.state.verDescripcion ? "mostrar" : "ocultar"}>
                            <p className="desc">{overview}</p> 
                        </article>

                        <p className="vermas" onClick={this.handleverDescripcion}>
                            {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                        </p>

                        <p className="detalle"><Link to={`/movie-detail/id/${id}`} className="vermas">Ir al detalle</Link></p>

                    </div>
                </div>
            </>
        );
    }
}

export default Peli;
