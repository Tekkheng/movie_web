import React, {useState,useRef,useEffect} from "react";
import Card from "./card";
import Banner from "./banner";

const SearchMovie = ()=>{
    const [inputMovie,setInputMovie] = useState("");
    const [tampungMovie,setTampungMovie] = useState([]);
    const mRef = useRef(null);

    useEffect(()=>{
        if(tampungMovie.length >0){
            mRef.current.textContent = "Movie List";
        }
    },[tampungMovie])

    const doMovie = async(e)=>{
        e.preventDefault();
        const getMovie = await gtMovie();
        console.log("List Movie",getMovie);
        
        if(inputMovie !== ""){
            setTampungMovie(getMovie)
            setInputMovie("");
        }
    }
   
    const gtMovie = ()=>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&s=" + inputMovie).then((respon)=>respon.json()).then((respon)=>respon.Search);
    }
    return(
        <>
        <div className="text-light">
            <div className="row mt-4">
                <h3 className="">🎬 Movie Web Search </h3>
            </div>
            <div className="row mt-3">
                    <div className="input-group mb-3">
                        <div class="col-md-6 pe-2">
                            <input type="text" className="form-control bg bg-dark text-light" placeholder="Search Movie" onChange={((inp)=>setInputMovie(inp.target.value))} value={inputMovie}/>
                        </div>
                        <div class="col-md-4">
                            <button className="btn bg-transparent btn-outline-primary" onClick={doMovie}>Search</button>
                        </div>
                </div>    
            </div>
            <Banner />
            <div className="row mt-5">
                <h1 className="" ref={mRef}></h1>
            </div>
            <Card tampung={tampungMovie}/>
        </div>
        </>
    )
}

export default SearchMovie;