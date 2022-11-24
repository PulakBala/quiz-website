import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DispalyReact = ({react}) => {

    const quizToast = (param) => {
     
     if(react.correctAnswer === param) {
       
        toast('Correct Answer');
     } else{
       
        toast('Wrong Answer');
     }
    }
    
    return (
        <div className='border w-7/12 my-8 bg-orange-100 py-10 rounded-lg'>
            <h2 className='text-xl'> <small className='text-2xl font-bold-300'>Question:</small> {react.question}</h2>

           <form className='grid grid-cols-2 place-content-center h-auto p-4 gap-10 mt-12'>
               
                <p  className='border border-red-900 h-20  flex items-center justify-center'> 

                <input onClick={()=>quizToast(react.options[0])} className=' h-10 w-4 mr-2'  type="radio" id="html" name="fav_language"/> 
               
                 {react.options[0]}</p>

                <p className='border border-red-900 flex items-center justify-center'> 
                <input onClick={()=>quizToast(react.options[1])} className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/> 
                {react.options[1]}</p>

                <p className='border border-red-900 h-20 flex items-center justify-center'>
                <input  onClick={()=>quizToast(react.options[2])}className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/>
                {react.options[2]}</p>

                <p className='border border-red-900 flex items-center justify-center'> 
                <input  onClick={()=>quizToast(react.options[3])} className=' h-10 w-4 mr-2' type="radio" id="html" name="fav_language"/>
                {react.options[3]}</p>

                <ToastContainer
                    autoClose={1000}
                />
           </form>
        </div>
    );
};

export default DispalyReact;