import React from 'react';
import './ExcerciseDetails.css';

const ExcerciseDetails = ({ excerciseTime, breakTime }) => {
    const savedBreakTime = localStorage.getItem('break-time');
    return (
        <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Excercise Details</h2>
            <div className='flex bg-amber-50 px-6 py-4 rounded-lg justify-between mt-4'>
                <h4 className='font-semibold'>Excercise Time</h4>
                <p className='text-gray-400'>{excerciseTime} minutes</p>
            </div>
            <div className='flex bg-amber-50 px-6 py-4 rounded-lg justify-between mt-4'>
                <h4 className='font-semibold'>Break Time</h4>
                <p className='text-gray-400'>{savedBreakTime} minutes</p>
            </div>
        </div>
    );
};

export default ExcerciseDetails;