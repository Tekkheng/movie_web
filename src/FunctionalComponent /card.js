import React, { useState,useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Card=(props)=>{
    const [show, setShow] = useState(false);

    const [tampungDetail,setTampungDetail] = useState([]);
    const handleClose = () => setShow(false);

    const handleShow = async(id) => {
        setShow(true);
        
        const getDetail = await DetailMovie(id);
        console.log(getDetail);
        setTampungDetail([getDetail]);
       
    }
    console.log("TampungDETAIL : ",tampungDetail);
    const DetailMovie=(id)=>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&i=" + id).then((respon)=>respon.json()).then((respon)=>respon);
    }

    const tngkp = useRef(null);

    return (
        <div className="row mt-3 d-flex justify-content-center">
     
            {props.tampung.map((t)=>{
                return (
                    <>
                    <div className="col-md-3">
                        <div className="card mt-3" style={{width: 250}}>
                            <img src={t.Poster} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{t.Title}</h5>
                                <h6 className="card-subtitle">{t.Year}</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className="btn btn-danger" onClick={handleShow.bind(this,t.imdbID)} ref={tngkp}>Details</button>
                            </div>
                        </div>
                    </div>
                    </>
                
                )
                
            })}

            {tampungDetail.map((d)=>{
                return(
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Detail Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={d.Poster} className="card-img-top"/>
                                </div>
                                <div className='col-md-6'>
                                    <li className="list-group-item">Writer : {d.Writer}</li>
                                    <li className="list-group-item">Actors : {d.Actors}</li>
                                    <li className="list-group-item">Rating : {d.Ratings[0].Value}</li>
                                    <li className="list-group-item">Genre: {d.Genre}</li>
                                    <li className="list-group-item">Plot : {d.Plot}</li>
                                </div>
                            </div>
                        </div>
                       
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                )
            })}

            
        </div>
    )
}

export default Card