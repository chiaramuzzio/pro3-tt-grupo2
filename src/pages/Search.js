import React from 'react';
import { Component } from 'react';
import PeliGrid2 from '../components/PeliGrid2/PeliGrid2';
import Loader from '../components/Loader/Loader';


class ResultadoBusqueda extends Component {
 constructor(props) {
   super(props);
   this.state = {
     peliculas: [],
     isLoading:true,
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
       isLoading:false,
     })
   })
     .catch((e) => console.log(e))
 }


 render() {
   return (
     <>
       {!this.state.isLoading ? (
         <div>
           <h2>Resultados de tu busqueda:</h2>
           <PeliGrid2 datos={this.state.peliculas}/>
         </div>
       ):(
         <Loader/>
       )
       }
     </>
   )
 }


}
export default ResultadoBusqueda;
