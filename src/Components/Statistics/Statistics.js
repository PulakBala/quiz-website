import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart,  Line, YAxis, XAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Statistics = () => {
    const totalQuestion = useLoaderData();
    const data = totalQuestion.data;
    return (
        <div className='flex justify-center mt-10'>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="name" />
            <Line type="monotone" datakey="total"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis dataKey="total"/>
            <Tooltip/>
            <Legend/>
            </LineChart>
        </div>
    );
};

export default Statistics;