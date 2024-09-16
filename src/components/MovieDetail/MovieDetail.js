import React, { Component } from "react";
import "./MovieDetail.css";
import Favorito from '../../modules/favorito';

const api_key = "378786c706182646715863ed0e6d66cc";


class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            loading: true,
            trailerKey: null,
            isFavorito: false
        };
    }

    componentDidMount() {

        //agregar this.setstate(loading: true)

        const id = this.props.id;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
        let urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`

        Promise.all([
            fetch(url).then(response => response.json()),
            fetch(urlVideo).then(response => response.json())
        ])
        .then(([movieData, videoData]) => {
            console.log(movieData);
            console.log(videoData);

            const trailer = videoData.results.find(video => video.type === "Trailer");

            this.setState({
                movie: movieData,
                trailerKey: trailer ? trailer.key : null,
                loading: false
            });
        })
        .catch(error => console.log(error))

        let recuperoStorage = JSON.parse(localStorage.getItem('favoritos')) ;
        if (recuperoStorage != null && recuperoStorage.includes(id)) {
            this.setState({ isFavorito: true });
        }
    }

    render() {
        const { movie, loading, trailerKey, isFavorito } = this.state;
        const id = this.props.id;

        if (loading) {
            return <p>Cargando...</p>;
        }

        return (
            <main className="main_detalles">
                <div id="nomandfav">
                    <h3 id="titdetmo">{movie.title}</h3>
                    <i
                        id={movie.id}
                        onClick={isFavorito ? () => this.setState({isFavorito: Favorito.quitar(id)}) : () => this.setState({isFavorito: Favorito.agregar(id)})}
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
                        <p className="no-trailer">No hay trailer disponible para este título.</p>
                    )}
                    <p className="sinopsis">"{movie.overview}"</p>
                </div>
            </main>
        );
    }
}


export default MovieDetail;