import React, { Component } from "react";
import FavoriteComponent from "../components/FavoriteComponent/FavoriteComponent";
import Loader from "../components/Loader/Loader"; 


class Favorites extends Component {
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
                <main className="main_home">
                    <section className="seccion1">
                        <article className="categoria">
                            <h2>Favoritos</h2>
                            <div className="portadaGrid">
                                {this.state.loading ? (<Loader />) : (<FavoriteComponent />)}
                            </div>
                        </article>
                    </section>
                </main>
            </>
        );
    }
}

export default Favorites;