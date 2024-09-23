import React, { Component } from "react";
import "./FavoriteComponent.css";
import Peli from "../Peli/Peli";

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
            <div className="portadaGrid">
                {peliculas.length === 0 ? (
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