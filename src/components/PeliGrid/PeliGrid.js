import React, { Component } from 'react';
import Peli from "../Peli/Peli"
import {Link} from "react-router-dom"
import "./PeliGrid.css";

class PeliGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { datos: [] };
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <> 
                <article className="categoria">
                    <div className="divTitulo">
                        <h3 className='titulo'>{this.props.titulo}</h3>  
                        <Link className="buttonTodas" to={this.props.todas}>Ver Todas</Link>
                    </div>
                    <div className="portadaGrid"> 
                    {this.state.datos.slice(0, 5).map((pelicula, idx) => (  
                            <Peli key={idx} pelicula={pelicula} />
                        ))}
                    </div>  
                    
                </article>
            </>
        );
    }
}

export default PeliGrid;
