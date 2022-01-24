import React from 'react';

const OurCompany = () => {

    return (
        <div>
            <div className='text-center mt-28 font-semibold mb-16'>
                <h2 className='text-slate-500 mb-7'>DISCOVER OUR COMPANY</h2>
                <h2 className='mb-7 text-5xl'> <span className='text-blue-500'>5+ Years</span>in Operation. <span className='text-blue-500'>15+ Years</span> in Industry</h2>
            </div>


            <div className='container mx-auto mb-24'>
                <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                    role="tablist">



                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-visionFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-visionFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-visionFill" role="tab"
                            aria-controls="tabs-visionFill" aria-selected="false">OUR VISION</a>
                    </li>
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-missionFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-missionFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-missionFill" role="tab"
                            aria-controls="tabs-missionFill" aria-selected="false">OUR MISSION</a>
                    </li>
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-servicesFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-servicesFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-servicesFill" role="tab"
                            aria-controls="tabs-servicesFill" aria-selected="false">OUR SERVICES</a>
                    </li>

                </ul>
                <div class="tab-content" id="tabs-tabContentFill">
                    <div class="tab-pane fade show active" id="tabs-visionFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                        <h2 className='text-center text-slate-500 font-semibold text-xl'>“To be the most innovative Software Services, Consulting and Development Company, and to be a committed partners <br /> of our Customers and Representatives.”</h2>
                    </div>
                    <div class="tab-pane fade" id="tabs-missionFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        <h2 className='text-slate-500 mb-7 font-bold text-xl text-center'>Progton is on a mission to accelerate the business of our customers by embracing the idea of quality and speed to <br /> deliver innovative solutions.</h2>
                        <h2 className='mb-7 text-slate-500 font-semibold text-xl text-center'>We do this with the help of our exceptionally skilled team where we encourage them to innovate, explore, automate and take <br /> ownership of their own and company’s growth both technically and professionally.</h2>
                        <h2 className=' mb-7 text-slate-500 font-semibold text-xl text-center'>This is possible because of our open work environment and culture that encourages a clear focus on delivering high-quality <br /> software solutions with the highest level of customer satisfaction.</h2>
                    </div>
                    <div class="tab-pane fade" id="tabs-servicesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        <ul className='font-semibold text-slate-500 text-xl list-disc'>
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                            <li>UI / UX Designing</li>
                            <li>Cloud Devops</li>
                            <li>Digital Marketing</li>
                            <li>AI / ML Services</li>
                            <li>Data Services</li>
                        </ul>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default OurCompany;