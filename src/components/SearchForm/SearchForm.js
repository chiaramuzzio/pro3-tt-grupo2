import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    handleCancelSubmit(e){
        e.preventDefault();
    }
    handleFormChange(e){
        this.setState({
            query: e.target.value
        })
    }
    handleFormSubmit(){
        this.props.history.push("/search" , {query: this.state.query});
       }

    render() {
        return(
            <>
                <div className="buscador">
                    <form onSubmit={(e) => this.handleCancelSubmit(e)} >
                        <input className="buscar"
                            name="query"
                            onChange={ (e)=> this.handleFormChange(e) }
                            value={this.state.query}
                        />

                        <button className="lupa" onClick={()=> this.handleFormSubmit()} >Search</button>

                    </form>
                </div>
            </>
        )
    }
}


export default SearchForm