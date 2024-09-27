import React from 'react';
import { Component } from 'react';
import PeliGrid from '../components/PeliGrid/PeliGrid';
import Loader from '../components/Loader/Loader';


class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({
            isLoading:true,
        })
       
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=f2d31985b9fc9e720758bcc82e3c955b`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                peliculas: data.results,
                isLoading: false,
            })
        })
        .catch((e) => console.log(e))
    }


    render() {
        const { loading, peliculas } = this.state;
        if (loading) {
            return <Loader/>
        }
        return (
            <>
                {!this.state.isLoading && peliculas.length > 0 ?
                    <PeliGrid peliculas={this.state.peliculas} titulo={`Resultados de tu busqueda: ${this.props.location.state.query}`} boton={false}/>
                :
                    <div className='categoria'>
                        <h2>No se encontraron resultados para tu busqueda "{this.props.location.state.query}"</h2>
                    </div>
                }
            </>
        )
    }
}


export default ResultadoBusqueda;
