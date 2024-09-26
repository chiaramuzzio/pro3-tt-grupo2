import React, { Component } from "react";
import "./FavoriteComponent.css";
import PeliGrid from "../PeliGrid/PeliGrid";
import Peli from "../Peli/Peli";
import Favorito from "../../modules/favorito";

const api_key = "378786c706182646715863ed0e6d66cc";

class FavoriteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            favoritos: Favorito.buscar(),
            loading: true,
        };
    }
    
    componentDidMount() {
        const favoritos = this.state.favoritos;
        console.log(favoritos);
        if (favoritos.length > 0) {
            favoritos.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState(prevState => ({
                            peliculas: [...prevState.peliculas, data]
                        }));
                    })
                    .catch(error => console.error("Error fetching movie:", error));
            });
        }
        this.setState({ loading: false });
    }

    agregar = (id) => {
        const resultado = Favorito.agregar(id);
        this.setState({ favoritos: resultado });
        return [true, resultado];
    }

    quitar = (id) => {
        const newPeliculas = this.state.peliculas.filter((pelicula) => pelicula.id !== id);
        const resultado = Favorito.quitar(id);
        this.setState({ favoritos: resultado, peliculas: newPeliculas });
        return [false, resultado];
    }

    render() {
        const { peliculas } = this.state;

        return (
            <div className="portadaGrid">
                {!this.state.loading && peliculas.length === 0 ? (
                    <p>No hay favoritos seleccionados</p>
                ) :
                (
                    <article className="categoria">
                    <div className="divTitulo">
                        <h3 className='titulo'>Favoritos</h3>  
                    </div>
                    <div className="portadaGrid">
                    {peliculas.map((pelicula, idx) => (  
                            <Peli key={idx} pelicula={pelicula} favoritos={this.state.favoritos} agregar={this.agregar} quitar={this.quitar} />
                        ))}
                    </div>  
                   
                </article>
                )}
            </div>
        );
    }
}

export default FavoriteComponent;