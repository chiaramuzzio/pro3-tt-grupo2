import React, { Component } from "react";
import Loader from "../components/Loader/Loader"; 
import FavoriteComponent from "../components/FavoriteComponent/FavoriteComponent";


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
        return this.state.loading ? <Loader /> : <FavoriteComponent />;
    }
}

export default Favorites;