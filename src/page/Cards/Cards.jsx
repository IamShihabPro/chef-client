import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardsDetails from './CardsDetails';

const Cards = () => {
    const personData = useLoaderData()
    console.log(personData);
    return (
        <div className='my-container grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                personData.map(data=> <CardsDetails key={data._id} data={data} ></CardsDetails> )
            }
            
        </div>
    );
};

export default Cards;