import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const ChefsData = () => {
    const chefData = useLoaderData()
    console.log(chefData);
    return (
        <div className='my-container'>
            
            <div className="mx-auto flex flex-col items-center bg-white border border-gray-300 rounded-lg drop-shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg " src={chefData.picture} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">Master Chef: {chefData.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chefData.experience}</p>
                    

                    <div className='flex'>
                      <span className='font-bold me-2'>Ratings: </span> <Rating style={{ maxWidth: 100 }} value={chefData.ratings} readOnly /> <span className='ms-2'>{chefData.ratings}</span>
                    </div>

                </div>
            </div>



            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-64" src={chefData.dish1} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chefData.dishName1}</h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-64" src={chefData.dish2} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chefData.dishName2}</h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-64" src={chefData.dish3} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chefData.dishName3}</h5>
                    </div>
                </div>
                
            </div>

            
        </div>
    );
};

export default ChefsData;