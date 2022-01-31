import React, { useEffect, useState } from 'react';


const Technology = () => {
    const [techlogies, setTechnologies] = useState([])
    useEffect(() => {
        fetch('./tech.json')
            .then(res => res.json())
            .then(data => setTechnologies(data))
    }, [techlogies])
    const handleFilter = (category) => {
        const matchItems = techlogies.filter((item) => item.category === category);
        setTechnologies(matchItems);
      };
    return (
        <div>
            <div className='text-center mt-28 font-semibold mb-16'>
                <h2 className='mb-7 text-5xl'>Technologies we <span className='text-blue-500'>work with</span></h2>
            </div>


            <section className="container section-p mx-auto">
     <div className="case relative mt-5">
        <ul className="all-case text-center flex justify-center space-x-5 paragraph border-b-2 border-gray-800 pb-3">
          <li
            className="font-semibold cursor-pointer"
            onClick={() => setTechnologies(techlogies)}
          >
            <span>ALL</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("mobile")}
          >
            <span>MOBILE</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("frontend")}
          >
            <span>FRONTEND</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("database")}
          >
            <span>DATABASE</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("backend")}
          >
            <span>BACKEND</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("e-commerce")}
          >
            <span>E-COMMERCE</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("cms")}
          >
            <span>CMS</span>
          </li>
          <li
            className="font-semibold cursor-pointer"
            onClick={() => handleFilter("infra")}
          >
            <span>Infra, DevOps & Services</span>
          </li>
          
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 gap-5 mt-8">
        {techlogies.map((portfolio) => (
          <div
            className="mx-auto hover:-translate-y-1 transition-all duration-300 rounded-md"
            key={portfolio.id}
          >
            <div>
              <img className="cursor-pointer w-16" src={portfolio.img} alt="alt" />
            </div>
            <div className="">
              <h2 className="text-primary text-center font-semibold text-xl mb-3 cursor-pointer">
                {portfolio.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>



        </div>
    );
};

export default Technology;