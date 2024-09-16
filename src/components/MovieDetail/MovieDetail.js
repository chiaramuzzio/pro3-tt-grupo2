import React, { Component } from "react";
import "./MovieDetail.css";

const api_key = "378786c706182646715863ed0e6d66cc";


class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            loading: true,
            trailerKey: null,
            favoritos: []
        };
    }

    componentDidMount() {

        //agregar this.setstate(loading: true)

        const id = this.props.id;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
        let urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`


        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ movie: data, loading: false });
        })
        .catch(error => console.log(error));


        fetch(urlVideo)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const trailer = data.results.find(video => video.type === "Trailer");
            this.setState({ trailerKey: trailer ? trailer.key : null, loading: false });
        })
        .catch(error => console.log(error));


        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage != null) {
            this.setState({ favoritos: JSON.parse(recuperoStorage) });
        }
    }


    eventoFavoritos = () => {
        const id  = this.props.id;
        let { favoritos } = this.state;


        if (favoritos.includes(id)) {
            const indice = favoritos.indexOf(id);
            favoritos.splice(indice, 1);        
        }
        else {
            favoritos.push(id);
        }

        this.setState({ favoritos });

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }


    render() {
        const { movie, loading, trailerKey, favoritos } = this.state;
        const id = this.props.id;


        if (loading) {
            return <p>Cargando...</p>;
        }


        if (!movie) {
            return <p>Hubo un error</p>;
        }


        const isFavorito = favoritos.includes(id);


        return (
            <main className="main_detalles">
                <div id="nomandfav">
                    <h3 id="titdetmo">{movie.title}</h3>
                    <i
                        id={movie.id}
                        onClick={this.eventoFavoritos}
                        className={`fa-heart ${isFavorito ? 'fa-solid' : 'fa-regular'}`}
                    ></i>
                </div>
                <p className="geneross">
                    Calificación: {movie.vote_average} | {movie.runtime} mins | {movie.genres.map(genre => genre.name).join(' - ')} | {movie.release_date}
                </p>
                <div className="info">
                    <img
                        className="fotos"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : "./img/movies/not_available.png"}
                        alt={movie.title}
                    />
                    {trailerKey ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            className="trailer"
                            allowFullScreen
                            title="Trailer de la película"
                            frameBorder="0"
                        ></iframe>
                    ) : (
                        <p>No hay trailer disponible para este título.</p>
                    )}
                    <p className="sinopsis">"{movie.overview}"</p>
                </div>
            </main>
        );
    }
}


export default MovieDetail;