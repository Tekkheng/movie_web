import React, { Component } from "react";
import Tcard from "./tampilCard";

class Search extends React.Component{
    state = {
        tampungMovie : [],
        input: "",
    }
    SearchMovie = async() =>{
        const getMovie = await this.fetchMovie();
        console.log(getMovie);
        this.setState({
            tampungMovie : getMovie,
            input:"",
        })
    }

    fetchMovie = () =>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&s=" + this.state.input).then((respon)=>respon.json()).then((respon)=>respon.Search);
    }
    render(){
        // console.log("TampungM : ",this.state.tampungMovie);
        return(
            <>
                <div className="container">
                    <div className="row mt-4">
                        <h1 className="">Movie List</h1>
                    </div>
                    <div className="row mt-3">
                        <div class="col-md-8">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" onChange={((inpt)=>this.setState({input : inpt.target.value}))} placeholder="Search Movie"/>
                                <button className="btn btn-primary" onClick={this.SearchMovie}>Search</button>
                            </div>
                        </div>    
                    </div>
                    <Tcard data = {this.state.tampungMovie} />
                </div>
            </>
        )
    }
}

export default Search;