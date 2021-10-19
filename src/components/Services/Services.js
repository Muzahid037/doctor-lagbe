import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Muzahid037/Medical-Related-API/main/servicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-5 section">
            <div className="">
            <h2>Our Best Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>
                )}
            </div>

        </div >
    );
};

export default Services;