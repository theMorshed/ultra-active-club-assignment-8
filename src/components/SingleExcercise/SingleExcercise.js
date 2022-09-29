import React from 'react';
import './SingleExcercise.css';

const SingleExcercise = ({excercise, handleTime}) => {
    const { name, image, desc, time } = excercise;
    return (
        <div className='bg-white p-5 rounded-lg'>
            <img className='h-28 xl:h-48 w-full rounded-lg' src={image} alt="" />
            <h4 className='text-2xl font-semibold my-3'>{name}</h4>
            <p className='my-1'>{ desc }</p>
            <p className='my-1'>Time Required: <span className='font-semibold'>{time} minutes</span></p>
            <button onClick={() => {handleTime(time)}} className='w-full bg-amber-800 py-2 rounded-lg mt-3 hover:bg-amber-700 text-white'>Add to List</button>
        </div>
    );
};

export default SingleExcercise;