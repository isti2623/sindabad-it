import React from 'react';

const Experts = () => {
    return (
        <div className='md:flex container mx-auto mb-10'>
            <div>
                <h2 className='font-bold md:text-6xl text-4xl mt-24 mr-4'>Our <span className='text-blue-500'>experienced</span><br /> experts</h2>
                <h2 className='leading-7 mt-5'>Our team members are key to fulfilling our customers needs. <br /> We don’t hire for a particular assignment – we hire people based on their skills, cultural fit, and career goals. <br /> Our philosophy has always been to find the right person, <br /> then find the right opportunity.</h2>
                <h2 className='leading-7 mt-10'>We take every possible ownership of yours’s <br /> to build your Web and Mobile Applications that vow <br /> your success and help you achieve your dream.</h2>
                <button className='bg-blue-500 rounded-md p-2 mt-7  font-semibold md:w-48 text-white mr-3'>Join Us Now</button>
                <button className='text-blue-500 rounded-md p-2 mt-7 font-semibold md:w-48 hover:text-yellow-700'>View All Teams</button>

            </div>
            <div>
                <img className='w-full mt-4' src="https://res.cloudinary.com/abdulprogton/image/upload/v1620743310/progton-website/custom-images/progton-collage-design.webp" alt="" />
            </div>
        </div>
    );
};

export default Experts;