import React, { Component } from "react";
import "./Peli.css";
import { Link } from 'react-router-dom';
import Favorito from '../../modules/favorito';

class Peli extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verDescripcion: false,
            isFavorito: false
        };
    }

    handleverDescripcion = () => {
        this.setState({
            verDescripcion: !this.state.verDescripcion
        });
    }

    componentDidMount() {
        const id = this.props.pelicula.id;
        let recuperoStorage = JSON.parse(localStorage.getItem('favoritos'));
        if (recuperoStorage != null && recuperoStorage.includes(id)) {
            this.setState({ isFavorito: true });
        }
    }

    handleFavoritoClick = () => {
        const { id } = this.props.pelicula;
        const { agregar, quitar } = this.props;
        const { isFavorito } = this.state;

        if (isFavorito) {
            const [nuevoEstado, favoritos] = quitar(id);
            this.setState({ isFavorito: nuevoEstado });
        } else {
            const [nuevoEstado, favoritos] = agregar(id);
            this.setState({ isFavorito: nuevoEstado });
        }
    }

    render() {
        const { id, title, overview, poster_path } = this.props.pelicula;
        const { isFavorito } = this.state;
        const truncar = (str) => str.length > 17 ? str.substring(0, 17) + "..." : str;

        return (
            <>
                <div className="portada">
                    <div className="pelicula">
                        <Link to={`/movie-detail/id/${id}`}>
                            <img id="fotopeli" className="fotos" src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : "./img/movies/not_available.png"} alt={title} />
                        </Link>
                        <div className="titfav">
                            <Link to={`/movie-detail/id/${id}`}>
                                <h4 id={id} className="capturarId">{truncar(title)}</h4>
                            </Link>
                            <i
                                id={id}
                                onClick={this.handleFavoritoClick}
                                className={`fa-heart ${isFavorito ? 'fa-solid' : 'fa-regular'}`}
                            ></i>
                        </div>

                        <article className={this.state.verDescripcion ? "mostrar" : "ocultar"}>
                            <p className="desc">{overview}</p> 
                        </article>

                        <div className="botones">
                            <button className="verDetalle vermas" onClick={this.handleverDescripcion}>
                                {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                            </button>

                            <button className="verDetalle">
                                <Link to={`/movie-detail/id/${id}`} className="vermas">Detalle</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Peli;