import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, Name, image, shortDescription, longDescription, currPatient, currDoctor } = service;
    const handleSeeDetails = () => {

    }
    return (
        <div>
            {/* <h2>service {id}</h2> */}


            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <p className="card-text">{shortDescription}</p>
                    </div>
                    <div className="card-footer">

                        <Link to={`/home/${id}`}>
                            <button className="btn-primary">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;