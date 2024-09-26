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
        if (this.state.loading) {
            return <Loader />;
        }
        
        return (
            <FavoriteComponent />
        );
    }
}

export default Favorites;