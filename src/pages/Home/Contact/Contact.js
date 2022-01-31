import React from 'react';
import contact from  '../../../images/contact.PNG'
import Iframe from 'react-iframe'

const Contact = () => {
    return (
    <div className='container mx-auto'>
            <div className='md:flex'>
            <div className='mx-auto container'>
            <div>
                <h2 className='font-bold md:text-6xl text-4xl mt-24 mr-4'>Need a hand?</h2>
                <h2 className='md:text-3xl text-4xl mt-4 mr-4'>Reach out to the world’s most reliable IT services.</h2>
            </div>
            <div>
            <form class="w-full max-w-lg">
  <div class="flex flex-wrap text-center -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
     <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
      
    </div>
    <div class="w-full md:w-1/2 px-3 mt-5">
      
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
     
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="Message"/>
     
    </div>
  </div>
  <button class="flex-shrink-0 bg-blue-500 mb-10 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Send
    </button>

</form>
            </div>
        </div>
        <div>
            <img className='mb-8' src={contact} alt="" />
        </div>
        </div>

       

        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3509387858458!2d90.3599774155118!3d23.806116692561208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ebb77cfef3%3A0xd5a1ed34c1dbee86!2sSindabad%20IT!5e0!3m2!1sen!2sbd!4v1643368191619!5m2!1sen!2sbd"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname my-10"
        allowfullscreen="" loading="lazy"/>
    </div>
    );
};

export default Contact;

