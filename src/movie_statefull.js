import React, { Component } from "react";
import Search from "./ClassComponent/searchFilm";

class Movie extends React.Component{
    render(){
        return(
            <div className="container">
                <Search />
            </div>
        )
    }
}
export default Movie;