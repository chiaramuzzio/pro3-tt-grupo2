import React, { Component } from "react";
import "./FavoriteComponent.css";
import Peli from "../Peli/Peli";

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
        console.log(favoritos);
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
                <h2>Favoritos</h2>
                {!this.state.loading && peliculas.length === 0 ? (
                    <p>No hay favoritos seleccionados</p>
                ) :
                (
                    <div className="portadaGrid">
                        {peliculas.map((data, idx) => {
                            return (
                                <Peli key={idx} pelicula={data} />
                            );
                        })}
                    </div> 
                )}
            </div>
        );
    }
}


export default FavoriteComponent;