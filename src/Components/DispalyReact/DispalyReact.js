import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';
const DispalyReact = ({react}) => {
    const {options,question,correctAnswer} = react;

    const correctAns=() =>{ 
        toast(correctAnswer)
    }

    const quizToast = (param) => {
    
     if(correctAnswer === param) {
       
        toast('Correct Answer');
     } else{
       
        toast('Wrong Answer');
     }
    }
    
    
    return (
        <div className='border w-7/12 my-8 bg-orange-100 py-10 rounded-lg'>
           <div className='flex justify-evenly'>
           <h2 className='text-xl'> <small className='text-2xl font-bold-300'>Question:</small> {question}  </h2>
           <EyeIcon onClick={()=>correctAns()} className='h-10  pr-4 mt-14'/>
           </div>
           
           <form className='grid grid-cols-2 place-content-center h-auto p-4 gap-10 mt-12'>
               
                <p  className='border border-red-900 h-20  flex items-center justify-center'> 

                <input onClick={()=>quizToast(options[0])} className=' h-10 w-4 mr-2'  type="radio" id="html" name="fav_language"/> 
               
                 {options[0]}</p>

                <p className='border border-red-900 flex items-center justify-center'> 
                <input onClick={()=>quizToast(options[1])} className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/> 
                {options[1]}</p>

                <p className='border border-red-900 h-20 flex items-center justify-center'>
                <input  onClick={()=>quizToast(options[2])}className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/>
                {options[2]}</p>

                <p className='border border-red-900 flex items-center justify-center'> 
                <input  onClick={()=>quizToast(options[3])} className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/>
                {options[3]}</p>

                <ToastContainer
                    autoClose={1000}
                />
           </form>
        </div>
    );
};

export default DispalyReact;