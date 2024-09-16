import React, { Component } from "react";
import "./FavoriteComponent.css";
import { Link } from "react-router-dom";


const api_key = "378786c706182646715863ed0e6d66cc";


class FavoriteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }
    
    componentDidMount() {
        const recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage) {
            const favoritos = JSON.parse(recuperoStorage);
            const promises = favoritos.map(idFavv => {
                const url = `https://api.themoviedb.org/3/movie/${idFavv}?api_key=${api_key}`;
                return fetch(url).then(response => response.json());
            });
    
            Promise.all(promises)
                .then(peliculas => {
                    this.setState({ peliculas });
                })
                .catch(error => {
                    console.log('El error es: ' + error);
                });
        }
    }


    render() {
        const { peliculas } = this.state;

        return (
            <div className="favorite-component">
                {peliculas.length === 0 ? (
                    <p>No hay favoritos seleccionados</p>
                ) :
                (
                    <div className="peliculas">
                        {peliculas.map((data) => {
                            const movie_id = data.id;
                            const movie_title = data.title;
                            const fecha = data.release_date;
                            const posterPath = data.poster_path;
                            const poster = posterPath ? `https://image.tmdb.org/t/p/w200${posterPath}` : "./img/movies/not_available.png";

                            return (
                                <div className="pelicula" idx={movie_id}>
                                    <Link to={`/movie-detail/id/${movie_id}`} className="addPic">
                                        <img id="fotopeli" className="fotos" src={poster} alt={movie_title} />
                                    </Link>
                                    <div className="titfav">
                                        <Link to={`/movie-detail/id/${movie_id}`} className="addPic">
                                            <h4 id={movie_id} className="capturarId">{movie_title}</h4>
                                        </Link>
                                    </div>
                                    <Link to={`/movie-detail/id/${movie_id}`} className="addPic">
                                        <p className="addDate">Fecha de estreno: {fecha}</p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}


export default FavoriteComponent;