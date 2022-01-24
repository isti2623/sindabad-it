import React, { useEffect, useState } from 'react';

const Technology = () => {
    const [techlogies, setTechnologies] = useState([])
    useEffect(() => {
        fetch('./tech.json')
            .then(res => res.json())
            .then(data => setTechnologies(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-28 font-semibold mb-16'>
                <h2 className='mb-7 text-5xl'>Technologies we <span className='text-blue-500'>work with</span></h2>
            </div>


            <div className='container mx-auto mb-24'>
                <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                    role="tablist">
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-homeFill" class="
      nav-link
      tab_style
      active
    " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                            aria-controls="tabs-homeFill" aria-selected="true">Mobile</a>
                    </li>


                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-frontendFill" class="
      nav-link
      tab_style
    
    " id="tabs-frontendFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-frontendFill" role="tab"
                            aria-controls="tabs-frontendFill" aria-selected="false">Frontend</a>
                    </li>
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-databaseFill" class="
      nav-link
      tab_style
    " id="tabs-databaseFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-databaseFill" role="tab"
                            aria-controls="tabs-databaseFill" aria-selected="false">Database</a>
                    </li>
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-backendFill" class="
      nav-link
      tab_style
    " id="tabs-backendFill-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-backendFill" role="tab"
                            aria-controls="tabs-backendFill" aria-selected="false">Backend</a>
                    </li>
                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-ecommerceFill" class="
      nav-link
      tab_style
    " id="tabs-ecommerce-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-ecommerceFill" role="tab"
                            aria-controls="tabs-ecommerceFill" aria-selected="false">E-Commerce</a>
                    </li>


                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-messagesFill" class="
      nav-link
      tab_style
    " id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill" role="tab"
                            aria-controls="tabs-messagesFill" aria-selected="false">CMS</a>
                    </li>

                    <li class="nav-item flex-auto text-center" role="presentation">
                        <a href="#tabs-infraFill" class="
      nav-link
      tab_style
    " id="tabs-infra-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-infraFill" role="tab"
                            aria-controls="tabs-messagesFill" aria-selected="false">Infra, DevOps | Services</a>
                    </li>
                </ul>
                <div class="tab-content" id="tabs-tabContentFill">
                    <div class="tab-pane fade show active" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                        Mobile
                    </div>
                    <div class="tab-pane fade" id="tabs-frontendFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        Frontend
                    </div>
                    <div class="tab-pane fade" id="tabs-databaseFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        Database
                    </div>
                    <div class="tab-pane fade" id="tabs-backendFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        Backend
                    </div>
                    <div class="tab-pane fade" id="tabs-ecommerceFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        E-Commerce
                    </div>
                    <div class="tab-pane fade" id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        CMS
                    </div>
                    <div class="tab-pane fade" id="tabs-infraFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                        Database
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Technology;