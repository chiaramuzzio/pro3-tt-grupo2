import React, { Component } from "react";
import "./Peli.css";
import { Link } from 'react-router-dom';

class Peli extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verDescripcion: false,
        };

        this.handleverDescripcion = this.handleverDescripcion.bind(this);
    }

    handleverDescripcion() {
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
                        <a href={`./detail-movie.html?movie_id=${id}`} className="addPic">
                            <img id="fotopeli" className="fotos" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        </a>
                        <div className="titfav">
                            <a href={`./detail-movie.html?movie_id=${id}`} className="addPic">
                                <h4 id={id} className="capturarId">{title}</h4>
                            </a>
                        </div>
                        <p className="vermas"><Link to={`/pelicula/id/${id}`} className="vermas">Ir al detalle</Link></p>

                        <article className={this.state.verDescripcion ? "mostrar" : "ocultar"}>
                            <p className="desc">{overview}</p> 
                        </article>

                        <p className="vermas" onClick={this.handleverDescripcion}>
                            {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Peli;
