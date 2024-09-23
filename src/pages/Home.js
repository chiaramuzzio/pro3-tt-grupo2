import React, { Component } from "react";
import PeliGrid from "../components/PeliGrid/PeliGrid";
import Loader from "../components/Loader/Loader";
import SearchForm from "../components/SearchForm/SearchForm";


const api_key = "378786c706182646715863ed0e6d66cc";
const urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const urlEstrenos = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;


class Home extends Component {


 constructor(props) {
   super(props);
   this.state = {
       loading: true
   };
}


componentDidMount() {
 this.setState({ loading: false });
}




 render() {


   return (
     <>
     {this.state.loading ? (<Loader />) :
     (<>
      <SearchForm history={this.props.history} />
     <PeliGrid url={urlEstrenos} titulo="Estrenos" todas ="/estrenos"/>
     <PeliGrid url={urlPopulares} titulo="Peliculas Populares" todas ="/populares" />
     </>)}
      
     </>
   );
 }
}


export default Home;