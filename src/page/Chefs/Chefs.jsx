import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsDetails from './ChefsDetails';
import { useReactToPrint } from 'react-to-print';

const Chefs = () => {
    const datas = useLoaderData()
    console.log(datas);

    const [showAll, setShowAll] = useState(false)
    const handleShowAll = ()=>{
        setShowAll(!showAll)
    }

    const componentPdf = useRef()

    const generatePDF = useReactToPrint({
        content: ()=> componentPdf.current,
        documentTitle: 'userdara',
        
    })
   
    return (
        <div className='my-container'>
            <div className='flex justify-center mb-4'>
                <button onClick={generatePDF} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">PDF</button>
            </div>
          
            <div ref={componentPdf} className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    datas.slice(0, showAll ? 12 : 6 ).map(data => <ChefsDetails key={data._id} data={data}></ChefsDetails> )
                }
            </div>

            <div className='flex mx-auto items-center justify-center'>
                <button onClick={handleShowAll} className='btn bg-sky-800 mt-10'>Show all</button>
            </div>

          
        </div>
    );
};

export default Chefs;