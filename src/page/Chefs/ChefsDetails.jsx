import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const ChefsDetails = ({data}) => {
    const {_id, name,likes, ratings, experience, picture, dish1 } = data

  

    return (
        <div>
          
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg overflow-hidden">
            
            <img className="w-28 h-28 mt-4 mb-3 mx-auto rounded-full drop-shadow-md object-cover" src={picture} alt="Bonnie image"/>
            
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">{name}</h5>
                
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">Chef {name} is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. </p>

               

                <p className="mb-2 text-center font-medium tracking-tight text-gray-900 dark:text-white drop-shadow-md">Experience: {experience}</p>
                
                <div className='flex justify-center items-center'>
                <span className='font-bold me-2'>Ratings: </span> <Rating style={{ maxWidth: 100 }} value={ratings} readOnly /> <span className='ms-2'>{ratings}</span>
                </div>

            </div>


            <div className='flex justify-center'>
            <Link  to={`/chefs/${_id}`} > <button type="button" className="mb-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Details</button> </Link>

            </div>
        </div>

       

       
    </div>
    );
};

export default ChefsDetails;