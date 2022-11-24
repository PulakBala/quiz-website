import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 grid justify-items-center gap-10 mb-4'>
            <div className='border border-red-500 w-9/12'>
            <h2 className='text-3xl font-bold mt-4'><small className='text-3xl text-bold'>Qusetion: </small> What is the purpose of react router ?</h2>
            <p className='text-2xl mt-8 p-4'><small className='text-2xl font-bold'>Answer :</small> We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

            A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its applications, check out this blog: Navigate React Router programmatically.</p>
            </div>
            <div className='border border-red-500 w-9/12'>
            <h2 className='text-3xl font-bold mt-4'><small >Qusetion: </small> How does context api works in react ?</h2>
            <p className='text-2xl mt-8 p-4'><small className='text-2xl font-bold'>Answer :</small> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='border border-red-500 w-9/12'>
            <h2 className='text-3xl font-bold mt-4'><small>Qusetion: </small> what is useRef ?</h2>
            <p className='text-2xl mt-8 p-4'><small className='text-2xl font-bold'>Answer :</small> The useRef hook is a built-in React hook that takes one argument or parameter as its initial value and returns a reference. The reference has an interesting and useful property called current.
            One of the most useful features of the useRef hook is that the data or value in a reference or ref remains the same, even after component re-rendering. Also, if you update a reference, it does not affect the rendering of the app, unlike states.
            </p>
            </div>
        </div>
    );
};

export default Blog;