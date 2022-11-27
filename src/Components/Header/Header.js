import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=' bg-orange-200 h-28 flex lg:flex-row md:flex-col sm:flex-col  text-3xl justify-evenly items-center'>
            <div className='font-bold text-4xl mr-16'>
                <h1>Web Development Quiz</h1>
            </div>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;