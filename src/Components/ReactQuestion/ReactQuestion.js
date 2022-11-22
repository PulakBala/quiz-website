import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DispalyReact from '../DispalyReact/DispalyReact';


const ReactQuestion = () => {
    const reacts = useLoaderData();
    const reactDisplay = reacts.data.questions
    console.log(reacts.data.questions)
    return (
        <div className='grid justify-items-center'>
            <h2 className='text-3xl mt-8 font-bold'>Quiz of React</h2>
            {
                reactDisplay.map(react => <DispalyReact
                    key={react.id}
                    react={react}
                ></DispalyReact>)
            }
        </div>
    );
};

export default ReactQuestion;