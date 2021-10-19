import React from 'react';
import './AboutUs.css';
import aboutUsBanner from './../../images/banner/3.jpg'

const AboutUs = () => {
    return (
        <div>
                <h3>About us</h3>
                {/* <img src={aboutUsBanner} alt="" /> */}

                <div className="card mb-3" style={{}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={aboutUsBanner} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="card-body ">
                                <h5 className="card-title">Doctor Lagbe</h5>
                                <p className="card-text">Is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers</p>
                                <p className="card-text">
                                    <button className="btn-primary">View More</button>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;