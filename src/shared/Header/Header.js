import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="text-gray-600 body-font shadow-lg">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="home"><span class="ml-3 text-xl">Sindabad IT</span></Link>

                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="home"><span class="ml-3 text-xl">Home</span></Link>
                    <Link to="company"><span class="ml-3 text-xl">Company</span></Link>
                    <Link to="services"><span class="ml-3 text-xl">Services</span></Link>
                    <Link to="technology"><span class="ml-3 text-xl">Technology</span></Link>
                    <Link to="blog"><span class="ml-3 text-xl">Blog</span></Link>
                    <Link to="carrer"><span class="ml-3 text-xl">Carrer</span></Link>
                </nav>
                <button class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0 text-white">Contact Us
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;