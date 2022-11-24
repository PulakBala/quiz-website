import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayGit from '../DisplayGit/DisplayGit';

const GitQuiz = () => {
    const gitQiuz = useLoaderData();
    const displayGit = gitQiuz.data.questions;
    return (
        <div className='grid justify-items-center'>
            <h2 className='text-3xl font-bold mt-8'>Quiz of Git</h2>
            {
                displayGit.map(git => <DisplayGit
                    key={git.id}
                    git={git}
                ></DisplayGit>)
            }
        </div>
    );
};

export default GitQuiz;