import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-28 font-semibold '>
                <h2 className='text-slate-500 mb-7'>SERVICES WE DELIVER</h2>
                <h2 className='text-4xl'>Preparing for your success, <br />
                    we provide <span className='text-blue-500'>truly prominent IT solutions.</span></h2>
            </div>
            <div class="container mx-auto mt-7">
                <div className='grid grid-cols-3 gap-4'>
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        >
                        </SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;