import React, { Component } from "react";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Loader from "../components/Loader/Loader";



class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true 
    };
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.setState({ id });
    this.setState({ loading: false }); 
  }

  render() {
    return (
      <main className="main_detalles">
        <section className="sct_detail">
          <article>
            <div className="dtl_pelicula">
            {this.state.loading ? (<Loader />) : (this.state.id && <MovieDetail id={this.state.id} />)}
            {/* {this.state.id && <MovieDetail id={this.state.id} />} */}
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default Detail;