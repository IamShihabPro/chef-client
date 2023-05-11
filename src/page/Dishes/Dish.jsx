import React from 'react';
import { Link } from 'react-router-dom';

const Dish = ({dish}) => {
    const {_id, dish1, dishName1} = dish
    return (
        <div className=''>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 drop-shadow-md">
                <img className="rounded-t-lg w-96 h-48 " src={dish1} alt=""  />      
                <div className="p-5">
                    <h5 className="mb-2 text-2xl drop-shadow-md font-bold tracking-tight text-gray-800 dark:text-white">{dishName1}</h5>
                </div>
            </div>
        </div>
    );
};

export default Dish;