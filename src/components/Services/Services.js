import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./sites.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-3">
            <div>
                <h1 className="text-info">Sites</h1>
            </div>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        img={service.img}
                        websiteName={service.websiteName}
                        webAddress={service.webAddress}
                        courses={service.courses}
                        phone={service.phone}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;