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

        let recuperoStorage = JSON.parse(localStorage.getItem('favoritos')) ;
        if (recuperoStorage != null && recuperoStorage.includes(id)) {
            this.setState({ isFavorito: true });
        }
    }

    render() {
        const { id, title, overview, poster_path } = this.props.pelicula;
        const { isFavorito } = this.state; 

        const imageUrl = poster_path 
        ? `https://image.tmdb.org/t/p/original${poster_path}` 
        : '/img/movies/not_available.png';

        const truncar = (str) => str.length > 17 ? str.substring(0, 17) + "..." : str;

        return (
            <>
                <div className="portada">
                    <div className="pelicula">
                        <Link to={`/movie-detail/id/${id}`}>
                            <img id="fotopeli" className="fotos" src={imageUrl} alt={title} />
                        </Link>
                        <div className="titfav">
                            <Link to={`/movie-detail/id/${id}`}>
                                <h4 id={id} className="capturarId">{truncar(title)}</h4>
                            </Link>
                            <i
                                id={id}
                                onClick={isFavorito ? () => this.setState({isFavorito: Favorito.quitar(id)}) : () => this.setState({isFavorito: Favorito.agregar(id)})}
                                className={`fa-heart ${isFavorito ? 'fa-solid' : 'fa-regular'}`}
                            ></i>
                        </div>

                        <article className={this.state.verDescripcion ? "mostrar" : "ocultar"}>
                            <p className="desc">{overview}</p> 
                        </article>

                        <div className="botones">
                            <button className="verDetalle" onClick={this.handleverDescripcion}>
                                {this.state.verDescripcion ? "Ver Menos" : "Descripcion"}
                            </button>
                            <Link to={`/movie-detail/id/${id}`}>
                                <button className="verDetalle">
                                    Detalle
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Peli;