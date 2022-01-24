import React from 'react';

const MidBanner = () => {
    return (
        <div className='bg-orange-200 p-8 mb-16'>
            <div className='md:flex my-16 mx-auto container'>
                <div className='my10'>
                    <h2 className='font-semibold text-4xl'>Great ideas are converted into Great <br /> Apps by Great People.</h2>
                    <h2 className='font-semibold text-4xl text-blue-500 mt-5'>Call us now for free Product Discovery <br /> Workshop.</h2>
                </div>
                <div className='text-center md:ml-24  space-x-5 mt-8'>
                    <button className='bg-blue-500 rounded-md p-2 mt-7 font-semibold md:w-64 text-white'>Talk A Consultant</button>
                    <button className='bg-blue-500 rounded-md p-2 mt-7 font-semibold md:w-64 text-white'>Talk A Consultant</button>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;