import React, { Component } from "react";
import "./FavoriteComponent.css";
import Peli from "../Peli/Peli";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const api_key = "378786c706182646715863ed0e6d66cc";


class FavoriteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            loading: true,
        };
    }
    
    componentDidMount() {
        const recuperoStorage = localStorage.getItem('favoritos');
        let favoritos = recuperoStorage ? JSON.parse(recuperoStorage) : [];        
        // console.log(favoritos);
        if (favoritos.length > 0) {
            favoritos.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState(prevState => ({
                            peliculas: [data, ...prevState.peliculas]
                        }));
                    })
                    .catch(error => console.error("Error fetching movie:", error));
            });
        }
        this.setState({ loading: false });
    }

    render() {
        const { peliculas } = this.state;

        return (
            <div>               
                <article className="categoria">
                    <div className="divTitulo">
                        <h3 className='titulo'>Favoritos</h3>  
                    </div>
                    <div className="portadaGrid">
                        {!this.state.loading && peliculas.length > 0 ? peliculas.map((pelicula, idx) => (
                            <Peli key={idx} pelicula={pelicula} />
                        )) :
                        (
                        <div className="divNoFav">
                            <p className="noFav">No hay peliculas favoritas seleccionadas...</p>
                            <Link to="/" className="buttonTodas">Volver al Inicio</Link>
                        </div>
                        )
                    }
                    </div>  
                </article>
            </div>
        );
    }
}

export default FavoriteComponent;