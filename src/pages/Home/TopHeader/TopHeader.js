import React from 'react';

const TopHeader = () => {
    return (
        <div className='bg-zinc-100 p-2'>
            <div className='container md:flex '>
                <div className='mx-auto'>
                    <h2 className='text-gray-500 sm:text-center'>Now Hiring:React Developer</h2>
                </div>
                <div className='sm:text-center'>
                    <span className='mr-4 text-gray-500'> +88 01302-700055
                    </span>
                    <span className='text-gray-500'>Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>


    );
};

export default TopHeader;