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
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        >
                        </SingleService>)
                    }
                </div>
            </div>
            <div className='mx-auto container text-center space-x-5   mb-7'>
                <button className='bg-blue-500 rounded-md p-2 mt-7 h-4/5 font-semibold md:w-64 text-white'>Talk A Consultant</button>
                <button className='hover:bg-blue-500 bg-white border h-4/5 text-blue-500 hover:text-white  rounded-md p-2 mt-7 font-semibold md:w-64 '>Contact Us Now</button>
            </div>
        </div>
    );
};

export default Service;