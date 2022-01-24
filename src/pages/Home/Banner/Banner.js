import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='md:flex'>
                <div>
                    <h2 className='font-semibold md:text-7xl tracking-wide'>Top Web and Mobile App Development Company.</h2>
                    <p className='mt-7'>Accelerating digital innovation for the world</p>
                    <p className='mt-7'>Share your idea, we will build your product and help achieve your vision.</p>
                    <p className='mt-7 font-semibold md:text-3xl'>Talk with our experts for 30 <br /> minutes of free product <br />
                        consultation!</p>
                    <button className='bg-blue-500 rounded-md p-2 mt-7 font-semibold text-white'>Get A Free Consultation</button>
                </div>
                <div>
                    <img className='w-2/4' src="https://res.cloudinary.com/abdulprogton/image/upload/v1620743309/progton-website/custom-images/progton-5-year-logo.webp" alt="" />
                    <span className='md:text-4xl font-semibold'>Celebrating 5 Years of <br /><span className='text-center text-blue-500'>Success!</span></span>
                </div>
            </div>
        </div>
    );
};

export default Banner;