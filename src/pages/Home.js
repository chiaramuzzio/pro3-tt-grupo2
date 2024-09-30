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
      loading: true,
      estrenos: [],
      populares: []
    };
  }

  componentDidMount() {
    this.fetchTMDB(urlEstrenos, "estrenos");
    this.fetchTMDB(urlPopulares, "populares");
    this.setState({ loading: false });
  }

  fetchTMDB(url, keyState) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          [keyState]: data.results.slice(0, 5),
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <>
        {this.state.loading ? (<Loader />) :
      (<>
        <SearchForm history={this.props.history} />
        <PeliGrid peliculas={this.state.estrenos} titulo="Estrenos" todas="/see-more/category/upcoming" boton={true}/>
        <PeliGrid peliculas={this.state.populares} titulo="Peliculas Populares" todas="/see-more/category/popular" boton={true}/>
      </>)}
      </>
    );
  }
}

export default Home;