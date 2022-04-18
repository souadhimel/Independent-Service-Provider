import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {id,name,img,description,price,quantity}=service;
    const navigate=useNavigate()
    const navigateToPackageDetails = (id) => {
navigate(`/service/${id}`)
    }

    return (
        <div className="single_service">
           <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p> Price:{price}</p>
            <p>{quantity}</p>
            <button onClick={()=>navigateToPackageDetails(id)}  >Book Now</button>
        </div>
    );
};

export default Service;