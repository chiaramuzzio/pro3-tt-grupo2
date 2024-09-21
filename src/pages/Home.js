import PeliGrid from "../components/PeliGrid/PeliGrid";
const api_key = "378786c706182646715863ed0e6d66cc";
const urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const urlEstrenos = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;


const Home = (props) => {
  return (
    <>
            <PeliGrid url={urlPopulares} titulo="Peliculas Populares"/>
            
            <PeliGrid url={urlEstrenos} titulo="Estrenos"/>
     
    </>

  )
}

export default Home;