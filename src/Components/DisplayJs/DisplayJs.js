import React from 'react';

const DisplayJs = ({js}) => {
    return (
        <div className='border w-9/12 my-8 bg-orange-100 py-10 rounded-lg'>
            <h2 className='text-xl'> <small className='text-2xl font-bold-300'>Question:</small> {js.question}</h2>

           <form className='grid grid-cols-2 place-content-center h-auto p-4 gap-10 mt-12'>
               
                <p className='border border-red-900 h-20 p-4 flex items-center justify-center'> <input className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {js.options[0]}</p>

                <p className='border border-red-900 p-4 flex items-center justify-center'> <input className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {js.options[1]}</p>

                <p className='border border-red-900 p-4 h-20 flex items-center justify-center'> <input className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {js.options[2]}</p>

                <p className='border border-red-900 p-4 flex items-center justify-center'> <input className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {js.options[3]}</p>
           </form>
        </div>
    );
};

export default DisplayJs;