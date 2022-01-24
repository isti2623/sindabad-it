import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <div class="container my-12 py-12 mx-auto px-4">


                <section class="mb-20 text-gray-900 px-4">
                    <div class="text-center max-w-3xl mx-auto">
                        <h2 className='text-slate-500 mb-7'>SERVICES WE DELIVER</h2>
                        <p class="mb-6 pb-2 md:mb-12 font-bold text-3xl">
                            What people praise about Progton?
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 text-center">
                        <div class="mb-6 md:mb-0">
                            <div class="flex justify-center mb-6">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg" class="rounded-full shadow-lg w-24" />
                            </div>
                            <p class="text-xl my-4 text-gray-500">
                                "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                                elit sed ut perspiciatis unde omnis."
                            </p>
                            <p class="italic">- Anna Morian</p>
                        </div>
                        <div class="mb-0">
                            <div class="flex justify-center mb-6">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" class="rounded-full shadow-lg w-24" />
                            </div>
                            <p class="text-xl my-4 text-gray-500">
                                "Neque cupiditate assumenda in maiores repudiandae mollitia
                                architecto elit sed adipiscing elit."
                            </p>
                            <p class="italic">- Teresa May</p>
                        </div>
                    </div>
                </section>


            </div>

        </div>
    );
};

export default Testimonials;