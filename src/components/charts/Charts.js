import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {id: 1, monthName: 'Jan', mb: 26},
        {id: 2, monthName: 'Feb', mb: 16},
        {id: 1, monthName: 'Mar', mb: 32},
        {id: 1, monthName: 'apr', mb: 35},
        {id: 1, monthName: 'May', mb: 12},
        {id: 1, monthName: 'Jun', mb: 12},
        {id: 1, monthName: 'July', mb: 45},
        {id: 1, monthName: 'Aug', mb: 22},
        {id: 1, monthName: 'Sep', mb: 43},
    ]
    return (
        <div>
            <LineChart width={750} height={250} data={data}>
                <XAxis dataKey= "monthName" />
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="mb" stroke="#8884d8"></Line>
            </LineChart>
            <BarChart width={800} height={500} data={data}>
                <XAxis dataKey="monthName"></XAxis>
                <YAxis/>
                <Bar dataKey="mb" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default Charts;