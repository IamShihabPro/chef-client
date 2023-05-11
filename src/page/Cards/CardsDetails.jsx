import React from 'react';


const CardsDetails = ({data}) => {
    const {_id, name,likes, ratings, experience, picture, dish1 } = data
    
    return (
        <div className='my-container'>

            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg">
                
                <img className="w-28 h-28 mt-4 mb-3 mx-auto rounded-full drop-shadow-md" src={picture} alt="Bonnie image"/>
                
                <div className="p-5">
                    
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">{name}</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Experience: {experience}
                        
                    </p>
                </div>
            </div>

           
        </div>
    );
};

export default CardsDetails;