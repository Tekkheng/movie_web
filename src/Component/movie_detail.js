import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Detail = (props) =>{
    // const [dataimdb,setdataImdb] = useState([]);
    const [show, setShow] = useState(false);
    const [tes,setTes] = useState("");
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    setTes(props.tampil);

    useEffect(()=>{
        if(tes == "yes"){
            // setTes(props.tampil);
            setShow(true);
        }else{
        }
    },[tes])
    
        // const tampil = async()=>{
        //     const getDetail = await fetch("http://www.omdbapi.com/?apikey=76ab7cb7&i=" + props.id).then((respon)=>respon.json()).then((respon)=>respon);
        //     console.log(getDetail);
        //     setdataImdb(getDetail);
        // }

    // const kirim = (()=>{
    //     props.ambil(dataimdb);
    // })()
    // setShow(props.kirim);
    
    
    return(
        <>
        </>
    )
}
export default Detail;