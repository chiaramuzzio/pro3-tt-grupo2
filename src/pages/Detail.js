import MovieDetail from "../components/MovieDetail/MovieDetail";

const Detail = (props) => {
  
  let id = Number (props.match.params.id);

  return (

    <main className="main_detalles">
      <section className="sct_detail">
        <article>
          <div className="dtl_pelicula">
            <MovieDetail id={id}/>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Detail;