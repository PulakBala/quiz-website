import React from 'react';
import {ArrowSmallRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Subject = ({sub}) => {
    const {id , name, logo} = sub;
    return (
        <div className='shadow-2xl rounded-lg'>
                <img className='bg-zinc-400 w-72' src={logo} alt="" />
            <div className='flex justify-between mt-4'>
                <h2 className='p-2 text-2xl font-bold'>{name}</h2>


                <button className='bg-blue-600 text-white p-2 rounded-lg text-xl flex'  > <Link to={`/quiz/${id}`}>Start Practice</Link> <small><ArrowSmallRightIcon className='w-6 ml-2 mt-1'></ArrowSmallRightIcon></small> </button>
               
            </div>
        </div>
    );
};

export default Subject;