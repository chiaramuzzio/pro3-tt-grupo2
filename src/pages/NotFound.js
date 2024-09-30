import React, { Component } from "react";
import "../components/NotFound/notFound.css";
import Loader from "../components/Loader/Loader";


class NotFound extends Component {
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
            (
                <div>
                    <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" className="gifNotFound" alt="404 Not Found"/>
                </div>
            )}
            </>
        );
    }
}

export default NotFound;