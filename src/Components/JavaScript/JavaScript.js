import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayJs from '../DisplayJs/DisplayJs';

const JavaScript = () => {
    const javascript = useLoaderData();
    const displayJs = javascript.data.questions;
    console.log(javascript.data);
    return (
        <div className='grid justify-items-center'>
            <h2 className='text-3xl font-bold mt-8'>Quiz of JavaScript</h2>

            {
                displayJs.map(js => <DisplayJs
                    key={js.id}
                    js={js}
                ></DisplayJs>)
            }
        </div>
    );
};

export default JavaScript;