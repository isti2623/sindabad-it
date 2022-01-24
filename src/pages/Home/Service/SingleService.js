import React from 'react';

const SingleService = (props) => {
    const { name, img, desc } = props.service;
    return (
        <div class="p-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-16 mx-auto duration-700 ease-in transition" src={img} alt="" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl text-center mb-2">{name}</div>
                    <p class="text-gray-700 text-base text-center">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;