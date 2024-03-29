import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayTopic from '../DisplayTopic/DisplayTopic';

const Topics = () => {
    const topics = useLoaderData();
    const topicsItem = topics.data;
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-8 mt-12 justify-around mb-10 '>
           
            {
                topicsItem.map(topic => <DisplayTopic
                    key={topic.id}
                    topic={topic}
                ></DisplayTopic>)
            }
        </div>
    );
};

export default Topics;