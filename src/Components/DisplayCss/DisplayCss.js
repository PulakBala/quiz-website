import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
const DisplayCss = ({css}) => {
    const {options,question,correctAnswer} = css;

    const correctAns=() =>{ 
        toast(correctAnswer)
    }

    const quizToast =(params) =>{
        if(correctAnswer === params){
          
            toast('Correct Answer');
        } else{
           
            toast('Wrong Answer');
        }
    }
    return (
        <div className='border w-9/12 my-8 bg-orange-100 py-10 rounded-lg'>
        <div className='flex justify-evenly'>
        <h2 className='text-xl'> <small className='text-2xl font-bold-300'>Question:</small> {question}</h2>
        <EyeIcon onClick={()=>correctAns()} className='h-10  pr-4 mt-14' />
        </div>

       <form className='grid lg:grid-cols-2 grid-cols place-content-center h-auto p-4 gap-10 mt-12'>
           
            <p className='border border-red-900 h-20 p-4 flex items-center justify-center'> 
            <input onClick={()=> quizToast(options[0])} className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {options[0]}</p>

            <p className='border border-red-900 p-4 flex items-center justify-center'> <input onClick={()=> quizToast(options[1])} className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {css.options[1]}</p>

            <p className='border border-red-900 p-4 h-20 flex items-center justify-center'> 
            <input onClick={()=> quizToast(options[2])} className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {options[2]}</p>

            <p className='border border-red-900 p-4 flex items-center justify-center'> 
            <input onClick={()=> quizToast(options[3])} className=' h-12 w-4 mr-2' type="radio" id="html" name="fav_language"/> {options[3]}</p>

            <ToastContainer
                autoClose={1000}
            />
       </form>
    </div>
    );
};

export default DisplayCss;