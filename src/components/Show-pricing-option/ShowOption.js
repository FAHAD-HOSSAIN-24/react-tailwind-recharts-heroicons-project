import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefits from '../benefits/Benefits';

const ShowOption = (props) => {
    const { name, price, benefits } = props.option
    return (
        <div className='bg-white p-4 font-bold text-2xl rounded-2xl'>
            <h2>{name}</h2>
            <span className='text-5xl'>{price}</span>
            <span className='text-gray-400'>/m</span>
            <h2 className='text-left mt-2'>Most Benefits</h2>
            <div className='mt-8'>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
            </div>
            <div className='bg-green-500 text-white w-full p-3 mt-4 rounded-2xl hover:bg-green-400 flex items-end justify-center gap-2'>
                <button>Bay Now</button>
                <ArrowRightIcon className='w-6 h-6 font-bold'></ArrowRightIcon>
            </div>
        </div>
    );
};

export default ShowOption;