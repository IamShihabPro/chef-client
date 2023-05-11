import React from 'react';
import { Link } from 'react-router-dom';
import BreakFast from '../../assets/r1.jpg'
import Lunch from '../../assets/r2.jpg'
import Dinner from '../../assets/r3.jpg'
import Dishes from '../Dishes/Dishes';

const Recipes = () => {
    return (
        <div className='my-container '>
            <h2 className=' mb-4 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none flex justify-center'>Our Best Popular Recipes</h2>
            <hr className=' border-2 border-gray-900 w-48 mx-auto items-center' />
           
           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={BreakFast} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Breakfast</h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={Lunch} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lunch</h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 p-3 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={Dinner} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dinner</h5>
                    </div>
                </div>
                
            </div>

            <Dishes></Dishes>
        </div>
    );
};

export default Recipes;