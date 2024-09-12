import React, { Component } from "react";
import "./MovieDetail.css";

const api_key = "378786c706182646715863ed0e6d66cc";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            loading: true,
            trailerKey: null
        };
    }

    componentDidMount() {
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
            this.setState({ trailerKey: data.results[0].key, loading: false });
        })
        .catch(error => console.log(error));
    }

    render() {
        const { movie, loading, trailerKey } = this.state;
        // const { title, poster_path, runtime, vote_average, overview} = movie

        return (
            <>
                {loading ? 
                    (<p>Cargando...</p>) 
                : 
                    (!movie ? 
                        (<p>Hubo un error</p>)
                    :
                        (!trailerKey ?
                            ( <><div id="nomandfav">
                                <h3 id="titdetmo">{movie.title}</h3>
                                <i id={movie.id} className="coraVacio fa-regular fa-heart"></i>
                            </div>
                            <p className="geneross">Calificación: {movie.vote_average} | {movie.runtime} mins | {movie.genres.map(genre => genre.name).join(' - ')} | {movie.release_date} | {movie.release_date}</p>
                            <div className="info">
                                <img className="fotos" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Imagen no disponible" />
                                <p className="sinopsis">"{movie.overview}"</p>
                                <p>No hay trailer disponible para este titulo.</p>
                            </div></>) 
                        : 
                            (!movie.poster_path ?
                                (<><div id="nomandfav">
                                    <h3 id="titdetmo">{movie.title}</h3>
                                    <i id={movie.id} className="coraVacio fa-regular fa-heart"></i>
                                </div>
                                <p className="geneross">Calificación: {movie.vote_average} | {movie.runtime} mins | {movie.genres.map(genre => genre.name).join(' - ')} | {movie.release_date} | {movie.release_date}</p>
                                <div className="info">
                                    <img className="fotos" src="./img/movies/not_available.png" alt="Imagen no disponible" />
                                    <iframe src={`https://www.youtube.com/embed/${trailerKey}`} className="trailer" allowFullScreen title="Trailer de la película"></iframe>
                                    <p className="sinopsis">"{movie.overview}"</p>
                                </div></>)
                                :
                                (<><div id="nomandfav">
                                    <h3 id="titdetmo">{movie.title}</h3>
                                    <i id={movie.id} className="coraVacio fa-regular fa-heart"></i>
                                </div>
                                <p className="geneross">Calificación: {movie.vote_average} | {movie.runtime} mins | {movie.genres.map(genre => genre.name).join(' - ')} | {movie.release_date} | {movie.release_date}</p>
                                <div className="info">
                                    <img className="fotos" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Imagen no disponible" />
                                    <iframe src={`https://www.youtube.com/embed/${trailerKey}`} className="trailer" allowFullScreen title="Trailer de la película" frameBorder="0" ></iframe>
                                    <p className="sinopsis">"{movie.overview}"</p>
                                </div></>)
                        )
                    ))
                }
            </>
        );
    }
}

export default MovieDetail;
