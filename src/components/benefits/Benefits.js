import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Benefits = (props) => {
    // const {benefit} = props.benefit
    return (
        <div className='flex items-end gap-2 mt-3 text-gray-600 '>
            <CheckCircleIcon className='w-6 h-6 text-green-500'></CheckCircleIcon>
            <span>{props.benefit}</span>
        </div>
    );
};

export default Benefits;