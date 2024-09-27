import React, { Component } from 'react';
import PeliGrid from '../../components/PeliGrid/PeliGrid';
import '../../components/VerMas/VerMas.css';


class VerMasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasFiltradas: [],
            valorFiltrado: "",
            paginaActual: 1,
        };
    }


    componentDidMount() {
        this.fetchMovies();
    }


    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.fetchMovies();
        }
    }


    fetchMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=31e421d77201e7a1eefe33f85b67fa3b&page=${this.state.paginaActual}`)
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: data.results,
                peliculasFiltradas: data.results,
                paginaActual: this.state.paginaActual + 1,
            }))
            .catch(err => console.log(err));
    }


    handleFilter(e) {
        const userValue = e.target.value;
        this.setState({
            valorFiltrado: userValue,
            peliculasFiltradas: this.state.peliculas.filter((pelicula) =>
                pelicula.title.toLowerCase().includes(userValue.toLowerCase())
            ),
        });
    }


    handleResetFilter() {
        this.setState({
            valorFiltrado: "",
            peliculasFiltradas: this.state.peliculas,
        });
    }


    handleLoadMore() {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=31e421d77201e7a1eefe33f85b67fa3b&page=${this.state.paginaActual}`)
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results),
                paginaActual: this.state.paginaActual + 1,
            }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <>
                <div className='filtrador'>
                    <input className='buscar'
                    type="text"
                    value={this.state.valorFiltrado}
                    onChange={(e) => this.handleFilter(e)}
                    placeholder="Filtrar películas"
                />
                <button className="lupa" onClick={() => this.handleResetFilter()}>Eliminar Filtro</button>
                </div>
                <PeliGrid titulo="Populares" peliculas={this.state.peliculasFiltradas} boton={false} />
                <button className ="cargarmas" onClick={() => this.handleLoadMore()}>Cargar Más</button>
            </>
        );
    }
}


export default VerMasPopulares;
