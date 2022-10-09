import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../App.css";

const Banner = () =>{
    return(
     <>        
        <div className="row text-light">
            <div className='col-md-12'>                   
                <div className="content">
                    <section class="text-light">
                        <h1 className="t1">Welcome To ImdbID<br/><p>Website Movie</p></h1>
                        <p className="t1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, magni nam rem nisi dolorum voluptatem commodi quae dolores accusantium deserunt!</p>
                    </section>
                </div>
            </div>
        </div>         
     </>
        
    )
}

export default Banner;