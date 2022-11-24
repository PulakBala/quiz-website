import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCss from '../DisplayCss/DisplayCss';

const CssQuiz = () => {
    const cssQuiz = useLoaderData();
    const displayCss = cssQuiz.data.questions;
   
    return (
        <div className='grid justify-items-center'>
            <h2 className='text-3xl font-bold mt-8'>Quiz of CSS</h2>
            {
                displayCss.map(css => <DisplayCss
                    key={css.id}
                    css={css}
                ></DisplayCss>)
            }
        </div>
    );
};

export default CssQuiz;