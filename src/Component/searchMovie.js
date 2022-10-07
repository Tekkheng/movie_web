import React, {useState} from "react";
import Card from "./card";

const SearchMovie = ()=>{
    const [inputMovie,setInputMovie] = useState("");
    const [tampungMovie,setTampungMovie] = useState([]);

    const doMovie = async(e)=>{
        e.preventDefault();
        const getMovie = await gtMovie();
        console.log("List Movie",getMovie);
        setTampungMovie(getMovie)
        setInputMovie("");

    }
    const gtMovie = ()=>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&s=" + inputMovie).then((respon)=>respon.json()).then((respon)=>respon.Search);
    }
    return(
        <>
        <div className="container">
            <div className="row mt-4">
                <h1 className="">Movie List 2</h1>
            </div>
            <div className="row mt-3">
                <div class="col-md-8">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Movie" onChange={((inp)=>setInputMovie(inp.target.value))}/>
                        <button className="btn btn-primary" onClick={doMovie}>Search</button>
                    </div>
                </div>    
            </div>
            <Card tampung={tampungMovie}/>
        </div>
        </>
    )
}

export default SearchMovie;