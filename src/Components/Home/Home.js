import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';
import './Home.css'
const Home = () => {
    const subjects = useLoaderData();
    const subDisplay = subjects.data
   
    return (
        <div className='grid'>
            <div className='img'>
                <h2 className='text-lg py-8 ml-96'>During the Quiz-test , <br/> do not open other tabs in the  browser or windows with the site "lms" <br/> Stay on this site until quiz-test is complete. Otherwise, it will be terminates with the status FAILED.</h2>
            </div>
            <div className='flex lg:flex-row md:flex-col gap-8 mt-12 justify-around mb-10'>
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