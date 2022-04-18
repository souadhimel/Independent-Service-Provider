import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
            <Link to="/checkOut">
     <button type="button">
          Book now
     </button>
 </Link>
        </div>
    );
};

export default Service;