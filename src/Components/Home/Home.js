import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';
import './Home.css'
const Home = () => {
    const subjects = useLoaderData();
    const subDisplay = subjects.data
   
    return (
        <div className='grid bg-orange-100'>
            <div className='img'>
                <h2 className='text-lg py-8 ml-96 hidden lg:block'>During the Quiz-test , <br/> do not open other tabs in the  browser or windows with the site "lms" <br/> Stay on this site until quiz-test is complete. Otherwise, it will be terminates with the status FAILED.</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols  md:justify-center justify-center gap-6 mt-20 mb-12  '>
               {
                    subDisplay.map(sub => <Subject
                        key={sub.id}
                        sub={sub}                    
                    ></Subject>)
               }
            </div>
        </div>
    );
};

export default Home;