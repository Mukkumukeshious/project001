import React, { use, useEffect, useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ProjectDetails } from '../assets/Assets';

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCard, setshowCard] = useState(1)

    useEffect(()=>{
      const displayProject = ()=>{
        if(window.innerWidth >= 1024){
          setshowCard(ProjectDetails.length);
        }else{
          setshowCard(1)
        }
        };
        displayProject();
        window.addEventListener('resize', displayProject);
        return ()=>window.removeEventListener('resize', displayProject);
      

    },[])

    const nextProject = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) %ProjectDetails.length)
    }

    const prevProject =()=>{
        setCurrentIndex((prevIndex)=> prevIndex === 0 ? ProjectDetails.length-1 : prevIndex - 1)
    }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden '
    id='project'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project 
        <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>For more prrime project explore our real-estate website</p>

      <div className='flex justify-end items-center mb-8'>
      <button onClick={prevProject} className=' p-3 bg-gray-200 rounded mr-2 ' aria-label='Previous Project'><FaArrowAltCircleLeft /></button>
      <button onClick={nextProject} className=' p-3 bg-gray-200 rounded mr-2 ' aria-label='Next Project'><FaArrowAltCircleRight /></button>
      </div>

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform: `translateX(-${(currentIndex * 100) / showCard}%)`}}>
            {ProjectDetails.map((project, index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.Image} alt={project.Title} className='w-full h-70 mb-14' />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-800'>{project.Title}</h2>
                        <p className='text-gray text-sm'>{project.Price} <span>|</span> {project.Location}</p>

                        </div>

                    </div>
                </div>
                
            ))}

        </div>
      </div>


    </div>
  )
}

export default Project
