import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Tcard extends React.Component{
    state = {
        show : false,
        imdb : "",
        tampungDetail : [],
    }
    ShowModal = async(id) =>{
        this.setState({
            show : true,
            imdb : id,
        })
        const getDetail = await this.DetailMovie(id);
        console.log(getDetail);
        this.setState({
            tampungDetail : [getDetail],
        })
    }
    HideModal = () =>{
        this.setState({
            show : false,
        })
    }

    DetailMovie = async (id) =>{
        return fetch("http://www.omdbapi.com/?apikey=76ab7cb7&i=" + id).then((respon)=>respon.json()).then((respon)=>respon);
    }
    

    render(){
        return(
            <>
                <div className="row mt-4">
                    {this.props.data.map((dat)=>{
                        return(
                        <div className="col-md-3">
                            <div className="card mt-3 bg bg-transparent" style={{width: 250,border:"1px solid transparent"}}>
                                <img src={dat.Poster} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{dat.Title}</h5>
                                    <h6 className="card-subtitle">{dat.Year}</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <button className="btn bg-transparent btn-outline-primary" onClick={this.ShowModal.bind(this, dat.imdbID)}>Details</button>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                {this.state.tampungDetail.map((dt)=>{
                    return(
                        <Modal show={this.state.show} onHide={this.HideModal} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>Detail Movie</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={dt.Poster} className="card-img-top"/>
                                        </div>
                                        <div className='col-md-6'>
                                            <li className="list-group-item">Writer : {dt.Writer}</li>
                                            <li className="list-group-item">Actors : {dt.Actors}</li>
                                            <li className="list-group-item">Genre : {dt.Genre}</li>
                                            <li className="list-group-item">Plot : {dt.Plot}</li>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.HideModal}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    )
                })}
            </>
        )
    }
}
export default Tcard;