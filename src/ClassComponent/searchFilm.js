import React, { Component } from "react";
import Tcard from "./tampilCard";
import ContentBanner from "./bannerContent";

class Search extends React.Component{
    state = {
        tampungMovie : [],
        input: "",
    }
    SearchMovie = async() =>{
        const getMovie = await this.fetchMovie();
        console.log(getMovie);
        if(this.state.input !== ""){
            this.setState({
                tampungMovie : getMovie,
                input:"",
            })
        }
    }

    fetchMovie = () =>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&s=" + this.state.input).then((respon)=>respon.json()).then((respon)=>respon.Search);
    }
    render(){
        // console.log("TampungM : ",this.state.tampungMovie);
        return(
            <div className="text-light"> 
                <div className="row mt-4">
                    <h3 className="">🎬 Movie Web Search </h3>
                </div>
                <div className="row mt-3">
                    <div className="input-group mb-3">
                        <div class="col-md-6 pe-2">
                            <input type="text" className="form-control bg bg-dark text-light" onChange={((inpt)=>this.setState({input : inpt.target.value}))} placeholder="Search Movie" value={this.state.input}/>
                        </div>
                        <div class="col-md-4">                   
                            <button className="btn bg-transparent btn-outline-primary" onClick={this.SearchMovie}>Search</button>
                        </div>
                    </div>    
                </div>
                <ContentBanner />
                <h1 className="mt-4">Movie List</h1>
                <Tcard data = {this.state.tampungMovie} />
            </div>
        )
    }
}

export default Search;